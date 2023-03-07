import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="h-14 border flex items-center text-[#34312D] border-black px-6 justify-between">
      <div className="flex items-center">
        <span className="text-3xl">☀️</span>
        <span className="text-2xl font-semibold">
          <Link to="/">Klara</Link>
        </span>
      </div>

      <ul className="flex gap-5">
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Sign up</Link>
        </li>
        <li>Dark Mode</li>
      </ul>
    </nav>
  );
};

export default Navbar;
