import React from "react";
import "./style.css";

interface cardProps {
  src: string;
  title: string;
  details: string;
}

const Card: React.FC<cardProps> = ({ src, title, details }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <h3>{title}</h3>
      <p>{details}</p>
    </div>
  );
};

export default Card;
