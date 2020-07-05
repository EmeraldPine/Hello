import React from 'react';
import pic from '../images/cropped-photo.png'; 
import "../styles/styles.css";

function Profile() {
    
  //note: don't have image or picture, or photo in alt text, else receive warning
  return <img src={pic} alt="Ryan Chang"/>;
}
export default Profile;