import "../../styles/Content.css";
import "../../styles/SkillsSection.css";
import {
    faNodeJs,
    faPython,
    faReact,
    faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import BSAccordion from "./BSAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import threeIcon from "../../images/three-js-white.ico";
import djangoIcon from "../../images/django-icon.png";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = ({ref}) => {
    const JSItems = () => {
        return (
            <div>
                <p>
                    <FontAwesomeIcon icon={faNodeJs} /> NODE JS
                </p>
                <p>
                    <FontAwesomeIcon icon={faReact} /> REACT JS
                </p>
                <p>
                    <FontAwesomeIcon icon={faReact} /> REACT NATIVE
                </p>
                <p>
                    <img className="icon" src={threeIcon} /> THREE.JS
                </p>
            </div>
        );
    };
    const PyItems = () => {
        return (
            <div>
                <p>
                    <img className="icon" src={djangoIcon} /> DJANGO CMS
                </p>
            </div>
        );
    };
    return (
        <div ref={ref} className="section-container">
            <h2 className="section-headers">Skills</h2>
            <div id="skills-list">
                <BSAccordion
                icon={faSquareJs}
                text={" JAVASCRIPT"}
                items={<JSItems />}
            />
            <BSAccordion icon={faPython} text={" PYTHON"} items={<PyItems />} />
            <div className="non-accordion">
                <div className="bs-accordion-header-content">
                    <span>
                        <FontAwesomeIcon icon={faDatabase} />
                        {" SQL"}
                    </span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SkillsSection;
