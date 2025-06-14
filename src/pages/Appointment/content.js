import carousel2 from "../../assets/carousel-2.jpg";

const bannerSection = {
  image: carousel2,
  title: "Book Appointment",
  pagePath: [{ path: "/appointment", text: "Appointment" }],
};

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

export { bannerSection, contactSection };
