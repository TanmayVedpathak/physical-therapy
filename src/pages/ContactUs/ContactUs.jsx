import { Banner, ContactUsSection } from "../../components";
import { bannerSection } from "./content";

const ContactUs = () => {
  return (
    <>
      <Banner
        image={bannerSection.image}
        title={bannerSection.title}
        pagePath={bannerSection.pagePath}
      />
      <ContactUsSection />
    </>
  );
};

export default ContactUs;
