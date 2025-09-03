import "../../styles/ProjectsSection.css"

const ProjectCard = ({showModal, projImg, projName, projDetails}) => {
    return (
        <div onClick={() => showModal(projName, projImg, projDetails)} className="project-card">
            <div className="project-card-img">
                <img src={projImg} />
            </div>
            <div className="project-card-name">
                {projName}
                dsjlfhasdkl
            </div>
        </div>
    )
}

export default ProjectCard