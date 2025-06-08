import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import ContactUsForm from "./ContactUsForm";
import { Link } from "react-router-dom";

const ContactUsSection = () => {
  return (
    <section className="bg-cyan-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold uppercase tracking-wide relative inline-block">
            <span className="border-t-2 border-white absolute w-full top-1/2 left-0 transform -translate-y-1/2 z-0" />
            <span className="relative px-4 bg-cyan-500 z-10">Contact Us</span>
          </h3>
          <p className="mt-4 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <ContactUsForm />

          <div className="w-full lg:w-1/5 space-y-6 text-center">
            <div>
              <div className="bg-white text-cyan-600 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-2">
                <FaMapMarkerAlt />
              </div>
              <h4 className="font-bold">Addresses</h4>
              <p>123 ranking Street, New York, USA</p>
            </div>

            <div>
              <div className="bg-white text-cyan-600 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-2">
                <FaPhone />
              </div>
              <h4 className="font-bold">Mobile</h4>
              <p>
                +012 345 67890
                <br />
                +012 345 67890
              </p>
            </div>

            <div>
              <div className="bg-white text-cyan-600 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-2">
                <FaEnvelope />
              </div>
              <h4 className="font-bold">Email</h4>
              <p>
                info@example.com
                <br />
                info@example.com
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/5 space-y-6">
            <div className="flex justify-center gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    to="#"
                    className="w-[32px] h-[32px] bg-white text-customBlack group hover:bg-primary rounded-[50%] flex justify-center items-center border-2 border-white"
                  >
                    <Icon className="group-hover:text-white" />
                  </Link>
                ),
              )}
            </div>

            <div className="rounded overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Mumbai, India&z=13&output=embed"
                width="100%"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
