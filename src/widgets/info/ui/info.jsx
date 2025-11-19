import "./info.scss";

export default function Info({ title = "", description = "", details = {} }) {
  return (
    <section className="info">
      <h4 className="info__title">{title}</h4>
      <p className="info__description">{description}</p>
      {Object.keys(details).length > 0 && (
        <details className="info__details">
          <summary className="info__summary">{details.title}</summary>
          <p className="info__description">{details.description}</p>
        </details>
      )}
    </section>
  );
}
