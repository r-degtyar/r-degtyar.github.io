import Button from "@/shared/ui/button";
import { splitText } from "@/shared/utils";
import { getImageUrl } from "@/shared/utils";
import "./intro.scss";

export default function Intro({
  title = "",
  description = "",
  link = { text: "", href: "" },
  images = {},
}) {
  const [firstTitlePart, lastTitlePart] = splitText(title);
  const [firstDescriptionPart, lastDescriptionPart] = splitText(description);
  const imageUrl = Object.values(images)
    .map((value) => getImageUrl(value))
    .join(", ");

  return (
    <section className="intro" style={{ backgroundImage: imageUrl }}>
      <div className="intro__content">
        <h1 className="intro__title">
          {firstTitlePart} <span>{lastTitlePart}</span>
        </h1>
        <p className="intro__description">
          {firstDescriptionPart} <span>{lastDescriptionPart}</span>
        </p>
        <Button
          text={link.text}
          href={link.href}
          className="button_section_intro"
        />
      </div>
    </section>
  );
}
