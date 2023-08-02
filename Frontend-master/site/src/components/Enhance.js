import React from 'react'

const Enhance = (props) => {
    console.log(props);
  return (
    <body>
      <h1>HI I AM</h1>
      <img src = {props.image_url} alt = "I gots no image"></img>
      <p>{props.filename_}</p>
    </body>
  )}
export default Enhance;