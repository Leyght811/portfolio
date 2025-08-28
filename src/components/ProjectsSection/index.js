import { useState } from "react";
import "../../styles/content.css";
import "../../styles/ProjectsSection.css"
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    const [projects, setProjects] = useState([0, 1, 2, 3, 4, 5, 6, 7])
    return (
        <div className="section-container">
            <h2 className="section-headers">Projects</h2>
            <div id="projects-slider">
                {projects.map(project => {
                    return (
                        <ProjectCard />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsSection