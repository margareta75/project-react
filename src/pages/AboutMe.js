import React from "react";

function AboutMe() {
  return (
    <React.Fragment>
      <h2 style={aboutStyle}>About me</h2>
      <p style={aboutStyle}>
        My name is Gosia. I'm a java developer student at "Grit Academy". It was
        fun to make this tutorial.
      </p>
    </React.Fragment>
  );
}

const aboutStyle = {
  marginLeft: "10px",
  marginRight: "10px",
};

export default AboutMe;
