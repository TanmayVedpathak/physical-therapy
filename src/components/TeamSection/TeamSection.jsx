import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const TeamSection = ({ teamSection }) => {
  const { subheading, heading, description, team } = teamSection;
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 bg-white text-center"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="title-left-line ml-auto mr-auto">
          <p className="subheading title-right-line">{subheading}</p>
        </div>
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => {
            console.log(index, member?.socials);
            return (
              <div
                key={index}
                className="group bg-white border border-cyan-300 rounded-md overflow-hidden hover:shadow-md transition relative"
              >
                <div className="group-hover:bg-primary transition-all duration-300 ease-in-out relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[340px] object-cover"
                  />

                  <div className="absolute -bottom-10 group-hover:bottom-4 left-1/2 -translate-x-1/2 flex gap-3  transition-all duration-300 ease-in-out">
                    {member?.socials?.map((social, i) => (
                      <Link
                        key={i}
                        to={social.link}
                        className="group-icon bg-primary hover:bg-transparent p-2 rounded-full shadow-sm"
                      >
                        <social.icon className="text-white group-icon-hover:text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-6 group-hover:bg-primary transition-all duration-300 ease-in-out">
                  <h3 className="font-custom2 text-secondary group-hover:text-[var(--text-black)] font-medium text-xl mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary group-hover:text-[var(--text-white)] text-base">
                    {member.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
