import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./WhyChooseUs.css";

const WhyChooseUs = ({ whyChooseUsSection }) => {
  const { subheading, heading, description, features, buttonText, buttonLink } =
    whyChooseUsSection;

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="title-left-line ml-auto mr-auto">
          <p className="subheading">{subheading}</p>
        </div>
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-[#f9f9f9] border border-cyan-300 rounded-md p-6 shadow-sm hover:shadow-md transition-all duration-300 why-choose-card"
              >
                <div className="flex mb-6 relative z-[2]">
                  <div className="bg-white p-3 rounded-md shadow-md">
                    <Icon size={60} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-custom2 text-xl font-medium mb-4 relative z-[2]">
                  {item.title}
                </h3>
                <p className="group-hover:text-white text-[var(--text-gray)] text-base relative z-[2]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link to={buttonLink} className="common-button block w-max">
            <span>{buttonText}</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
