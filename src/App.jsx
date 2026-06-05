import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import KundliForm from "./components/KundliForm";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
// import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import About from "./components/About";
// import Zodiac from "./components/Zodiac";
import Panchang from "./components/Panchang";
import AstroShop from "./components/AstroShop";
import Bracelets from "./pages/Bracelets";
import Gemstones from "./pages/Gemstones";
import Rudraksha from "./pages/Rudraksha";
import CrystalTrees from "./pages/CrystalTrees";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Zodiac /> */}
      <About />
      <Stats />
      <AstroShop />
      <Services />
      <KundliForm />
      {/* <Testimonials /> */}
      <Pricing />
      <Panchang />
      {/* <Blogs /> */}
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bracelets" element={<Bracelets />} />
      <Route path="/gemstones" element={<Gemstones />} />
      <Route path="/rudraksha" element={<Rudraksha />} />
      <Route path="/crystal-trees" element={<CrystalTrees />} />
    </Routes>
  );
}
