import React from 'react';
import './Butterfly.css';
import { ReactComponent as ButterflySvg } from "./butterfly.svg";

const Butterfly = () => {
  return (
    <div className="b-container">
      <ButterflySvg className="butterfly" />
    </div>
  )
}

export default Butterfly