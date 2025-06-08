import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = ({ aboutSection }) => {
  const {
    experience,
    experienceImg,
    circleImg,
    subheading,
    heading,
    description,
    points,
    buttonText,
    buttonLink,
  } = aboutSection;

  return (
    <section className="bg-[#f9f9f9] py-24 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full lg:w-[40%]"
        >
          <div className="relative">
            <img
              src={experienceImg}
              alt="Experience"
              className="rounded-xl w-full"
            />
            <img
              src={circleImg}
              alt="Massage"
              className="absolute -bottom-16 left-0 lg:-left-10 rounded-full border-8 border-white object-cover"
            />
          </div>
          <div className="absolute -left-10 top-1/3 transform -rotate-90 origin-left text-primary font-semibold hidden lg:block">
            {experience}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[60%] mt-16 lg:mt-0"
        >
          <div className="">
            <p className="subheading title-right-line">{subheading}</p>
          </div>
          <h2 className="font-custom2 mr-auto ml-auto text-5xl lg:text-[64px] font-semibold mt-2 mb-4  text-customBlack leading-snug">
            {heading}
          </h2>
          <p className="text-[var(--text-gray)] mb-6">{description}</p>
          <ul className="space-y-4 mb-6">
            {points}
            {points?.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">✔</span>
                <span className="text-secondary">{text}</span>
              </li>
            ))}
          </ul>
          <Link to={buttonLink} className="common-button block w-max">
            <span>{buttonText}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
