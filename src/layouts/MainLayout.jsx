import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CartModal from "../components/common/CartModal";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <CartModal />
      <Outlet />
      <Footer />
    </>
  );
}