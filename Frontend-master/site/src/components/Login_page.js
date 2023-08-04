import React from 'react';
import { useState, useEffect } from "react";

const Login_page = () => {
  let [credentials, setCredentials] = useState(null);

  useEffect(() => {
    getCredentials();
  }, []);

  let getCredentials = async () => {
    let response = await fetch("/api/credentials/");
    let data = await response.json();
    console.log("Data: ", data);
    setCredentials(data);
  };

  const container_div = {
    position : "relative",
    height : "30vh",
    width : "40vw",
    top : "25vh",
    left : "32vw",
    border : "1px dashed lightgray",
    borderRadius : "40px",
  };

  const email_style = {
    position : "relative",
    height : "5vh",
    width : "20vw",
    top : "8.5vh",
    left : "9vw",
    borderRadius : "20px",
    border : "1px solid lightgray",
  };

  const password_style = {
    position : "relative",
    height : "5vh",
    width : "20vw",
    top : "10.5vh",
    left : "9vw",
    borderRadius : "20px",
    border : "1px solid lightgray",
  };
  
  const submit_style = {
    position : "relative",
    height : "3.5vh",
    width : "40vw",
    top : "15.65vh",
    left : "0vw",
    borderRadius : "0 0 40px 40px",
    border : "0px",
  };

  const add_style = {
    position : "relative",
    top : "20vh",
    left : "12.5vw",
    height : "5vh",
    width: "15vw",
    borderRadius : "20px",
    border : "none",
  };

  const h1_style = {
    position : "relative",
    top : "15vh",
    left : "41vw",
    color : "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const body_style = {
    position : "fixed",
    backgroundImage : "linear-gradient(to right, #000000, #3533cd)",
    width : "100vw",
    height : "100vh",
  };

  return (
    <body style = {body_style}>
      <h1 style = {h1_style} >Welcome to Enhance AI</h1>
      <div style = {container_div}>
        <form>
            <input style = {email_style} id = "email" type = "email" placeholder='  Email'/>
            <input style = {password_style} id = "password" type = "password" placeholder='  Password'/>
            <input style = {submit_style} type = "submit" value = "Login"/>
            <button style = {add_style}>Add User</button>
        </form>
      </div>
    </body>
  )
}

export default Login_page
