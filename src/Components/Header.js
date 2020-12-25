import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import pdf from "../files/DinuWijetungaResume.pdf";
import Typist from 'react-typist';
import Typical from 'react-typical';

class Header extends Component {
  render() {
    if (this.props.data) {
      var linkedIn = this.props.data.linkedIn;
      var github = this.props.data.github;
      var resumeDownload = this.props.data.resumedownload;
      var name = this.props.data.name;
      var description = this.props.data.description;
      var languages = this.props.data.languages;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Extracurriculars
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Typical
              steps={['Dinu ', 150, 'Dinu Wijetunga', 500]}
              wrapper="h1"
            />
            <Typist cursor={{show: false}}>
              <Typist.Delay ms={1500} />
              <h3>University of Waterloo Software Engineering '25</h3>
              <Typist.Backspace count={47} delay={1500} />
              <h3>Passionate about using technology for social good</h3>
              <Typist.Backspace count={49} delay={1500} />
              <h3>Avid camper, swimmer, and nature lover</h3>
              <Typist.Backspace count={38} delay={1500} />
              <h3>Interested in Frontend and Mobile Dev</h3>
              <Typist.Backspace count={37} delay={1500} />
              <h3>Huge movie buff (Interstellar is my fav)</h3>
              <Typist.Backspace count={41} delay={1500} />
              <h3>University of Waterloo Software Engineering '25</h3>
            </Typist>
            <hr />
            <ul className="social">
              <a
                href={linkedIn}
                className="button btn project-btn"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>LinkedIn
              </a>
              <a
                href={github}
                className="button btn github-btn"
                target="_blank"
              >
                <i className="fa fa-github"></i>GitHub
              </a>
              <a
                href={pdf}
                className="button btn resume-btn"
                target="_blank"
              >
                <i className="fa fa-file"></i>Resume
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
