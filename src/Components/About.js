import React, { Component } from "react";
import ExampleComponent from "react-rounded-image";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/profilepic4.jpg";
    }

    var email = <a href="mailto:dwijetun@uwaterloo.ca" target="_blank">dwijetun@uwaterloo.ca</a>;

    return (
      
      <section id="about">
        <div className="row">
          <div className="three columns">
            <a href="mailto:dwijetun@uwaterloo.ca" target="_blank">
              <ExampleComponent
                classname="profile-pic"
                image={profilepic}
                imageWidth="300"
                imageHeight="300"
                roundedSize="7"
                roundedColor="#27B1DF"
              />
            </a>
          </div>
          <div className="nine columns main-col">
            <h2>Hey there,</h2>
            <p style={{fontSize: '20px'}}>
              
            My name’s Dinu - I'm looking to work with some talented people to build high‑performance, scalable software systems. <br />
              <br />
              I'm finishing up my Software Engineering degree at UWaterloo, and in my free time I like to improve my cooking 
              skills, work out with friends, and travel with my family! <br />
              <br />
              I'd love to chat, so please reach out to me at my email: {email}  
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
