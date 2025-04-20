import { useState, useEffect } from "react";
import { Link } from "wouter";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm" : "bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary dark:text-primary">
          {personalInfo.name}
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle className="ml-4" />
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md pb-4 animate-in slide-in-from-top">
          <ul className="px-6 pt-2 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 hover:text-primary dark:hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
