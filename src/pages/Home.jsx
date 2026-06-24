import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Stats from "../components/home/Stats";
// import AstroShop from "../components/home/AstroShop";
import Services from "../components/home/Services";
import KundliForm from "../components/home/KundliForm";
import Pricing from "../components/home/Pricing";
import Panchang from "../components/home/Panchang";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      {/* <AstroShop /> */}
      <Services />
      <KundliForm />
      <Pricing />
      <Panchang />
    </>
  );
}