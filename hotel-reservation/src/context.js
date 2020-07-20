import React, { Component } from "react";
import items from "./data";

let RoomContext = React.createContext();
class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      featuredRooms: [],
      filteredRooms: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getRoomsData(items);
    console.log(this.state);
  }

  getRoomsData = (items) => {
    let roomData = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let fields = item.fields;
      return { id, images, fields };
    });
    let featuredRooms = roomData.filter((item) => item.fields.featured);
    this.setState({
      rooms: roomData,
      featuredRooms,
      loading: false,
    });
    return roomData;
  };

  getRoom = (slug) => {
    console.log(this.state);
    const room = this.state
      ? this.state.rooms.find((room) => room.fields.slug === slug)
      : null;
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
export { RoomContext, RoomProvider };
