import React from "react";
import defaultImage from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";

const Room = ({
  room: {
    id,
    images,
    fields: { name, price, slug },
  },
}) => {
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="loading" />

        <div className="price-top">
          <h6> ${price}</h6>
          <p>per night</p>
        </div>

        <Link to={`rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
        <div className="room-info">{name}</div>
      </div>
    </article>
  );
};

export default Room;
