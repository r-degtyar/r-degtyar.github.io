import { ReactComponent as Basket } from "@/shared/assets/basket.svg";
import "./menu.scss";

export default function Header({ menu = [], isOpen = false }) {
  return (
    <div className={`menu ${isOpen ? "menu_open" : ""}`}>
      <menu className="menu__list">
        {menu.map((item) => (
          <li key={item.id} className="menu__item">
            <a
              href={item.href}
              className="menu__link menu__link_type_text"
              data-text={item.name}
            >
              <span>{item.name}</span>
            </a>
          </li>
        ))}
        <li className="menu__item">
          <a href="/" className="menu__link menu__link_type_basket">
            <Basket />
          </a>
        </li>
      </menu>
    </div>
  );
}
