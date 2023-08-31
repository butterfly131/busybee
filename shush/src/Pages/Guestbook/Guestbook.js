import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { createPosts } from '../../Actions/Posts';


import "./Guestbook.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ postData, setPostData ] = useState({ creator: '', message: ''});
  const post = useSelector((state) => state.posts);

  useEffect(() => {
    if (post) setPostData(post);
    console.log(post);
  }, [post]);

  const submit = () => {
    dispatch(createPosts(postData));
    navigate('/display');
  };


  return (
    <div className="profile-popup">
      <div className="profile-nav">
        <h3 className="title">Your Message</h3>
        <div className="profile-input">
          <label>Name:</label>
          <input
            type="text"
            name="creator"
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
        </div>
        <div className="profile-input" >
          <label>Message:</label>
          <textarea
            name="message"
            value={postData.message}
            onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          ></textarea>
        </div>
        <div className="btns">
          <button className="profile-save-btn" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
