import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import "./Navbar.css";
import { useProlong } from "../hooks/useProlong";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  const toggleMenuOpen = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const prolongedMenuOpen = useProlong(menuOpen, 350);
  const linkClass = menuOpen ? "" : "fade-out";

  return (
    <>
      <nav>
        <MenuIcon open={menuOpen} onClick={toggleMenuOpen} />
        {prolongedMenuOpen && (
          <>
            <Link className={linkClass} to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link className={linkClass} to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link className={linkClass} to="/skills" onClick={closeMenu}>
              Skills
            </Link>
            <Link className={linkClass} to="/projects" onClick={closeMenu}>
              Projects
            </Link>
            <Link className={linkClass} to="/contact" onClick={closeMenu}>
              Contact Me
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
