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

import carousel1 from "../../assets/carousel-1.jpg";
import carousel2 from "../../assets/carousel-2.jpg";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";
import service4 from "../../assets/service-4.jpg";
import service5 from "../../assets/service-5.jpg";
import service6 from "../../assets/service-6.jpg";
import service7 from "../../assets/service-7.jpg";
import service8 from "../../assets/service-8.jpg";
import experienceImg from "../../assets/about-1.jpg";
import circleImg from "../../assets/about-2.jpg";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import team4 from "../../assets/team-4.jpg";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import testimonialImg from "../../assets/testimonial-img.jpg";

const slides = [
  {
    id: 1,
    title: "Best Solution For Painful Life",
    subtitle: "PHYSIOTHERAPY CENTER",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: carousel1,
    buttonText: "Book Appointment",
    buttonLink: "#",
  },
  {
    id: 2,
    title: "Healing Touch That Works",
    subtitle: "REHABILITATION SPECIALIST",
    description:
      "Experience quality care with expert therapists. We ensure every step of recovery is personalized for you.",
    image: carousel2,
    buttonText: "Get Started",
    buttonLink: "#",
  },
];

const heroSection = {
  slides,
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
const aboutSection = {
  experience: "15 years experience",
  experienceImg,
  circleImg,
  subheading: "ABOUT US",
  heading: "We are Ready to Help Improve Your Treatment.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!",
  points: [
    "Refresing to get such a personal touch.",
    "Duis aute irure dolor in reprehenderit in voluptate.",
    "Velit esse cillum dolore eu fugiat nulla pariatur.",
  ],
  buttonText: "Discover More",
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
const team = [
  {
    name: "Full Name",
    title: "Massage Physio Therapist",
    image: team1,
    socials: [
      {
        icon: FaFacebookF,
        link: "#",
      },
      {
        icon: FaTwitter,
        link: "#",
      },
      {
        icon: FaLinkedinIn,
        link: "#",
      },
      {
        icon: FaInstagram,
        link: "#",
      },
    ],
  },
  {
    name: "Full Name",
    title: "Rehabilitation Therapist",
    image: team2,
    socials: [
      {
        icon: FaFacebookF,
        link: "#",
      },
      {
        icon: FaTwitter,
        link: "#",
      },
      {
        icon: FaLinkedinIn,
        link: "#",
      },
      {
        icon: FaInstagram,
        link: "#",
      },
    ],
  },
  {
    name: "Full Name",
    title: "Doctor of Physical therapy",
    image: team3,
    socials: [
      {
        icon: FaFacebookF,
        link: "#",
      },
      {
        icon: FaTwitter,
        link: "#",
      },
      {
        icon: FaLinkedinIn,
        link: "#",
      },
      {
        icon: FaInstagram,
        link: "#",
      },
    ],
  },
  {
    name: "Full Name",
    title: "Doctor of Physical therapy",
    image: team4,
    socials: [
      {
        icon: FaFacebookF,
        link: "#",
      },
      {
        icon: FaTwitter,
        link: "#",
      },
      {
        icon: FaLinkedinIn,
        link: "#",
      },
      {
        icon: FaInstagram,
        link: "#",
      },
    ],
  },
];

const teamSection = {
  subheading: "MEET OUR TEAM",
  heading: "Physiotherapy Services from Professional Therapist",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!",
  team,
};

// --------------------------------------------------------------------------------------
const blogPosts = [
  {
    id: 1,
    image: blog1,
    date: "01 Jan 2045",
    comments: 3,
    title: "Remove back Pain While Working on o physio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto,",
  },
  {
    id: 2,
    image: blog2,
    date: "01 Jan 2045",
    comments: 3,
    title: "Benefits of a weekly physiotherapy session",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto,",
  },
  {
    id: 3,
    image: blog3,
    date: "01 Jan 2045",
    comments: 3,
    title: "Regular excercise can slow ageing process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto,",
  },
];

const blogSection = {
  subheading: "OUR BLOG",
  heading: "Excellent Facility and High Quality Therapy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!",
  blogPosts,
  buttonText: "Read More",
  buttonLink: "#",
};

// --------------------------------------------------------------------------------------
const featuresList = [
  {
    id: 1,
    text: "Body Relaxation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deserunt qui cupiditate veritatis enim ducimus.",
  },
  {
    id: 2,
    text: "Body Relaxation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deserunt qui cupiditate veritatis enim ducimus.",
  },
];

const contactSection = {
  subheading: "Solutions To Your Pain",
  heading: "Best Quality Services With Minimal Pain Rate",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!",
  featuresList,
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
  heroSection,
  serviceSection,
  aboutSection,
  whyChooseUsSection,
  teamSection,
  blogSection,
  contactSection,
  testimonialSection,
};
