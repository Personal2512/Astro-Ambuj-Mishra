import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Bracelets from "../pages/shop/Bracelets";
import Gemstones from "../pages/shop/Gemstones";
import Rudraksha from "../pages/shop/Rudraksha";
import CrystalTrees from "../pages/shop/CrystalTrees";
import ProductDetail from "../pages/shop/ProductDetail";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Courses from "../pages/Courses";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />

        {/* ── Category listing pages ── */}
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/gemstones" element={<Gemstones />} />
        <Route path="/rudraksha" element={<Rudraksha />} />
        <Route path="/crystal-trees" element={<CrystalTrees />} />

        {/* ── Shared product detail page ── */}
        <Route
          path="/bracelets/:id"
          element={<ProductDetail category="bracelets" />}
        />
        <Route
          path="/gemstones/:id"
          element={<ProductDetail category="gemstones" />}
        />
        <Route
          path="/rudraksha/:id"
          element={<ProductDetail category="rudraksha" />}
        />
        <Route
          path="/crystal-trees/:id"
          element={<ProductDetail category="crystal-trees" />}
        />
      </Route>
    </Routes>
  );
}
