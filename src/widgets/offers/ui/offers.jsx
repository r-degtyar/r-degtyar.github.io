import Button from "@/shared/ui/button";
import "./offers.scss";
import { getImageUrl } from "@/shared/utils";

export default function Offers({ offers = [] }) {
  return (
    <section className="offers">
      <h2 className="offers__title">Offers</h2>
      <ul className="offers__list">
        {offers.map((offer) => (
          <li
            key={offer.id}
            className="offers__item"
            style={{
              backgroundImage: getImageUrl(offer.image),
            }}
          >
            <div className="offers__item-content">
              <h3 className="offers__item-title">{offer.name}</h3>
              <p className="offers__item-description">{offer.description}</p>
              <Button
                text={offer.link.text}
                href={offer.link.href}
                className="button_type_transparent button_section_offers"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
