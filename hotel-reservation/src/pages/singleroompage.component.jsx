import React from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import Banner from "../components/banner.component";
import StyledHero from "../styledHero";

class SingleRoomPage extends React.Component {
  static contextType = RoomContext;
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    console.log(this.context);
  }
  render() {
    const room = this.context.getRoom(this.props.match.params.roomId);
    console.log(room);
    return (
      <>
        <StyledHero img={room ? room.images[0] : null}>
          <Banner title={room ? `${room.fields.name} room` : null}>
            <Link to="/rooms">
              <button className="btn-primary">back to rooms</button>
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {room
              ? room.images.map((image, index) => (
                  <img src={image} key={index} alt="room" />
                ))
              : null}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Description</h3>
              <p>
                "Street art edison bulb gluten-free, tofu try-hard lumbersexual
                brooklyn tattooed pickled chambray. Actually humblebrag next
                level, deep v art party wolf tofu direct trade readymade
                sustainable hell of banjo. Organic authentic subway tile cliche
                palo santo, street art XOXO dreamcatcher retro sriracha portland
                air plant kitsch stumptown. Austin small batch squid gastropub.
                Pabst pug tumblr gochujang offal retro cloud bread bushwick
                semiotics before they sold out sartorial literally mlkshk.
                Vaporware hashtag vice, sartorial before they sold out pok pok
                health goth trust fund cray."
              </p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${room ? room.fields.price : null}</h6>
              <h6>Size : {room ? room.fields.size : null} SQFT</h6>
              <h6>
                Capacity :
                {room
                  ? room.fields.capacity > 1
                    ? `${room.fields.capacity} people`
                    : "1 person"
                  : null}
              </h6>
              <h6>
                {room
                  ? room.fields.pet
                    ? "pets allowed"
                    : "pets not allowed"
                  : null}
              </h6>
              <h6>{room ? room.fields.breakfast && "free breakfast" : null}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {room
              ? room.fields.extras.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))
              : null}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoomPage;
