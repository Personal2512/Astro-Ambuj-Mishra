import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import KundliForm from "./components/KundliForm";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <KundliForm />
      <Testimonials />
      <Pricing />
      <Blogs />
      <Footer />
    </>
  );
}