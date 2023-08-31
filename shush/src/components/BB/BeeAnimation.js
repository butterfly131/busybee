import React from "react";
import './BeeAnimation.css'
import { ReactComponent as BeeSvg } from "./bee.svg";

const BeeAnimation = () => {
  return (
    <div className="animation-container">
      <BeeSvg className="bee" />
    </div>
  );
};

export default BeeAnimation;
