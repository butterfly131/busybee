import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  const handleExploreClick = () => {
    navigate("/banner");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 17000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="body">
      <div className="container-home">
        <div className="text-wrapper">
          <h1 className="l1-home">Why is it so dark here?</h1>
          <h1 className="l2-home">Just like someone's mind!</h1>
          <h1 className="l3-home">Oh, someone loves darkness...</h1>
          <h1 className="l4-home">Dark Lord!</h1>
          <h1 className="l5-home">Help me light up?</h1>
        </div>
        <br />
        {showButton && (
          <button className="btn-home" onClick={handleExploreClick}>
            Light up!
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
