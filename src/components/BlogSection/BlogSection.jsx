import { motion } from "framer-motion";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import "./BlogSection.css";
import { Link } from "react-router-dom";

const BlogSection = ({ blogSection }) => {
  const {
    subheading,
    heading,
    description,
    blogPosts,
    buttonText,
    buttonLink,
  } = blogSection;
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 bg-white text-center"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="title-left-line ml-auto mr-auto">
          <p className="subheading title-right-line">{subheading}</p>
        </div>
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>

        <div className="grid lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-card border border-primary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="w-full h-70 overflow-hidden group blog-image">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-70 object-cover transition-all duration-300 ease-in-out group-hover:scale-125"
                />
              </div>
              <div className="p-5 text-left">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1 text-primary" />
                    <span className="text-base">{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaComments className="mr-1 text-primary" />
                    <span className="text-base">{post.comments} Comments</span>
                  </div>
                </div>
                <h3 className="font-custom2 text-2xl text-[var(--text-black)] hover:text-primary font-medium mb-3">
                  {post.title}
                </h3>
                <p className="text-base text-[var(--text-gray)] my-4">
                  {post.desc}
                </p>
                <Link to={buttonLink} className="block w-max common-button">
                  <span>{buttonText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
