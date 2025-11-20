import { useState } from "react";
import { ReactComponent as Logo } from "@/shared/assets/logo.svg";
import Menu from "@/widgets/menu";
import "./header.scss";

export default function Header({ menu = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" title="Home">
          <Logo className="header__logo" />
        </a>
        <button
          type="button"
          className={`header__burger ${isMenuOpen ? "header__burger_open" : ""}`}
          onClick={handleMenuClick}
          title="Menu"
        >
          {Array.from({ length: 3 })
            .fill(0)
            .map((_, index) => (
              <i key={index} className="header__burger-line" />
            ))}
        </button>
      </div>
      <Menu menu={menu} isOpen={isMenuOpen} />
    </header>
  );
}
