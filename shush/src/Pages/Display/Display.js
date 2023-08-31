import React, { useEffect } from "react";
import { Container, Grid, CircularProgress, Typography } from "@material-ui/core";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Actions/Posts";
import Footer from "../../components/Footer/Footer";
import useStyles from "./Styles";

const Display = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="xl">
          <Typography variant="h4" className={classes.title}>
            Ciphered Whispers: <br></br> Hacked from the Heart :)   
          </Typography>
          <Grid container spacing={2} alignContent="center" >
            {posts.length ? (
              posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
                  <Post post={post} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12} className={classes.container}>
                <CircularProgress />
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
      <Footer className={classes.footer}/>
    </>
  );
};

export default Display;
