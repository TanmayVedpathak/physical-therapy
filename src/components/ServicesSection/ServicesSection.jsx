import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

const ServicesSection = ({ serviceSection }) => {
  const { subheading, heading, description, services, buttonText, buttonLink } =
    serviceSection;

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-4"
    >
      <div className="title-left-line ml-auto mr-auto">
        <p className="subheading title-right-line">{subheading}</p>
      </div>
      <h2 className="heading">{heading}</h2>
      <p className="description">{description}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition services-card"
          >
            <div className="h-44 services-card-img">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="services-card-details">
              <div className="p-4 pb-4 flex flex-col flex-grow relative z-[4]">
                <h3 className="font-custom2 text-xl font-medium mb-6 group-hover:text-secondary z-[4]">
                  {service.title}
                </h3>
                <p className="text-base text-[var(--text-gray)] group-hover:text-[var(--text-white)] flex-grow mb-4 z-[4]">
                  {service.description}
                </p>
                <Link to={service.link} className="common-button w-max">
                  <span>Read More</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link to={buttonLink} className="common-button w-max">
          <span>{buttonText}</span>
        </Link>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
