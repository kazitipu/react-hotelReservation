import React from "react";
import { RoomContext } from "../context";
import Room from "../components/room.component";

class RoomList extends React.Component {
  static contextType = RoomContext;
  render() {
    if (this.context.sortedRooms.length === 0) {
      return (
        <div className="empty-search">
          <h3>Unfortunately no rooms found by your search</h3>
        </div>
      );
    }
    return (
      <div className="roomslist">
        <div className="roomslist-center">
          {this.context.sortedRooms.map((room) => (
            <Room room={room} key={room.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default RoomList;
