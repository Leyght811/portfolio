import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Modal.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
const Modal = ({ setDisplayModal, modalTitle, modalImg, modalText }) => {
    return (
        <div>
            <div
                onClick={() => setDisplayModal(false)}
                id="modal-background"
            ></div>
            <div id="modal-content">
                <div id="modal-header">
                    <div id="modal-title">{modalTitle}</div>
                    <div id="modal-close">
                        <FontAwesomeIcon
                            id="close-icon"
                            onClick={() => setDisplayModal(false)}
                            icon={faCircleXmark}
                        />
                    </div>
                </div>
                <div id="modal-image">
                    <img src={modalImg} />
                </div>
                <div id="modal-text">{modalText}</div>
            </div>
        </div>
    );
};

export default Modal;
