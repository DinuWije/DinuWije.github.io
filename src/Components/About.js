import React, { Component } from "react";
import ExampleComponent from "react-rounded-image";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/profilepic2.png";
    }

    var email = <a href="mailto:dwijetun@uwaterloo.ca" target="_blank">email</a>;

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
              
            My name’s Dinu - think Dinu the Dinosaur to help you remember! I'm a 1B Software Engineering 
            student at the University of Waterloo passionate about using leadership and technology for social good. <br />
              <br />
              In my free time I enjoy exploring the outdoors, hanging out with friends, cooking 
              and baking, and going swimming as often as I can! Check out the rest of my website to learn more about me or {email} to get in touch!  
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
