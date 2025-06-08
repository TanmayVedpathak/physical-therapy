import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import AppointmentForm from "./AppointmentForm";
import videoImg from "../../assets/video-img.jpg";
import carousel2 from "../../assets/carousel-2.jpg";
import "./ContactSection.css";

function ContactSection({ contactSection, setIsModalOpen }) {
  const {
    subheading,
    heading,
    description,
    featuresList,
    buttonText,
    buttonLink,
  } = contactSection;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${carousel2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto overflow-hidden">
        <motion.div
          initial={{ transform: "translateX(-500px)" }}
          whileInView={{ transform: "translateX(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] space-y-6"
        >
          <p className="subheading title-right-line">{subheading}</p>
          <h2 className="font-custom2 max-w-[600px] mr-auto ml-auto text-5xl lg:text-6xl font-semibold mt-2 mb-4">
            {heading}
          </h2>
          <p className="text-[var(--text-gray)] text-base max-w-2xl mx-auto mb-10">
            {description}
          </p>
          <div className="flex ">
            <div className="w-100 lg:w-1/2 px-2">
              <ul className="space-y-2 mb-6">
                {featuresList?.map((feat) => (
                  <li key={feat.id} className="flex flex-col gap-2">
                    <p className="flex gap-2 items-center">
                      <span className="text-primary text-lg">✔</span>
                      <strong className="block font-custom2">
                        {feat.text}
                      </strong>
                    </p>
                    <p className="text-[var(--text-gray)] max-w-2xl mx-auto mb-2">
                      {feat.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <Link to={buttonLink} className="common-button block w-max">
                <span>{buttonText}</span>
              </Link>
            </div>
            <div className="w-100 lg:w-1/2 relative rounded-2xl overflow-hidden">
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-secondary p-7 rounded-full flex justify-center items-center"></div>
              <div
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-secondary p-7 rounded-full cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <FaPlay className="text-white" size={35} />
              </div>
              <img
                src={videoImg}
                alt="video-img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ transform: "translateX(500px)" }}
          whileInView={{ transform: "translateX(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <AppointmentForm onSubmit={handleSubmit} />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
