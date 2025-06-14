import {
  Banner,
  ServicesSection,
  TestimonialCarousel,
  WhyChooseUs,
} from "../../components";
import {
  bannerSection,
  serviceSection,
  testimonialSection,
  whyChooseUsSection,
} from "./content";

const Services = () => {
  return (
    <>
      <Banner
        image={bannerSection.image}
        title={bannerSection.title}
        pagePath={bannerSection.pagePath}
      />
      <ServicesSection serviceSection={serviceSection} />
      <WhyChooseUs whyChooseUsSection={whyChooseUsSection} />
      <TestimonialCarousel testimonialSection={testimonialSection} />
    </>
  );
};

export default Services;
