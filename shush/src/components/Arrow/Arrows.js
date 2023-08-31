import React from "react";
import "./Arrows.css";
import { Link } from "react-router-dom";

const Arrows = () => {
  return (
    <div>
      {/* <Link to="/poem2" className="arrows-link"> */}
      <div className="arrows-link">
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Arrows;
