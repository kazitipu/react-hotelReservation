import React from "react";
import Hero from "../components/hero.component";
import Banner from "../components/banner.component";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/">
          <button className="btn-primary"> return home </button>
        </Link>
      </Banner>
    </Hero>
  );
};

export default ErrorPage;
