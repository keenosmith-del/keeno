import { useState } from "react";

import {
    siReact,
    siJavascript,
    siNodedotjs,
    siExpress,
    siMongodb,
    siDocker,
    siGit,
    siHtml5,
    siCss,
    siVite,
    siGithub,
    siPostman,
    siPython,
    siPostgresql,
    // siOpenai,
    siFastapi,
} from "simple-icons";

import { FaAws } from "react-icons/fa";

import { siOpenai } from "../icons/openai";

const Skills = () => {

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

                <div className="skillsGrid">

                    {/* tiles */}
                    <div className="skillTile">
                        <BrandIcon icon={siNodedotjs} />

                        <div>
                            <h3>Node.js</h3>
                            <p>Runtime Environment</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siDocker} />

                        <div>
                            <h3>Docker</h3>
                            <p>Container Platform</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siReact} />

                        <div>
                            <h3>React</h3>
                            <p>Frontend Library</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siMongodb} />

                        <div>
                            <h3>MongoDB</h3>
                            <p>NoSQL Database</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siExpress} />

                        <div>
                            <h3>Express</h3>
                            <p>Backend Framework</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siPython} />

                        <div>
                            <h3>Python</h3>
                            <p>Programming Language</p>
                        </div>

                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siJavascript} />

                        <div>
                            <h3>JavaScript</h3>
                            <p>Programming Language</p>
                        </div>

                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siGit} />

                        <div>
                            <h3>Git</h3>
                            <p>Version Control</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siGithub} />

                        <div>
                            <h3>GitHub</h3>
                            <p>Code Collaboration</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siHtml5} />

                        <div>
                            <h3>HTML5</h3>
                            <p>Markup Language</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siCss} />

                        <div>
                            <h3>CSS3</h3>
                            <p>Styling Language</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siPostman} />

                        <div>
                            <h3>Postman</h3>
                            <p>Testing</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siPostgresql} />

                        <div>
                            <h3>SQL</h3>
                            <p>Relational Database</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <FaAws className="brandIcon" />

                        <div>
                            <h3>AWS</h3>
                            <p>Cloud Platform</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <div className="skillIcon skillIconOpenAI">
                            <BrandIcon icon={siOpenai} />
                        </div>

                        <div className="skillInfo">
                            <h3>OpenAI</h3>
                            <p>AI Integration</p>
                        </div>
                    </div>

                    <div className="skillTile">
                        <BrandIcon icon={siFastapi} />

                        <div>
                            <h3>REST APIs</h3>
                            <p>API Development</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Skills;