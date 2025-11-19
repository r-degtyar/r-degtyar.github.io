import "./button.scss";

export default function Button({ text = "", href = "", className = "" }) {
  let classNames = ["button"];

  if (className) {
    classNames.push(className);
  }

  classNames = classNames.join(" ");

  if (!href) {
    return (
      <button type="button" className={classNames}>
        {text}
      </button>
    );
  }
  return (
    <a href={href} className={classNames}>
      {text}
    </a>
  );
}
