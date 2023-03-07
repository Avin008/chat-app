import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <nav className="h-14 border flex items-center text-[#34312D] border-black px-6 justify-between">
      <div className="flex items-center">
        <span className="text-3xl font-extrabold font-comfort">
          <Link to="/">Klara</Link>
        </span>
      </div>

      <ul className="flex gap-5 items-center font-medium">
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Sign up</Link>
        </li>
        <li
          className="hover:bg-gray-200 p-1 rounded-md shadow-sm hover:cursor-pointer"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <MdLightMode size={25} />
          ) : (
            <MdDarkMode size={25} />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
