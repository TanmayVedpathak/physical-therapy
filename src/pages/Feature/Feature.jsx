import { Banner, WhyChooseUs } from "../../components";
import { bannerSection, whyChooseUsSection } from "./content";

const Feature = () => {
  return (
    <>
      <Banner
        image={bannerSection.image}
        title={bannerSection.title}
        pagePath={bannerSection.pagePath}
      />
      <WhyChooseUs whyChooseUsSection={whyChooseUsSection} />
    </>
  );
};

export default Feature;
