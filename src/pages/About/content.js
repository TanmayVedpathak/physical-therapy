import {
  FaUserMd,
  FaHeartbeat,
  FaNotesMedical,
  FaUsers,
  FaSpa,
  FaUserNurse,
  FaBullseye,
  FaStethoscope,
} from "react-icons/fa";

import carousel2 from "../../assets/carousel-2.jpg";
import experienceImg from "../../assets/about-1.jpg";
import circleImg from "../../assets/about-2.jpg";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import team4 from "../../assets/team-4.jpg";

const bannerSection = {
  image: carousel2,
  title: "About Us",
  pagePath: [{ path: "/about", text: "About Us" }],
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

const team = [
  {
    name: "Full Name",
    title: "Massage Physio Therapist",
    image: team1,
  },
  {
    name: "Full Name",
    title: "Rehabilitation Therapist",
    image: team2,
  },
  {
    name: "Full Name",
    title: "Doctor of Physical therapy",
    image: team3,
  },
  {
    name: "Full Name",
    title: "Doctor of Physical therapy",
    image: team4,
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

export { bannerSection, aboutSection, teamSection, whyChooseUsSection };
