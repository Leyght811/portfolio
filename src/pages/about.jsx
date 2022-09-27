import React from "react";
import "../styles/style.css";
import "../styles/about.css";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-text-box">
        <div className="about-text-header text">
          <div>
            <i>About me</i>
          </div>
          <div style={{ flex: "1", textAlign: "right" }}>
            {/* <div className="cv-button">
                CV
            </div> */}
            <a data-tip="Download CV" href="/files/CV.pdf" download>
              <FontAwesomeIcon icon={faFilePdf} className="cv-button text" />
            </a>
            <ReactTooltip place="top" type="light" effect="float" />
          </div>
        </div>
        <div className="about-text-content text">
          <i className="about-text-italic">
            <b>Software development, web design and 3D modelling</b>
            <br />
            My name is Wesley Wright, in 2017 through to 2020 I studied at UCOL
            in Palmerston North, New Zealand where I started learning how to
            develop software products and came away with a Bachelors degree of
            IT with majors in Software Engineering and Mobile/Web development.
            <br /> In 2018 I started my first development job in between my
            studies, at a local company called Proaxiom. There I developed a web
            product using React JS, as well as gaining some experience with
            databases. I also learned how to work as part of a team, receiving
            tasks and using source control to coordinate my work with other
            developers. This job lasted until the end of 2019. <br /> In 2020,
            as part of my studies, I interned at COMTXT using PHP and Laravel to
            rebuild their website. <br /> And in 2022 I worked for Actuality
            going back to React JS to develop their content management system.
            While working with them I also learned how to use Three.js to add 3d
            assets to a website (as seen on this sites homepage). <br /> Over the last few years I have also studied other skills on my own such as: 3d modelling using Blender and game development using Unreal.
          </i>
        </div>
      </div>
    </div>
  );
};

export default About;
