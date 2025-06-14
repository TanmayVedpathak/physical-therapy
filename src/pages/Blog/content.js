import carousel2 from "../../assets/carousel-2.jpg";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";

const bannerSection = {
  image: carousel2,
  title: "Physiotherapy Blog",
  pagePath: [{ path: "/blog", text: "Blog" }],
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

export { bannerSection, blogSection };
