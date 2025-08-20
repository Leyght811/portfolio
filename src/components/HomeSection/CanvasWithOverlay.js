import React, { useRef, useEffect } from "react";
import "../../styles/HomeSection.css";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BigButton from "../BigButton";

export default function CanvasWithOverlay() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // const canvas = canvasRef.current;
        // const ctx = canvas.getContext("2d");
        // // Resize canvas dynamically
        // canvas.width = canvas.offsetWidth;
        // canvas.height = canvas.offsetHeight;
    }, []);

    const openLink = (link) => {
        console.log("TEST");
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* Canvas fills container */}
            {/* <canvas ref={canvasRef} id="home-canvas" /> */}

            {/* Overlay fills container too */}
            <div id="home-container">
                <div id="home-main">
                    <div id="home-image">
                        <img
                            alt="My image"
                            src={logo}
                            style={{ height: "40vmin" }}
                        />
                    </div>
                    <div id="home-info">
                        <h1 id="home-info-text">
                            Hi,
                            <br />
                            Im <span>Wesley</span>
                            <br />
                            Web Developer
                        </h1>
                        <BigButton
                            text={"CONTACT"}
                            onClick={() =>
                                openLink(
                                    "https://www.linkedin.com/in/wesley-wright-307156191/"
                                )
                            }
                        />
                    </div>
                </div>
                <div id="home-footer">
                    <FontAwesomeIcon
                        onClick={() =>
                            openLink(
                                "https://www.linkedin.com/in/wesley-wright-307156191/"
                            )
                        }
                        size="2x"
                        icon={faLinkedin}
                    />
                    <FontAwesomeIcon
                        onClick={() => openLink("https://github.com/Leyght811")}
                        size="2x"
                        icon={faGithub}
                    />
                </div>
            </div>
        </div>
    );
}
