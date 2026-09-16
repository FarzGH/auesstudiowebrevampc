import HeroProposal from "@/components/sections/proposal/HeroProposal";
import DonaturSection from "@/components/sections/proposal/DonaturSection";
import PartnershipSection from "@/components/sections/proposal/PartnershipSection";
import MemberGenSection from "@/components/sections/proposal/MemberGenSection";
import ProyekEventSection from "@/components/sections/proposal/ProyekEventSection";
import PenutupCTA from "@/components/sections/proposal/PenutupCTA";

export default function ProposalPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-ink font-sans text-parchment selection:bg-garnet-bright selection:text-ink">
      <HeroProposal />
      <DonaturSection />
      <PartnershipSection />
      <MemberGenSection />
      <ProyekEventSection />
      <PenutupCTA />
    </main>
  );
}
