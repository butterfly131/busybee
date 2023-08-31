import React from 'react';
import { Card, Typography, CardContent, Divider } from '@material-ui/core';
import useStyles from "./PostStyle.js";

const Post = ({ post }) => {
    const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardContent>
            <Typography variant='h5' className={classes.creator}>
                {post.creator}
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant='body1' className={classes.message}>
                {post.message}
            </Typography>
        </CardContent>
    </Card>
  );
};

export default Post;
