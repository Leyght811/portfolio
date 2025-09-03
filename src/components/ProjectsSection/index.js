import { useState } from "react";
import "../../styles/Content.css";
import "../../styles/ProjectsSection.css";
import ProjectCard from "./ProjectCard";
import Modal from "../Modal";
import { projects } from "./Projects";

const ProjectsSection = ({ ref }) => {
    const [displayModal, setDisplayModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalImg, setModalImg] = useState(null)
    const [modalText, setModalText] = useState("")

    const showModal = (title, img, text) => {
        setModalTitle(title)
        setModalImg(img)
        setModalText(text)
        setDisplayModal(true)
    }
    return (
        <div ref={ref} className="section-container">
            <h2 className="section-headers">Projects</h2>
            <div id="projects-slider">
                {projects.map((project) => {
                    return <ProjectCard showModal={showModal} projImg={project.projImg} projName={project.projName} projDetails={project.projDetails} />;
                })}
            </div>
            {displayModal && <Modal modalTitle={modalTitle} modalImg={modalImg} modalText={modalText} setDisplayModal={setDisplayModal} />}
        </div>
    );
};

export default ProjectsSection;
