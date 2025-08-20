import "../styles/content.css"

const BigButton = ({ text, onClick }) => {
    return (
        <div className="big-button">
            <button
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default BigButton
