import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

// Mengambil daftar kontak admin dari environment variable (format JSON array).
// Dulu data ini ikut ter-commit di lib/config.json bersama kredensial rahasia —
// sekarang dipisah supaya tidak ada data sensitif apa pun yang tersimpan di kode sumber.
function loadAdminContacts() {
  try {
    const raw = process.env.ADMIN_CONTACTS_JSON;
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn("[Config Warning] ADMIN_CONTACTS_JSON tidak valid:", err.message);
    return [];
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method Not Allowed" });

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({
        success: false,
        message: "Konfigurasi Supabase belum terpasang di Environment Variable (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).",
      });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ success: false, message: "Format JSON tidak valid!" });
      }
    }

    const { name, email, wa_number, age, gender, country, region, category, pref_fields, hobby } = body || {};

    if (!name || !email || !wa_number || !age || !gender || !country || !region) {
      return res.status(400).json({ success: false, message: "Harap isi semua kolom wajib!" });
    }

    let countryCode = "62";
    if (country === "Malaysia") countryCode = "60";

    let cleanWa = String(wa_number).replace(/[^0-9]/g, "");
    if (cleanWa.startsWith("0")) {
      cleanWa = countryCode + cleanWa.slice(1);
    } else if (!cleanWa.startsWith(countryCode)) {
      cleanWa = countryCode + cleanWa;
    }

    const cardId = "AUS-" + Math.floor(100000 + Math.random() * 900000);
    const targetGroupJid = process.env.TARGET_GROUP_JID || "";

    let waGroupLink = "https://chat.whatsapp.com/INVITE_LINK_DEFAULT";
    let query = supabase.from("group_invites").select("invite_link");

    if (targetGroupJid) {
      query = query.eq("group_jid", targetGroupJid);
    } else {
      query = query.order("updated_at", { ascending: false }).limit(1);
    }

    const { data: groupData } = await query.maybeSingle();
    if (groupData?.invite_link) {
      waGroupLink = groupData.invite_link;
    }

    const { error: dbError } = await supabase.from("registrations").insert([
      {
        card_id: cardId,
        name,
        email,
        wa_number: cleanWa,
        age: parseInt(age, 10),
        gender,
        country,
        region,
        category: category || "Anime Lovers",
        preferences: pref_fields || {},
        hobby: hobby || null,
        status: "pending",
        created_at: new Date().toISOString(),
      },
    ]);

    if (dbError) {
      return res.status(500).json({
        success: false,
        message: "Gagal menyimpan data pendaftaran.",
        detail: dbError.message,
      });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");

    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: gmailUser, pass: gmailPass },
        });

        const admins = loadAdminContacts();
        const adminListHTML = admins
          .map(
            (adm) =>
              `<li><b>${adm.name}:</b> <a href="https://wa.me/${String(adm.phone).replace(/[^0-9]/g, "")}" target="_blank" style="color: #25D366; text-decoration: none;">+${adm.phone}</a></li>`
          )
          .join("");

        await transporter.sendMail({
          from: `"Academy Uma Sovereign" <${gmailUser}>`,
          to: email,
          subject: `[A'ueS] Verifikasi Pendaftaran & Link WhatsApp - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
              <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 25px; border-radius: 12px; border: 1px solid #e0e0e0;">
                <h2 style="color: #111827; text-align: center;">Selamat Datang di Academy Uma Sovereign!</h2>
                <p>Halo <strong>${name}</strong>,</p>
                <p>Pendaftaran Anda telah berhasil diproses. Berikut adalah rincian identitas pendaftaran Anda:</p>

                <div style="background: #f8fafc; border-left: 4px solid #C9A768; padding: 15px; margin: 20px 0; border-radius: 4px;">
                  <p style="margin: 0; text-transform: uppercase; font-size: 12px; color: #64748b;">Card ID Anda:</p>
                  <h3 style="margin: 5px 0 0 0; font-family: monospace; color: #0f172a; font-size: 20px;">${cardId}</h3>
                </div>

                <p>Silakan bergabung ke grup WhatsApp resmi kami melalui tombol di bawah ini:</p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${waGroupLink}" style="background-color: #25D366; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Masuk ke Grup WhatsApp Public</a>
                </div>

                <p style="font-size: 13px; color: #64748b;">* Link berlaku sekali pakai. Begitu Anda masuk, sistem akan mereset link secara otomatis demi keamanan grup.</p>

                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0 15px 0;" />

                ${
                  admins.length > 0
                    ? `
                <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 8px; font-size: 13px; color: #166534;">
                  <p style="margin: 0 0 6px 0; font-weight: bold;">Jika ada kendala, silakan hubungi admin berikut:</p>
                  <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                    ${adminListHTML}
                  </ul>
                </div>
                `
                    : ""
                }

                <p style="font-size: 11px; color: #94a3b8; text-align: center; margin-top: 20px;">Academy Uma Sovereign (A'ueS) &copy; ${new Date().getFullYear()}</p>
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error("[Nodemailer Error]:", mailErr);
      }
    }

    return res.status(200).json({
      success: true,
      card_id: cardId,
      message: "Pendaftaran berhasil.",
    });
  } catch (error) {
    console.error("[Unhandled API Error]:", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan sistem pada server.",
      error: error.message,
    });
  }
}
