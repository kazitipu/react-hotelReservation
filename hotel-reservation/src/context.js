import React, { Component } from "react";
// import items from "./data";
import Client from "./contentful";

let RoomContext = React.createContext();
class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      filteredRooms: [],
      loading: true,
      type: "all",
      capacity: 1,
      maxPrice: 0,
      minPrice: 0,
      price: 0,
      maxSize: 0,
      minSize: 0,
      breakfast: false,
      pets: false,
    };
  }

  componentDidMount = () => {
    this.getRoomsData();
  };

  getRoomsData = async () => {
    let response = await Client.getEntries({
      content_type: "beachHotel",
      order: "sys.createdAt",
    });
    console.log(response.items);
    let roomData = response.items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let fields = item.fields;
      return { id, images, fields };
    });
    let featuredRooms = roomData.filter((item) => item.fields.featured);
    let maxPrice = Math.max(...roomData.map((room) => room.fields.price));
    let maxSize = Math.max(...roomData.map((room) => room.fields.size));
    this.setState({
      rooms: roomData,
      sortedRooms: roomData,
      featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
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

  handleChange = (event) => {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      type,
      price,
      minSize,
      maxSize,
      capacity,
      rooms,
      breakfast,
      pets,
    } = this.state;
    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.fields.type === type);
    }

    capacity = parseInt(capacity);
    if (capacity > 1) {
      tempRooms = tempRooms.filter((room) => room.fields.capacity > capacity);
    }

    price = parseInt(price);
    tempRooms = tempRooms.filter((room) => room.fields.price <= price);
    tempRooms = tempRooms.filter(
      (room) => room.fields.size >= minSize && room.fields.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.fields.breakfast);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.fields.pets);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
export { RoomContext, RoomProvider };
