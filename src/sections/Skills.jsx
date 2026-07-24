import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import {
    siReact,
    siJavascript,
    siNodedotjs,
    siExpress,
    siMongodb,
    siDocker,
    siGit,
    // siAmazonwebservices,
    siPython,
} from "simple-icons";

const Skills = () => {
    // changes checkpoint

    const [viewIndex, setViewIndex] = useState(1);

    const [activeTile, setActiveTile] = useState(2);

    const offsets = {
        0: 0,
        1: -138,
        2: -310,
        3: -586,
    };

    const maxViewIndex = Object.keys(offsets).length - 1;

    const BrandIcon = ({ icon }) => (
        <svg
            viewBox="0 0 24 24"
            width="54"
            height="54"
            fill={"currentColor"}
        >
            <path d={icon.path} />
        </svg>
    );

    return (
        <section className="section skills">

            <h1 className="heroTitle">SKILLS.</h1>

            <div className="skillsContent">

                {viewIndex > 0 && (
                    <button
                        className="skillsArrow"
                        onClick={() => {

                            if (viewIndex > 0) {
                                setViewIndex(viewIndex - 1);
                            }

                        }}
                    >
                        <ArrowLeft
                            size={22}
                            strokeWidth={1.2}
                        />
                    </button>
                )}

                <div className="skillsViewport">

                    <div
                        className="skillsTrack"
                        style={{
                            marginLeft: `${offsets[viewIndex]}px`,
                        }}
                    >

                        {/* tiles */}
                        <div
                            className={`skillTile ${activeTile === 0 ? "active" : ""}`}
                            onClick={() => setActiveTile(0)}
                        >
                            <BrandIcon icon={siNodedotjs} />

                            <h3>Node.js</h3>

                        </div>

                        <div
                            className={`skillTile ${activeTile === 1 ? "active" : ""}`}
                            onClick={() => setActiveTile(1)}
                        >
                            <BrandIcon icon={siDocker} />

                            <h3>Docker</h3>
                        </div>

                        {/* middle tile */}
                        <div
                            className={`skillTile ${activeTile === 2 ? "active" : ""}`}
                            onClick={() => setActiveTile(2)}
                        >
                            <BrandIcon icon={siReact} />

                            <h3>React</h3>
                        </div>

                        <div
                            className={`skillTile ${activeTile === 3 ? "active" : ""}`}
                            onClick={() => setActiveTile(3)}
                        >
                            <BrandIcon icon={siMongodb} />

                            <h3>MongoDB</h3>
                        </div>

                        <div
                            className={`skillTile ${activeTile === 4 ? "active" : ""}`}
                            onClick={() => setActiveTile(4)}
                        >
                            <BrandIcon icon={siExpress} />

                            <h3>Express</h3>
                        </div>

                        <div
                            className={`skillTile ${activeTile === 5 ? "active" : ""}`}
                            onClick={() => setActiveTile(5)}
                        >
                            <BrandIcon icon={siPython} />

                            <h3>Python</h3>

                        </div>

                        <div
                            className={`skillTile ${activeTile === 6 ? "active" : ""}`}
                            onClick={() => setActiveTile(6)}
                        >
                            <BrandIcon icon={siJavascript} />

                            <h3>JavaScript</h3>

                        </div>

                    </div>

                </div>

                {viewIndex < maxViewIndex && (
                    <button
                        className="skillsArrow"
                        onClick={() => {

                            if (viewIndex < maxViewIndex) {
                                setViewIndex(viewIndex + 1);
                            }

                        }}
                    >
                        <ArrowRight
                            size={22}
                            strokeWidth={1.2}
                        />
                    </button>
                )}

            </div>

        </section>
    );
};

export default Skills;