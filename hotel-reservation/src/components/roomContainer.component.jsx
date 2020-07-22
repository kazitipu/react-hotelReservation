import React, { Component } from "react";
import RoomFilter from "./roomFilter.component";
import RoomList from "./roomList.component";

export default class RoomContainer extends Component {
  render() {
    return (
      <div>
        <RoomFilter />
        <RoomList />
      </div>
    );
  }
}
