import React from "react";
import "./Poem.css";
import { Link } from "react-router-dom";

const Poem = () => {
  return (
    <div className="body-poem1">
      <h1 className="title1">Busy Bee</h1>
      <Link to="/gallery"><span className="arrow1"></span></Link>
      <section className="container c1">
        <div className="row r1">
          <div className="col-lg-6 col-12 col1">
            <div className="poem-container-left1">
              <div id="p" className=" im1">
                <p>
                  In a world of busy bees, one stands tall,
                  <br/>
                  Our friend Busy Bee, always on the ball.
                  <br/>
                  With a schedule packed, no time to rest,
                  <br/>
                  He's the master of busyness, we must confess.
                  <br/>
                </p>
                <p>
                  Oh Busy Bee, the busiest of them all,
                  <br/>
                  Your to-do list never seems to fall.
                  <br/>
                  From dawn to dusk, you're always in a race,
                  <br/>
                  But we wonder, do you ever slow your pace?
                  <br/>
                </p>
                <p>
                  Freddie's tunes may have to wait, 
                  <br/>
                  As you conquer the world, your work slate.
                  <br/>
                  But hey, take a break, it won't cause a fuss,
                  <br/>
                  It's your birthday, Busy Bee, time to buzz :)
                  <br/>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 col2">
            <div id="p">
              <p>
                Happy Birthday, our tireless friend,
                <br/>
                May your busy schedule never end.
                <br/>
                Sit back, relax, and enjoy the show,
                <br/>
                Take a break, because we all know.
                <br/>
              </p>
              <p>
                You're the busiest bee we've ever seen,
                <br/>
                But even busy bees deserve a routine.
                <br/>
                So kick up your feet, have some fun,
                <br/>
                Let loose, Busy Bee, the work can be undone.
                <br/>
              </p>
              <p>
                Here's to you, the busiest bee in town,
                <br/>
                May you find time to laugh and clown.
                <br/>
                On this special day, let's all raise a toast,
                <br/>
                To our workaholic friend, you're the most!
                <br/>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Poem;
