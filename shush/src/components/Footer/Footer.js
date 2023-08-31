import React from "react";
import { Typography, Link } from "@material-ui/core";
import useStyles from "./FooterStyles.js";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <Typography variant="body2" className={classes.footerLink}>
          <Link href="/guestbook" color="inherit" style={{color: 'white', fontSize: '1.2rem', fontFamily: 'Ruluko'}}>
            Write a Message!
          </Link>
        </Typography>
        <Typography variant="body2" className={classes.footerLink}>
          <Link
            href="https://www.instagram.com/myheartturningblue/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            style={{color: 'white', fontSize: '1.2rem', fontFamily: 'Ruluko'}}
          >
            Know me?
          </Link>
        </Typography>
      </div>
      <Typography variant="body2" className={classes.copywrite}>
        &copy; {new Date().getFullYear()} Blue Butterfly | All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
