import { useState } from "react";
import { ReactComponent as Logo } from "@/shared/assets/logo.svg";
import Menu from "@/widgets/menu";
import "./header.scss";

export default function Header({ menu = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="header__container">
        <a href="/">
          <Logo className="header__logo" />
        </a>
        <button
          type="button"
          className={`header__burger ${isMenuOpen ? "header__burger_open" : ""}`}
          onClick={handleMenuClick}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <i key={index} className="header__burger-line" />
          ))}
        </button>
      </div>
      <Menu menu={menu} isOpen={isMenuOpen} />
    </header>
  );
}
