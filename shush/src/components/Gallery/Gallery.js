import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import useStyles from "./GalleryStyles.js";

const Gallery = () => {
  const classes = useStyles();
  const [showIntro, setShowIntro] = useState(false);
  const [showIntro1, setShowIntro1] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showContent1, setshowContent1] = useState(false);
  const [showContent2, setshowContent2] = useState(false);
  const [button, setButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowIntro(true), 2500); 
    setTimeout(() => setShowImage1(true), 19000); 
    setTimeout(() => setshowContent1(true), 21500); 
    setTimeout(() => setshowContent2(true), 24000); 
    setTimeout(() => setShowImage2(true), 27000); 
    setTimeout(() => setShowIntro1(true), 29000); 
    setTimeout(() => setButton(true), 31000); 
  }, []);

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.title}>
          Meet the Contradiction Virtuoso!
        </Typography>
        {showIntro && (
          <Typography variant="body1" className={classes.intro}>
            <TypeAnimation
              sequence={[
                `Behold, The One and Only, the enigma wrapped in a paradox, the master
                  of contradictions - our very own Contradiction Virtuoso! Don't even
                  try to understand him, because even he doesn't get himself half the
                  time! :)`,
                1000,
                "",
              ]}
              speed={50}
              repeat={0}
            />
          </Typography>
        )}
        <Grid container spacing={1} className={classes.cardContainer} elevation={6}>
          {showImage1 && (
            <div>
              <Grid container alignItems="center">
                <Grid item xs={12} md={6} lg={5}>
                  <div className={classes.polaroid}>
                    <div className={classes.imageContainer}>
                      <img
                        src="https://github.com/butterfly131/shush/blob/main/public/alien.jpg?raw=true"
                        alt="alien"
                        // style={{filter: 'blur(35px)'}}
                        className={classes.image}
                      />
                    </div>
                    <Typography variant="body2" className={classes.caption}>
                      When he claims he's busy, but we all know he's just exploring
                      all the quirky filters on snap.
                    </Typography>
                  </div>
                </Grid>
                {showContent1 && (
                  <Grid item xs={12} md={6} lg={7}>
                    <Typography className={classes.cont1}>
                      Introducing the Birthday Paradox! This unique individual is known for
                      his out-of-this-world charm and creativity. A kind-hearted grump,
                      a talented goofball, and a gentle chaos creator all at once :)
                      <br/>
                      It's like having a mix of sunshine and thunder in one person. Here's 
                      to you, the master of contradictions!
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </div>
          )}
        </Grid>

        <Grid container spacing={1} className={classes.cardContainer} elevation={6}>
        {showIntro1 && (
            <Grid item xs={12} md={6} lg={7}>
              <Typography variant="body1" className={classes.cont2}>
                Ever met someone who can be both a night owl and an early bird?
                Someone who's obsessed with order, but his desk looks like a hurricane
                hit it? That's our Contradiction Master! He's the reason
                'predictable' and 'unpredictable' are now synonyms in our dictionary.
                From loving spicy food yet sweating like a waterfall, to being a pro
                multitasker but losing his keys every morning, he's a walking oxymoron
                and we love him for it! (just kidding 😒)
              </Typography>
            </Grid>
          )}
          {showImage2 && (
            <Grid item xs={12} md={6} lg={5}>
              <div className={classes.polaroid}>
                <div className={classes.imageContainer}>
                  <img
                    src="https://github.com/butterfly131/shush/blob/main/public/bzb.jpg?raw=true"
                    alt="bzb"
                    style={{ filter: "blur(5px)" }}
                    className={classes.image}
                  />
                </div>
                <Typography variant="body2" className={classes.caption}>
                  Master of The Art of Selective Hearing, crafting clever comebacks,
                  words, and witty one-liners with flair.
                </Typography>
              </div>
            </Grid>
          )}
          
        </Grid>  

        {button && (
          <Link to="/display" style={{textDecoration: "none"}} >
            <Button variant="contained" color="primary"  className={classes.button}>
              Get Ready for Some Contradictions!
            </Button>
          </Link>
        )}
      </Container>
    </div>
  );
};

export default Gallery;
