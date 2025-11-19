import "./footer.scss";

export default function Footer({ text = "", image = {} }) {
  return (
    <footer className="footer">
      <picture className="footer__picture">
        <source
          srcSet={[`${image.webp["1x"]} 1x`, `${image.webp["2x"]} 2x`].join(
            ", ",
          )}
          type="image/webp"
        />
        <source
          srcSet={[`${image.avif["1x"]} 1x`, `${image.avif["2x"]} 2x`].join(
            ", ",
          )}
          type="image/avif"
        />
        <img
          src={[`${image.webp["1x"]} 1x`, `${image.webp["2x"]} 2x`].join(", ")}
          alt="Rocket"
        />
      </picture>
      <p className="footer__text">{text}</p>
    </footer>
  );
}
