import React from "react";
import "./card.styles.css";
export const Card = props => (
  <div className="card-container">
    <img
      alt="robots"
      src={`https://robohash.org/${props.robots.id}?set=set1&size=180x180`}
    />
    <h2>{props.robots.name}</h2>
    <p>{props.robots.email}</p>
  </div>
);
