import Footer from "@/widgets/footer";
import Header from "@/widgets/header";
import Info from "@/widgets/info";
import Intro from "@/widgets/intro";

import Offers from "@/widgets/offers";

import data from "@/shared/data/data.json";

import "./main.scss";

export default function Main() {
  return (
    <div className="main">
      <Header menu={data.menu}></Header>
      <main>
        <Intro
          title={data.intro.title}
          description={data.intro.description}
          link={data.intro.link}
          images={data.intro.images}
        />
        <div className="main__container">
          <Offers offers={data.offers} />
          <Info
            title={data.info.title}
            description={data.info.description}
            details={data.info.details}
          />
        </div>
      </main>
      <Footer text={data.footer.text} image={data.footer.image} />
    </div>
  );
}
