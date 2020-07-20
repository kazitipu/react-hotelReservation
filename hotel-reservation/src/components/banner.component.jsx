import React from "react";

const Banner = ({ children, title, subtitle }) => {
  return (
    <header className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </header>
  );
};

export default Banner;
