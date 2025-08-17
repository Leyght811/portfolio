import logo from '../logo.svg';
import "../styles/content.css"
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import HomeSection from './HomeSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

const Content = () => {
    return (
        <div id="content">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

export default Content;
