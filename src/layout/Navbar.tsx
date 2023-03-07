const Navbar = () => {
  return (
    <nav className="h-14 border flex items-center border-black px-6 justify-between">
      <div className="flex items-center">
        <span className="text-3xl">☀️</span>
        <span className="text-2xl font-semibold">
          Klara
        </span>
      </div>

      <ul className="flex gap-5">
        <li>LOGIN</li>
        <li>SIGN UP</li>
        <li>DARK MODE</li>
      </ul>
    </nav>
  );
};

export default Navbar;
