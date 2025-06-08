import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaReply,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFax,
} from "react-icons/fa";
import carousel2 from "../../assets/carousel-2.jpg";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${carousel2})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">*</span> Terapia
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dolorem impedit eos autem dolores laudantium quia, qui similique
          </p>
          <div className="flex items-center gap-3">
            <FaReply className="text-3xl" />
            <FaFacebookF className="bg-primary p-2 text-3xl rounded-full" />
            <FaTwitter className="bg-primary p-2 text-3xl rounded-full" />
            <FaInstagram className="bg-primary p-2 text-3xl rounded-full" />
            <FaLinkedinIn className="bg-primary p-2 text-3xl rounded-full" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>› About Us</li>
            <li>› Contact Us</li>
            <li>› Privacy Policy</li>
            <li>› Terms & Conditions</li>
            <li>› Our Blog & News</li>
            <li>› Our Team</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Terapia Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>› All Services</li>
            <li>› Physiotherapy</li>
            <li>› Diagnostics</li>
            <li>› Manual Therapy</li>
            <li>› Massage Therapy</li>
            <li>› Rehabilitation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Street, New York, USA
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +012 345 67890
            </li>
            <li className="flex items-center gap-2">
              <FaFax /> +012 345 67890
            </li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
