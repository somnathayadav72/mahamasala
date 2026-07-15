import Bestsellers from "@/components/home/Bestsellers";
import Hero from "@/components/home/Hero";
import RootedSection from "@/components/home/RootedSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import SignatureMasalas from "@/components/home/SignatureMasalas";
import SocialProof from "@/components/home/SocialProof";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByCategory variant="home" />
      <SignatureMasalas />
      <Bestsellers useShortTags />
      <RootedSection />
      <SocialProof />
    </>
  );
}
