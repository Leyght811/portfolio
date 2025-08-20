import React, { useRef, useEffect } from "react";
import "../../styles/HomeSection.css";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
        console.log("TEST")
        window.open(link, '_blank', 'noopener,noreferrer');
    }

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* Canvas fills container */}
            {/* <canvas ref={canvasRef} id="HomeCanvas" /> */}

            {/* Overlay fills container too */}
            <div id="HomeContainer">
                <div id="HomeMain">
                    <div id="HomeInfo">
                        <h1 id="HomeInfoText">
                            Hi,
                            <br />
                            Im <span>Wesley</span>
                            <br />
                            Web Developer
                        </h1>
                        <div id="HomeInfoButtons">
                            <button onClick={() => openLink("https://www.linkedin.com/in/wesley-wright-307156191/")}>CONTACT</button>
                        </div>
                    </div>
                    <div id="HomeImage">
                        <img alt="My image" src={logo} style={{ height: "40vmin" }} />
                    </div>
                </div>
                <div id="HomeFooter">
                        <FontAwesomeIcon onClick={() => openLink("https://www.linkedin.com/in/wesley-wright-307156191/")} size="2x" icon={faLinkedin} />
                        <FontAwesomeIcon onClick={() => openLink("https://github.com/Leyght811")} size="2x" icon={faGithub} />
                </div>
            </div>
        </div>
    );
}
