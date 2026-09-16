export interface BowEntry {
  name: string;
  img: string;
  link: string;
}

export const BOW_DATA: BowEntry[] = [
  { name: "Noaa", img: "https://unavatar.io/tiktok/noaa_7_7", link: "https://www.tiktok.com/@noaa_7_7" },
  { name: "StarBoy", img: "https://unavatar.io/tiktok/mejiromcqueenstarboy78", link: "https://www.tiktok.com/@mejiromcqueenstarboy78" },
  { name: "Rice", img: "https://unavatar.io/tiktok/rice_shower26", link: "https://www.tiktok.com/@rice_shower26" },
  { name: "Alz", img: "https://unavatar.io/tiktok/alztachyon", link: "https://www.tiktok.com/@alztachyon" },
];

export interface BomEntry {
  name: string;
  imgProfile: string;
  piala: string;
  title: string;
  link: string;
  disabled?: boolean;
}

export const BOM_DATA: BomEntry[] = [
  { name: "Ariel", imgProfile: "https://unavatar.io/tiktok/speaker_hunter", piala: "https://i.imgur.com/0h9zmnR.png", title: "Most Viral", link: "https://vt.tiktok.com/ZS4Adq5RA/" },
  { name: "no one", imgProfile: "", piala: "https://i.imgur.com/9RwqJ9V.png", title: "Best Editing", link: "", disabled: true },
  { name: "Danzo", imgProfile: "https://unavatar.io/tiktok/danzo_nazri555", piala: "https://i.imgur.com/eQqMz4Z.png", title: "Best Design", link: "https://www.tiktok.com/@danzo_nazri555" },
  { name: "Noaa", imgProfile: "https://unavatar.io/tiktok/noaa_7_7", piala: "https://i.imgur.com/NlUgbhK.png", title: "Most Consistent", link: "https://www.tiktok.com/@noaa_7_7" },
];

export const BOM_PERIOD_LABEL = "JULY";
