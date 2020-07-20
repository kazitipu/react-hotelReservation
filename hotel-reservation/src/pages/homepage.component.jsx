import React from "react";
import Hero from "../components/hero.component";
import Banner from "../components/banner.component";
import { Link } from "react-router-dom";
import Services from "../components/services.component";
import FeaturedRooms from "../components/featuredRooms.component";
const HomePage = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooom starting at only $259"
        >
          <Link to="/rooms">
            <button className="btn-primary"> our rooms</button>
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default HomePage;
