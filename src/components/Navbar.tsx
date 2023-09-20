import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import "./Navbar.css";

interface NavbarProps {
  menuOpen: boolean;
  toggleMenuOpen: VoidFunction;
}

const Navbar = ({ menuOpen, toggleMenuOpen }: NavbarProps) => {
  return (
    <>
      <nav>
        <MenuIcon open={menuOpen} onClick={toggleMenuOpen} />
        <Link className={menuOpen ? "" : "invisible"} to="/">
          Home
        </Link>
        <Link className={menuOpen ? "" : "invisible"} to="/about">
          About
        </Link>
        <Link className={menuOpen ? "" : "invisible"} to="/skills">
          Skills
        </Link>
        <Link className={menuOpen ? "" : "invisible"} to="/projects">
          Projects
        </Link>
        <Link className={menuOpen ? "" : "invisible"} to="/contact">
          Contact Me
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
