import "../styles/navbar.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="topnav">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
                (buttonText) => {
                    return (
                        <NavButton
                            text={buttonText}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    );
                }
            )}
        </div>
    );
};

const NavButton = ({ text, currentPage, setCurrentPage }) => {
    return (
        <div
            className={currentPage === text && "active"}
            onClick={() => setCurrentPage(text)}
        >
            {text}
        </div>
    );
};

export default Navbar;
