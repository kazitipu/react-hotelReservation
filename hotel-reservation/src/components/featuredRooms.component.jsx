import React, { Component } from "react";
import Title from "./title.component";
import { RoomContext } from "../context";
import Room from "./room.component";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    console.log(this.context);
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {this.context.featuredRooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </div>
      </section>
    );
  }
}
