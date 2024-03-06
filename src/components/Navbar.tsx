import { Link } from "react-router-dom";
import { useProlong } from "../hooks/useProlong";
import MenuIcon from "./MenuIcon";
import pages from "../pages";
import "./Navbar.css";

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
        {prolongedMenuOpen &&
          pages.map(({ label, route }) => (
            <Link
              className={linkClass}
              to={route}
              onClick={closeMenu}
              key={route}
            >
              {label}
            </Link>
          ))}
      </nav>
    </>
  );
};

export default Navbar;
