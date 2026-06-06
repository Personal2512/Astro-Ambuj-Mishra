import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Bracelets from "../pages/shop/Bracelets";
import Gemstones from "../pages/shop/Gemstones";
import Rudraksha from "../pages/shop/Rudraksha";
import CrystalTrees from "../pages/shop/CrystalTrees";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/gemstones" element={<Gemstones />} />
        <Route path="/rudraksha" element={<Rudraksha />} />
        <Route path="/crystal-trees" element={<CrystalTrees />} />
      </Route>
    </Routes>
  );
}