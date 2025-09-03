import "../../styles/AboutSection.css"
import "../../styles/Content.css"
import image from "../../images/166174698_4058100004254658_8371604346512076007_n.jpg"
import BigButton from "../BigButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

const AboutSection = ({ref}) => {
    return(
        <div ref={ref} className="section-container">
            <h2 className="section-headers">
                About
            </h2>
            <div id="about-info">
                <div id="about-text">
                    <p>A versatile and hard working web developer from Whanganui, New Zealand.  I studied for my Bachelors degree in IT at UCOL.  I'm a quick learner of new skills.  I also have interests in Game development and 3d modeling/animation.  My hobbies include archery, reading and gaming.  I've been working in web development for about 6 years.</p>
                    <BigButton text={<span><FontAwesomeIcon icon={faDownload} />  CV</span>} />
                </div>
                <div id="about-image">
                    <img src={image} />
                </div>
            </div>
        </div>
    )
}

export default AboutSection