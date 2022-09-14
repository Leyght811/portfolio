import React, { Suspense } from "react";
import "../styles/style.css";
import "../styles/home.css";
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import { ChessSet } from "../components/chessSet";
import { Dungeon } from "../components/dungeon";
import { Crest } from "../components/crest";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach={"material"} color="hotpink" />
    </mesh>
  );
};

const Home = () => {
  const [objNum, setObjNum] = useState(Math.floor(Math.random() * 3));
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  function shiftSidebar() {
    setSidebarMinimized(!sidebarMinimized);
  }
  return (
    <div className="home-page">
      <Canvas frameloop="demand" className="home-canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Stars />
        <Suspense fallback={null}>
          {objNum === 0 && <ChessSet scale={7} />}
          {objNum === 1 && <Dungeon scale={0.1} position={[0, 0, 2]} />}
          {objNum === 2 && <Crest rotation={[45, 0, 0]} />}
        </Suspense>
      </Canvas>
      <div
        style={{ left: sidebarMinimized ? window.innerWidth > 767 ? "calc(-30% + 30px)" : "calc(-100% + 30px)" : "0px" }}
        className="home-text-box"
      >
        <div className="home-text-uncollapsed">
          <i>
            <div className="home-text-header text">
              Hi There, <br /> I'm Wesley Wright
            </div>
            <div className="home-text-content text">
              I am a web developer with 4 years of professional experience.{" "}
              <br />I also have skills in software development, graphic design
              and 3d modelling.
            </div>
          </i>
          <div className="home-text-buttons">
            {/* <LinkButton image={Image} /> */}
            <a href="https://www.linkedin.com/in/wesley-wright-307156191/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="home-text-link text"
              />
            </a>
            <a href="https://github.com/Leyght811">
              <FontAwesomeIcon
                icon={faGithub}
                className="home-text-link text"
              />
            </a>
            <a href="https://twitter.com/WesleyWrightOff">
              <FontAwesomeIcon
                icon={faSquareTwitter}
                className="home-text-link text"
              />
            </a>
          </div>
        </div>
        <div onClick={() => shiftSidebar()} className="home-text-collapse">
          <FontAwesomeIcon
            icon={sidebarMinimized ? faCircleChevronRight : faCircleChevronLeft}
            className="text"
          />
        </div>
      </div>
      <div
        onClick={() => {
          if (objNum === 2) {
            setObjNum(0);
          } else {
            setObjNum(objNum + 1);
          }
        }}
        className="home-refresh-button"
      >
        <FontAwesomeIcon icon={faRotate} className="refresh text" />
      </div>
    </div>
  );
};

export default Home;
