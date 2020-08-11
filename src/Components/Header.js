import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import pdf from "../files/DinuWijetungaResume.pdf";

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
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
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
