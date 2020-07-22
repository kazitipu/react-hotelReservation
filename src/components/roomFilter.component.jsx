import React from "react";
import Title from "./title.component";
import { RoomContext } from "../context";

class RoomFilter extends React.Component {
  static contextType = RoomContext;

  getUnique = (rooms, value) => {
    return [...new Set(rooms.map((room) => room.fields[value]))];
  };
  render() {
    const {
      handleChange,
      type,
      price,
      capacity,
      maxPrice,
      minPrice,
      maxSize,
      minSize,
      breakfast,
      pets,
      rooms,
    } = this.context;
    // filter by type
    let types = this.getUnique(rooms, "type");
    types = ["all", ...types];
    types = types.map((type, index) => (
      <option value={type} key={index}>
        {type}
      </option>
    ));
    // filter by capacity
    let peoples = this.getUnique(rooms, "capacity");
    peoples = peoples.map((people, index) => (
      <option value={people} key={index}>
        {people}
      </option>
    ));
    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              className="form-control"
              value={type}
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              className="form-control"
              value={capacity}
              onChange={handleChange}
            >
              {peoples}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              id="price"
              className="form-control"
              value={price}
              min={minPrice}
              max={maxPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                className="size-input"
                value={minSize}
                onChange={handleChange}
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                className="size-input"
                value={maxSize}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default RoomFilter;
