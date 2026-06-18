import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
const [open, setOpen] = useState(false);
const [darkMode, setDarkMode] = useState(false);

const toggleTheme = () => {
document.documentElement.classList.toggle("dark");
setDarkMode(!darkMode);
};

const links = [
{
name: "My Story",
href: "#mystory",
},
{
name: "Experience",
href: "#experience",
},
{
name: "Skills",
href: "#skills",
},
{
name: "Projects",
href: "#projects",
},
{
name: "Contact",
href: "#contact",
},
];

return ( <nav
   className="
   fixed
   top-0
   left-0
   w-full
   z-50
   bg-[var(--background)]/90
   backdrop-blur-md
   border-b
   border-[var(--border)]
   "
 > <div
     className="
     max-w-7xl
     mx-auto
     px-6
     py-5
     flex
     items-center
     justify-between
     "
   >
{/* Logo */}

    <a
      href="#home"
      className=" !m-3
      heading-font
      text-3xl
      md:text-4xl
      font-medium
      tracking-wide
      "
    >
      Jesmoon Jahan Lia
    </a>

    {/* Desktop Menu */}

    <div className="hidden lg:flex items-center gap-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="nav-link text-sm tracking-wide"
        >
          {link.name}
        </a>
      ))}
    </div>

    {/* Right Side */}

    <div className="flex items-center gap-4">
      <button
        onClick={toggleTheme}
        className="
        outline-btn
        p-3
        flex
        items-center
        justify-center
        "
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-xl"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}

  {open && (
    <div
      className="
      lg:hidden
      border-t
      border-[var(--border)]
      bg-[var(--background)]
      "
    >
      <div className="flex flex-col px-6 py-6 gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-base"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )}
</nav>


);
};

export default Navbar;
