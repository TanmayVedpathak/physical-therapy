import { useState } from "react";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  HeroCarousel,
  ServicesSection,
  TeamSection,
  TestimonialCarousel,
  WhyChooseUs,
  YouTubeModal,
} from "../../components";
import {
  aboutSection,
  blogSection,
  contactSection,
  heroSection,
  serviceSection,
  teamSection,
  testimonialSection,
  whyChooseUsSection,
} from "./content";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <HeroCarousel heroSection={heroSection} />
      <ServicesSection serviceSection={serviceSection} />
      <AboutSection aboutSection={aboutSection} />
      <WhyChooseUs whyChooseUsSection={whyChooseUsSection} />
      <ContactSection contactSection={contactSection} setIsModalOpen={setIsModalOpen} />
      <YouTubeModal videoId="dQw4w9WgXcQ"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} />
      <TeamSection teamSection={teamSection} />
      <TestimonialCarousel testimonialSection={testimonialSection} />
      <BlogSection blogSection={blogSection} />
    </>
  );
};

export default Home;
