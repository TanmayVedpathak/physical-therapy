import React from "react";
import { Banner, BlogSection } from "../../components";
import { bannerSection, blogSection } from "./content";

const Blog = () => {
  return (
    <>
      <Banner
        image={bannerSection.image}
        title={bannerSection.title}
        pagePath={bannerSection.pagePath}
      />
      <BlogSection blogSection={blogSection} />
    </>
  );
};

export default Blog;
