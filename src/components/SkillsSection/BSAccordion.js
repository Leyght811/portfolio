import {
    faCircleChevronDown,
    faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const BSAccordion = ({ icon, text, items }) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Accordion onClick={() => setCollapsed(!collapsed)}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <div className="bs-accordion-header-content">
                        <span>
                            <FontAwesomeIcon icon={icon} />
                            {text}
                        </span>
                        <span>
                            {collapsed ? (
                                <FontAwesomeIcon icon={faCircleChevronDown} />
                            ) : (
                                <FontAwesomeIcon icon={faCircleChevronUp} />
                            )}
                        </span>
                    </div>
                </Accordion.Header>
                <Accordion.Body>{items}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default BSAccordion;
