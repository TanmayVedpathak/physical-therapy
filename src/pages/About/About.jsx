import {
  AboutSection,
  Banner,
  TeamSection,
  WhyChooseUs,
} from "../../components";
import {
  aboutSection,
  bannerSection,
  teamSection,
  whyChooseUsSection,
} from "./content";

const About = () => {
  return (
    <>
      <Banner
        image={bannerSection.image}
        title={bannerSection.title}
        pagePath={bannerSection.pagePath}
      />
      <AboutSection aboutSection={aboutSection} />
      <TeamSection teamSection={teamSection} />
      <WhyChooseUs whyChooseUsSection={whyChooseUsSection} />
    </>
  );
};

export default About;
