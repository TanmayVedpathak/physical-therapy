import { useState } from "react";
import { Banner, ContactSection, YouTubeModal } from "../../components";
import { bannerSection, contactSection } from "./content";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Banner
        image={bannerSection.image}
        title={bannerSection.title}
        pagePath={bannerSection.pagePath}
      />
      <ContactSection
        contactSection={contactSection}
        setIsModalOpen={setIsModalOpen}
      />
      <YouTubeModal
        videoId="dQw4w9WgXcQ"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Appointment;
