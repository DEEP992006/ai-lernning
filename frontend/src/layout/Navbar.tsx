import { Brain } from "lucide-react";
import Cta from "../Features/Navbar/components/Cta";
import Navlink from "../Features/Navbar/components/Navlink";
import Heading from "../Features/Navbar/components/Heading";

// Top navigation bar
const Navbar = () => {
  return (
    <nav className="fixed w-full h-18 flex items-center justify-between py-5 px-12 shadow-sm">
      {/* Logo and brand */}
      <Heading />

      {/* Main navigation links */}
      <Navlink />

      {/* Call-to-action / User menu */}
      <Cta />
    </nav>
  );
};

export default Navbar;
