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
              
            My name’s Dinu - think Dinu the Dinosaur to help you remember! I'm a Software Engineering 
            student at the University of Waterloo passionate about using tech for social good. <br />
              <br />
              In my free time I enjoy exploring the outdoors, hanging out with friends, cooking 
              and baking, and going swimming as often as I can! If you need to get in touch, please email: {email}  
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
