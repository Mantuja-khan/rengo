import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Layout = () => {
  const animRef = useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main ref={animRef} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
