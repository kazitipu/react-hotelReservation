import React from "react";
import Hero from "../components/hero.component";
import Banner from "../components/banner.component";
import { Link } from "react-router-dom";

const RoomsPage = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our rooms">
        <Link to="/">
          <button className="btn-primary">return home</button>
        </Link>
      </Banner>
    </Hero>
  );
};

export default RoomsPage;
