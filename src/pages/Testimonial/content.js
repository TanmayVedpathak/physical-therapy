import carousel2 from "../../assets/carousel-2.jpg";
import testimonialImg from "../../assets/testimonial-img.jpg";

const bannerSection = {
  image: carousel2,
  title: "Testimonial",
  pagePath: [{ path: "/testimonial", text: "Testimonial" }],
};

// --------------------------------------------------------------------------------------
const testimonials = [
  {
    name: "John Abraham",
    location: "New York, USA",
    image: testimonialImg,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed!",
  },
  {
    name: "Jane Doe",
    location: "London, UK",
    image: testimonialImg,
    rating: 4,
    text: "Totam aut quidem laudantium tempora. Minima, saepe earum! Ullam pariatur blanditiis sed voluptatum.",
  },
  {
    name: "Alex Smith",
    location: "Sydney, Australia",
    image: testimonialImg,
    rating: 5,
    text: "Aliquam veritatis fugiat placeat non dolorem autem tempore pariatur dolores vel incidunt molestias.",
  },
];

const testimonialSection = {
  subheading: "Testimonial",
  heading: "What Clients are Say",
  testimonials,
};

export { bannerSection, testimonialSection };
