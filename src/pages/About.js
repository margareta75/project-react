import React from "react";

function About() {
  return (
    <React.Fragment>
      <h2 style={aboutStyle}>About app</h2>
      <p style={aboutStyle}>
        This is the TodoList app v1.0.0. made by Gosia. It is part of a React
        crash course.
      </p>
    </React.Fragment>
  );
}

const aboutStyle = {
  marginLeft: "10px",
  marginRight: "10px",
};

export default About;
