import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link
            to="/"
            className="flex items-center gap-2 font-black text-2xl text-primary hover:opacity-90 transition duration-300"
          >
            <img
              src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
              alt="Eagle Security Guards Logo"
              className="h-9 w-9"
            />
            <span>Eagle</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-12 items-center">
            <Link
              to="/"
              className="hover:text-primary transition-colors font-semibold text-sm text-foreground"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-primary transition-colors font-semibold text-sm text-foreground"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition-colors font-semibold text-sm text-foreground"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors font-semibold text-sm text-foreground"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl text-primary hover:opacity-70 transition-colors font-bold">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
