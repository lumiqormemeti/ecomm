import React from "react";
import "./Grid.css";
import GridCard from "./GridCard";

const Grid = ({ items }) => {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <GridCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Grid;
