import {
  FaUserMd,
  FaHeartbeat,
  FaNotesMedical,
  FaUsers,
  FaSpa,
  FaUserNurse,
  FaBullseye,
  FaStethoscope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import carousel2 from "../../assets/carousel-2.jpg";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";
import service4 from "../../assets/service-4.jpg";
import service5 from "../../assets/service-5.jpg";
import service6 from "../../assets/service-6.jpg";
import service7 from "../../assets/service-7.jpg";
import service8 from "../../assets/service-8.jpg";
import testimonialImg from "../../assets/testimonial-img.jpg";

const bannerSection = {
  image: carousel2,
  title: "Our Services",
  pagePath: [{ path: "/service", text: "Services" }],
};

// --------------------------------------------------------------------------------------

const services = [
  {
    title: "Massage Therapy",
    image: service1,
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam",
    link: "#",
  },
  {
    title: "Physiotherapy",
    image: service2,
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam",
    link: "#",
  },
  {
    title: "Heat & Cold Therapy",
    image: service3,
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam",
    link: "#",
  },
  {
    title: "Chiropractic Therapy",
    image: service4,
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam",
    link: "#",
  },
  {
    title: "Work Injuries",
    image: service5,
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam",
    link: "#",
  },
  {
    title: "Spot Injuries",
    image: service6,
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam",
    link: "#",
  },
  {
    title: "Regular Therapy",
    image: service7,
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam",
    link: "#",
  },
  {
    title: "Back Pain",
    image: service8,
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam",
    link: "#",
  },
];

const serviceSection = {
  subheading: "What We Do",
  heading: "Our Service Given Physio Therapy By Expert.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!",
  services,
  buttonText: "Services More",
  buttonLink: "#",
};

// --------------------------------------------------------------------------------------

const features = [
  {
    icon: FaUserMd,
    title: "Licensed Therapist",
    desc: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: FaNotesMedical,
    title: "Personalized Treatment",
    desc: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: FaHeartbeat,
    title: "Therapy Goals",
    desc: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: FaUsers,
    title: "Practitioners Network",
    desc: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: FaSpa,
    title: "Comfortable Center",
    desc: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: FaUserNurse,
    title: "Experienced Staff",
    desc: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: FaBullseye,
    title: "Therapy Goals",
    desc: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    icon: FaStethoscope,
    title: "Licensed Therapist",
    desc: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
];

const whyChooseUsSection = {
  experience: "15 years experience",
  subheading: "WHY CHOOSE US",
  heading: "Why Choose Us? Get Your Life Style Back",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!",
  features,
  buttonText: "More Details",
  buttonLink: "#",
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

export {
  bannerSection,
  serviceSection,
  whyChooseUsSection,
  testimonialSection,
};
