import React from "react";
import { Link } from "react-router-dom";

const Banner = ({
  image,
  subtitle,
  title,
  pagePath,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center text-center px-4">
        {subtitle && (
          <p className="text-white text-sm lg:text-xl font-custom2 font-bold tracking-widest uppercase mb-8">
            {subtitle}
          </p>
        )}
        {title && (
          <h1 className="text-white text-4xl lg:text-[80px] lg:leading-[80px] font-custom2 font-semibold mb-8">
            {title}
          </h1>
        )}
        {pagePath && (
          <div className="flex items-center gap-2">
            <Link to="/" className="text-white text-base">
              Home
            </Link>
            {pagePath?.map((path, index) => (
              <React.Fragment key={index}>
                <span className="text-white text-base">/</span>
                <Link
                  to={path.path}
                  className={`${
                    pagePath.length == index + 1 ? "text-primary" : "text-white"
                  } text-primary text-base`}
                >
                  {path.text}
                </Link>
              </React.Fragment>
            ))}
          </div>
        )}
        {description && (
          <p className="text-white max-w-2xl text-base lg:text-xl mb-6">
            {description}
          </p>
        )}

        {buttonText && (
          <Link to={buttonLink} className="common-button">
            <span>{buttonText}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
