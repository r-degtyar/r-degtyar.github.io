import "./info.scss";

export default function Info({ title = "", description = "", details = {} }) {
  return (
    <section className="info">
      <h4 className="info__title">{title}</h4>
      <p className="info__description">{description}</p>
      <input type="checkbox" className="info__checkbox" id="info-checkbox" title={details.title.open} />
      <div className="info__details">
        <p className="info__details-description">{details.description}</p>
      </div>
      <label
        htmlFor="info-checkbox"
        className="info__label"
        data-open={details.title.open}
        data-close={details.title.close}
      />
    </section>
  );
}
