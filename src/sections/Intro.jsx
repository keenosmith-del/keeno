import cinematic from "../assets/cinematic2.png";
import signature from "../assets/signature2.png";

import { Link } from "react-router-dom";
import { ArrowRight, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import project1 from "../assets/7.png";
import project2 from "../assets/2.png";
import project3 from "../assets/5.png";
import project4 from "../assets/3.png";

import {
    siReact,
    siNodedotjs,
    siExpress,
    siMongodb,
    siMongoose,
    siJsonwebtokens,
    siRender,
    siVercel,

    //siOpenai,
    siAnthropic,
    siGithubcopilot,
    siLangchain,
    siGit,

    siSpotify,
    siPostman,
    siFastapi,

    siPostgresql,
    siPrisma,
    siMysql,
    siNeo4j,
    siGithubactions,
    siNginx,
    siCss,
    siHtml5,
    siJavascript,
} from "simple-icons/icons";

const Intro = ({
    showProjects,
    setShowProjects,
    setMenuOpen,
}) => {

    return (
        <section className="section intro">

            <h1 className="heroTitle">HELLO.</h1>

            <div className="introContent">

                {/* CTA button */}
                <div
                    className="walkthroughButton"
                    onClick={() => {
                        setMenuOpen(false);
                        setShowProjects(true);
                    }}
                >

                    <span>Project Walkthrough</span>

                    <div className="walkthroughPlay">
                        <ArrowRight
                            size={17}
                            strokeWidth={1}
                        />
                    </div>

                </div>

                <div className="introImageText">
                    <p>
                        Recent projects demonstrate end-to-end ownership of the software development lifecycle, from requirements
                        gathering and solution architecture through testing, deployment, and ongoing iteration.
                    </p>
                </div>

                <div className="introImage">
                    <img
                        src={cinematic}
                        alt="Keeno Smith"
                    />
                </div>

                <div className="introImage">
                    <img
                        src={cinematic}
                        alt="Keeno Smith"
                    />
                </div>

                <div className="introText">

                    <h2>Keeno Smith.</h2>

                    <h3>
                        Full-Stack Software Engineer and Web Designer
                    </h3>

                    <p>
                        Full-Stack Software Engineer with over a decade of programming experience
                        delivering software solutions from concept to production. Accustomed to leading every
                        stage of the product lifecycle, including frontend and backend enginering, systems architecture,
                        database design, UI/UX, quality assurance, team collaboration, and translating business objectives
                        into practical technical solutions.
                    </p>

                    <p>
                        Proficient across modern JavaScript and Python ecosystems. Supported by professional qualifications
                        and certifications in Full-Stack Software Engineering, Applied Generative AI,
                        Data Structures and Algorithms, AWS, complemented by continuous
                        hands-on delivery of production-ready applications across web, cloud, and AI technologies.
                    </p>

                    <img
                        src={signature}
                        alt="Signature"
                        className="introSignature"
                    />

                </div>

            </div>

            {/* project modal */}
            {showProjects && (
                <div className="projectsOverlay"
                    onClick={() => setShowProjects(false)}
                >

                    <div className="projectsModal">

                        <div className="projectsCloseArea">
                            <div
                                className="projectsClose"
                                onClick={() => setShowProjects(false)}
                            >
                                <X size={17} strokeWidth={1.2} />
                            </div>
                        </div>

                        <div className="projectsList">

                            <div className="projectRow">

                                <div
                                    className="projectTile"
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        document.querySelector(".content").children[3].scrollIntoView({
                                            behavior: "smooth",
                                            inline: "start",
                                        });

                                        setTimeout(() => {
                                            setShowProjects(false);
                                        }, 600);
                                    }}
                                >

                                    <img
                                        src={project1}
                                        alt="Productivity Platform"
                                        className="projectImage"
                                    />

                                    <div className="projectOverlay">
                                        <ArrowUpRight size={22} strokeWidth={1.2} />
                                    </div>

                                </div>

                                <div className="projectInfo">

                                    <h3>Flagship MERN Productivity Platform</h3>

                                    <p>
                                        Highlights secure MERN stack development, JWT authentication, backend API engineering,
                                        MongoDB data modelling, reusable React architecture, and modern full-stack software engineering practices.

                                    </p>

                                    <div className="modalSkills">

                                        {[
                                            siReact,
                                            siNodedotjs,
                                            siExpress,
                                            siMongodb,
                                            siMongoose,
                                            siJsonwebtokens,
                                            siRender,
                                            siVercel,
                                        ].map((icon) => (
                                            <svg
                                                key={icon.slug}
                                                className="modalSkillIcon"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d={icon.path} />
                                            </svg>
                                        ))}

                                    </div>

                                </div>

                            </div>

                            <div className="projectRow">

                                <div
                                    className="projectTile"
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        document.querySelector(".content").children[2].scrollIntoView({
                                            behavior: "smooth",
                                            inline: "start",
                                        });

                                        setTimeout(() => {
                                            setShowProjects(false);
                                        }, 600);
                                    }}
                                >

                                    <img
                                        src={project3}
                                        alt="AI Chat Application"
                                        className="projectImage"
                                    />

                                    <div className="projectOverlay">
                                        <ArrowUpRight size={22} strokeWidth={1.2} />
                                    </div>

                                </div>

                                <div className="projectInfo">

                                    <h3>Applied AI Engineering Platform</h3>

                                    <p>
                                        Showcases modern AI engineering through LLM integration concepts, prompt engineering,
                                        context management, reusable component architecture, and responsive application development.
                                    </p>

                                    <div className="modalSkills">
                                        {[
                                            // siOpenai,
                                            siAnthropic,
                                            siGithubcopilot,
                                            siLangchain,
                                            siGit,
                                        ].map((icon) => (
                                            <svg
                                                key={icon.slug}
                                                className="modalSkillIcon"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d={icon.path} />
                                            </svg>
                                        ))}
                                    </div>

                                </div>

                            </div>

                            <div className="projectRow">

                                <div
                                    className="projectTile"
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        document.querySelector(".content").children[1].scrollIntoView({
                                            behavior: "smooth",
                                            inline: "start",
                                        });

                                        setTimeout(() => {
                                            setShowProjects(false);
                                        }, 600);
                                    }}
                                >

                                    <img
                                        src={project2}
                                        alt="Music Discovery"
                                        className="projectImage"
                                    />

                                    <div className="projectOverlay">
                                        <ArrowUpRight size={22} strokeWidth={1.2} />
                                    </div>

                                </div>

                                <div className="projectInfo">

                                    <h3>Music Streaming Platform</h3>

                                    <p>
                                        Demonstrates end-to-end full-stack development, scalable application architecture,
                                        third-party API integration, complex state management, and production-ready software
                                        engineering practices.

                                    </p>

                                    <div className="modalSkills">
                                        {[

                                            siSpotify,
                                            siPostman,
                                            siMongodb,
                                            siFastapi,
                                            siReact,
                                            siNginx,
                                        ].map((icon) => (
                                            <svg
                                                key={icon.slug}
                                                className="modalSkillIcon"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d={icon.path} />
                                            </svg>
                                        ))}
                                    </div>

                                </div>

                            </div>

                            <div className="projectRow">

                                <div
                                    className="projectTile"
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        document.querySelector(".content").children[4].scrollIntoView({
                                            behavior: "smooth",
                                            inline: "start",
                                        });

                                        setTimeout(() => {
                                            setShowProjects(false);
                                        }, 600);
                                    }}
                                >

                                    <img
                                        src={project4}
                                        alt="SQL"
                                        className="projectImage"
                                    />

                                    <div className="projectOverlay">
                                        <ArrowUpRight size={22} strokeWidth={1.2} />
                                    </div>

                                </div>

                                <div className="projectInfo">

                                    <h3>SQL Workspace</h3>

                                    <p>
                                        Combines relational database engineering with PostgreSQL and Prisma ORM,
                                        complex CRUD operations, and enterprise workspace management across interconnected business datasets.

                                    </p>

                                    <div className="modalSkills">
                                        {[

                                            siPostgresql,
                                            siPrisma,
                                            siMysql,
                                            siNeo4j,
                                            siGithubactions,
                                            siCss,
                                            siHtml5,
                                            siJavascript,
                                        ].map((icon) => (
                                            <svg
                                                key={icon.slug}
                                                className="modalSkillIcon"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d={icon.path} />
                                            </svg>
                                        ))}
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            )}

        </section>
    );
};

export default Intro;