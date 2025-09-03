import "../styles/Content.css";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

const Content = ({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) => {
    const scrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div id="content">
            <HomeSection ref={homeRef} />
            <AboutSection ref={aboutRef} />
            <SkillsSection ref={skillsRef} />
            <ProjectsSection ref={projectsRef} />
            <ContactSection ref={contactRef} />
        </div>
    );
};

export default Content;
