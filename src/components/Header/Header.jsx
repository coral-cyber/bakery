import React, { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="top-0 bg-orange-200 w-full fixed shadow z-50 ">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      {isMenuOpen && (
        <MobileMenu
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </header>
  );
}

export default Header;

const Navbar = ({
  isMenuOpen,
  isDropdownOpen,
  setIsMenuOpen,
  setIsDropdownOpen,
}) => {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between ">
      <Logo />
      <DesktopMenu
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <DesktopSearch />
      <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
};

// components

const Logo = () => {
  const linkClass = "text-amber-950 hover:text-amber-900 transition";
  return (
    <Link to="#" className=" font-extrabold text-amber-950">
      Atelier Bakes
    </Link>
  );
};
const DesktopMenu = ({ isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <ul className="hidden md:flex items-center space-x-6 font-medium ">
      <MenuLink text="Home" />
      <MenuLink text="Products" />
      <MenuLink text="Contact" />
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        toggle={() => setIsDropdownOpen(!isDropdownOpen)}
      />
    </ul>
  );
};

const MenuLink = ({ text }) => (
  <li>
    <a href="#" className="hover:text-amber-900 transition">
      {text}{" "}
    </a>
    {/* <Link to={`/${text}`}>{text} </Link> */}
  </li>
);

const Dropdown = ({ isDropdownOpen, toggle }) => (
  <li className="relative">
    <button
      onClick={toggle}
      className="flex items-center gap-1 hover:text-amber-900"
    >
      Categories
    </button>
    {isDropdownOpen && <DropdownMenu />}
  </li>
);

const DropdownMenu = () => (
  <ul className="absolute left-0 mt-2 w-44 shadow-lg rounded-lg py-2 border">
    <DropItems text="Sweet" />
    <DropItems text="Savory" />
    <DropItems text="Beverages" />
  </ul>
);
const DropItems = ({ text }) => (
  <li>
    <a href="#" className="block px-4 py-2 hover:bg-gray-500 transition">
      {text}{" "}
    </a>
  </li>
);
const DesktopSearch = () => (
  <div className="hidden md:flex items-center gap-2">
    <input
      type="text"
      placeholder="Search here...."
      className="border rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-amber-500"
    />
    <button className="bg-amber-900 text-orange-300 px-4 py-1.5 rounded-lg hover:bg-amber-300 transition">
      Search
    </button>
  </div>
);
const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen }) => (
  <button
    className="md:hidden text-2xl"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    *
  </button>
);
const MobileMenu = ({ isDropdownOpen, setIsDropdownOpen }) => (
  <div className="md:hidden bg-orange-300 px-4 py-4 shadow-lg border-t">
    <ul className=" space-y-4 font-medium">
      <MobileLink text="Home" />
      <MobileLink text="Products" />
      <MobileLink text="Contact" />
      <MobileDropdown
        isDropdownOpen={isDropdownOpen}
        toggle={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      <MobileSearch />
    </ul>
  </div>
);
const MobileLink = ({ text }) => (
  <li>
    <a href="#" className="block hover:text-amber-900 transition">
      {text}{" "}
    </a>
    {/* <Link to={`/${text.toLowerCase()}`} /> */}
  </li>
);
const MobileDropdown = ({ isDropdownOpen, toggle }) => (
  <li>
    <button
      onClick={toggle}
      className="w-full flex justify-between items-center hover:text-amber-950"
    >
      Categories
    </button>
    {isDropdownOpen && (
      <ul className=" pl-4 mt-3 space-y-2 ">
        <MobileLink text="Sweets" />
        <MobileLink text="Savory" />
        <MobileLink text="Beverages" />
      </ul>
    )}
  </li>
);
const MobileSearch = () => (
  <li>
    <input
      type="text"
      placeholder="search... "
      className="border rounded-lg px-3 py-1.5 w-full outline-none focus:ring-2 focus:ring-amber-500 "
    />
    <button className="bg-amber-700 text-orange-200 px-4 py-1.5 rounded-lg hover:bg-amber-950 transition">
      search
    </button>
  </li>
);
