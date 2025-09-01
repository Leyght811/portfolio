import "../styles/navbar.css";

const Navbar = ({ currentPage, setCurrentPage, scrollTo }) => {
    return (
        <div className="topnav">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
                (buttonText) => {
                    return (
                        <NavButton
                            text={buttonText}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            scrollTo={scrollTo}
                        />
                    );
                }
            )}
        </div>
    );
};

const NavButton = ({ text, currentPage, setCurrentPage, scrollTo }) => {
    return (
        <div
            className={currentPage === text && "active"}
            onClick={() => {
                setCurrentPage(text);
                scrollTo(text);
            }}
        >
            {text}
        </div>
    );
};

export default Navbar;
