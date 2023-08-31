import React from "react";
import "./Poem0.css";
import { Link } from "react-router-dom";

const Poem0 = () => {
  return (
    <div className="body-poem">
      <section className="container">
        <div className="poem-container-left">
          <h1 className="poem-title">Poison and Antidote</h1>
          <Link to="/poem"><span className="arrow"></span></Link>
          
          <div className="row">
            <p id="p1" className="col t-1 bg-image">
              In this friendship of ours, an interesting twist, <br />
              You're my Poison & Antidote, a funny mix. <br />
              With your words, you sting like a mischievous bee, <br />
              Yet your presence brings healing, just wait and see. <br />
              <br />
              You poke and tease, a master of mischief and fun, <br />
              But when I'm feeling down, you're the only one, <br />
              Who can magically turn my frown upside down, <br />
              Your dark humor & annoyed look, a remedy I've found. <br />
              <br />
              You're the Poison that stirs a storm with my core,<br />
              Yet you're the Antidote that quiets my heart's turmoil. <br />
              No other can wound me as deep as you,<br />
              But your affection's remedy holds its hue. <br />
              <br />
            </p>
            <p
              id="p2"
              className="col text bg-image"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/7e/d9/a5/7ed9a53d9dc40c502b02d24d569d8fc6.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - -110px ) 0px",
                backgroundSize: "cover",
              }}
            >
              Here's to our one-of-a-kind tie, a playful masquerade, <br />
              Where hurt and healing intertwine, unafraid. <br />
              Through laughter and tears, we navigate this ride, <br />
              With you by my side, there's nowhere to hide. <br />
              <br />
              Just remember, my Poison & Antidote friend, <br />
              Our quirky connection, it knows no end. <br />
              You may sting me with words, but I'll always find, <br />
              That healing touch, one of a kind. <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Poem0;
