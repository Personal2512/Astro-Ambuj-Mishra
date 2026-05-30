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
import Panchang from "./Components/Panchang";
import AstroShop from "./components/AstroShop";


export default function App() {
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