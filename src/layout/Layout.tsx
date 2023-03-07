import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-amber-50 h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
