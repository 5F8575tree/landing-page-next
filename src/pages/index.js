import BudgetSearch from "@/components/BudgetSearch/BudgetSearch";
import Hero from "@/components/Hero/Hero";
import ReasonToBelieve from "@/components/ReasonToBelieve/ReasonToBelieve";
import SocialProof from "@/components/SocialProof/SocialProof";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <BudgetSearch />
      <ReasonToBelieve />
      <SocialProof />
    </main>
  );
}
