import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import carousel1 from "../../assets/carousel-1.jpg";
import "./TestimonialCarousel.css";

export default function TestimonialCarousel({ testimonialSection }) {
  const { subheading, heading, testimonials } = testimonialSection;

  return (
    <section
      className="bg-primary-300 text-white py-16 px-4 text-center testimonial-carousel overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(21, 185, 217, 0.8), rgba(21, 185, 217, 0.8)), url(${carousel1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, transform: "scale(1.5)" }}
        whileInView={{ opacity: 1, transform: "scale(1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="title-left-line white-line ml-auto mr-auto">
          <p className="subheading whiteText title-right-line white-line">
            {subheading}
          </p>
        </div>
        <h2 className="heading">{heading}</h2>
        <div className="max-w-6xl mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={5000}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  onClick={onClickHandler}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[var(--text-white)] rounded-full p-3 shadow-lg"
                  aria-label="Previous Slide"
                >
                  <FaArrowLeft size={20} className="text-primary" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  onClick={onClickHandler}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[var(--text-white)] rounded-full p-3 shadow-lg"
                  aria-label="Next Slide"
                >
                  <FaArrowRight size={20} className="text-primary" />
                </button>
              )
            }
          >
            {testimonials.map((item, index) => (
              <div key={index} className="py-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-xl leading-relaxed mb-4">
                  "{item.text}"
                </p>
                <h4 className="text-xl font-medium font-custom2 text-customBlack">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-50 mb-2">{item.location}</p>
                <div className="flex justify-center gap-1 text-secondary">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
}
