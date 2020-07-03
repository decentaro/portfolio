import React from "react";

const About = () => {
  const styleAboutTitle = {
    fontSize: 70,
    fontFamily: 'Dancing Script, Sans-serif',
    paddingTop: 100,
    paddingBottom: 10,
}



  return(
    <div className="wrapper aboutPage">
      <div>
        <h1 style={styleAboutTitle}>About</h1>
      </div>
      <div className="contentAbout">
        <img style={{borderRadius: "50%"}} src="../src/images/backgroundImg.png" alt="" width="50px" height="20px"></img>
      </div>
    </div>
  )
}

export default About;