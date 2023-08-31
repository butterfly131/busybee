import React from 'react';
import './ButterflyAnimation.css';
import { ReactComponent as ButterflySvg } from "./butterfly.svg";


const ButterflyAnimation = () => {
  return (
    <div className="bfly-container">
      <ButterflySvg className="butterfli" />
    </div>
  )
}

export default ButterflyAnimation