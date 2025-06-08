import { Carousel } from "react-responsive-carousel";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Banner from "../Banner/Banner";

export default function HeroCarousel({ heroSection }) {
  const { slides } = heroSection;

  return (
    <div className="relative h-[80vh]">
      <Carousel
        axis="vertical"
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              className="absolute top-1/2 left-4 -translate-y-1/2 -rotate-90 z-10 bg-primary text-white rounded-full p-3 shadow-lg"
              aria-label="Previous Slide"
            >
              <FaArrowUp size={20} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              className="absolute top-1/2 right-4 -translate-y-1/2 -rotate-90 z-10 bg-primary text-white rounded-full p-3 shadow-lg"
              aria-label="Next Slide"
            >
              <FaArrowDown size={20} />
            </button>
          )
        }
      >
        {slides.map((slide) => (
          <Banner
            key={slide.id}
            image={slide.image}
            subtitle={slide.subtitle}
            title={slide.title}
            description={slide.description}
            buttonText={slide.buttonText}
            buttonLink={slide.buttonLink}
          />
        ))}
      </Carousel>
    </div>
  );
}
