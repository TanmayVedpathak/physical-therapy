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

const bannerSection = {
  image: carousel2,
  title: "Our Features",
  pagePath: [{ path: "/feature", text: "Features" }],
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

export { bannerSection, whyChooseUsSection };
