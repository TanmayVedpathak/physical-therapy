import { Banner, TestimonialCarousel } from "../../components";
import { bannerSection, testimonialSection } from "./content";

const Testimonial = () => {
  return (
    <>
      <Banner
        image={bannerSection.image}
        title={bannerSection.title}
        pagePath={bannerSection.pagePath}
      />
      <TestimonialCarousel testimonialSection={testimonialSection} />
    </>
  );
};

export default Testimonial;
