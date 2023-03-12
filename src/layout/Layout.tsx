import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="bg-amber-50 h-screen">
      <Navbar />
      <Outlet />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Layout;
