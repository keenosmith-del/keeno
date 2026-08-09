import { useState } from "react";

import preview1 from "../assets/2.png";
import preview2 from "../assets/4.png";

import {
    Maximize2,
    Link,
    PictureInPicture2,
    X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
    siSpotify,
    siPostman,
    siMongodb,
    siCss,
    siHtml5,
    siFastapi,
    siReact,
    siJavascript,
    siExpress,
    siVite,
    siAxios,
    siRender,
    siVercel,
    siFastify,
    siNeo4j,
    siTailwindcss,
    siGraphql,
    siFigma,
    siNginx,
} from "simple-icons";

const ProjectSection1 = () => {

    const skills = [
        {
            icon: siSpotify,
            label: "Spotify API",
        },
        {
            icon: siPostman,
            label: "Postman",
        },
        {
            icon: siMongodb,
            label: "MongoDB",
        },
        {
            icon: siFastapi,
            label: "Fast API",
        },
        {
            icon: siReact,
            label: "React",
        },
        {
            icon: siExpress,
            label: "Express.js",
        },
        {
            icon: siAxios,
            label: "Axios",
        },
        {
            icon: siVite,
            label: "Vite",
        },
        {
            icon: siRender,
            label: "Render",
        },
        {
            icon: siVercel,
            label: "Vercel",
        },
        {
            icon: siFastify,
            label: "Fastify",
        },
        {
            icon: siTailwindcss,
            label: "Tailwind CSS"
        },
        {
            icon: siGraphql,
            label: "GraphQL",
        },
        {
            icon: siFigma,
            label: "Figma",
        },
        {
            icon: siNginx,
            label: "Nginx",
        },
    ];

    const [previewImage, setPreviewImage] = useState(null);
    const [showLivePreview, setShowLivePreview] = useState(false);

    return (
        <section className="section projects">

            <div className="projectsContent">

                <div className="projectGallery">

                    <div
                        className="projectPreview"
                        onClick={() => setPreviewImage(preview1)}
                    >

                        <img
                            src={preview1}
                            alt="Project Preview"
                            className="projectImage"
                        />

                        <div className="projectPreviewOverlay">
                            <Maximize2
                                size={20}
                                strokeWidth={1.2}
                            />
                        </div>

                    </div>

                    <div
                        className="projectPreview"
                        onClick={() => setPreviewImage(preview2)}
                    >

                        <img
                            src={preview2}
                            alt="Project Preview"
                            className="projectImage"
                        />

                        <div className="projectPreviewOverlay">
                            <Maximize2
                                size={20}
                                strokeWidth={1.2}
                            />
                        </div>

                    </div>

                </div>

                <div className="projectDetails">

                    <h2>Music Streaming Platform</h2>

                    <p>
                        A full-stack music streaming and discovery web application built with React, Vite, Node.js, Express, and MongoDB.
                        The project demonstrates API integration, RESTful backend development, asynchronous data fetching, global state management, reusable component architecture, responsive design, and scalable application structure.
                        Core features include music search, synchronized playback, queue management, autoplay generation, artist and album navigation, and persistent data management, showcasing the development of a production-style web application from frontend to backend.
                    </p>

                    <div className="projectFooter" >
                        <div className="projectSkills">

                            {skills.map((skill) => (
                                <div
                                    key={skill.label}
                                    className="projectSkill"
                                >
                                    <svg
                                        className="projectSkillIcon"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d={skill.icon.path} />
                                    </svg>

                                    <div className="projectSkillTooltip">
                                        {skill.label}
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className="projectLinks">

                            <div
                                className="projectLink"
                                onClick={() =>
                                    window.open(
                                        "https://github.com/keenosmith-del/music-api",
                                        "_blank"
                                    )
                                }
                            >
                                <FaGithub
                                    size={16}
                                    className="projectLinkIcon"
                                />

                                <div className="projectLinkTooltip">
                                    GitHub Repository
                                </div>
                            </div>

                            <div
                                className="projectLink"
                                onClick={() => setShowLivePreview(true)}
                            >

                                <PictureInPicture2
                                    size={16}
                                    strokeWidth={1.2}
                                    className="projectLinkIcon"
                                />

                                <div className="projectLinkTooltip">
                                    Live Preview
                                </div>

                            </div>

                            <div className="projectLink">

                                <Link
                                    size={15}
                                    strokeWidth={1.2}
                                    className="projectLinkIcon"
                                />

                                <div className="projectLinkTooltip">
                                    Website URL
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* modal preview expanded image */}
            {previewImage && (
                <div
                    className="projectsOverlay"
                    onClick={() => setPreviewImage(null)}
                >

                    <div
                        className="projectsCloseArea"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="projectsClose"
                            onClick={() => setPreviewImage(null)}
                        >
                            <X
                                size={17}
                                strokeWidth={1.2}
                            />
                        </div>
                    </div>

                    <img
                        src={previewImage}
                        alt="Project Preview"
                        className="projectExpandedImage"
                        onClick={() => setPreviewImage(null)}
                    />

                </div>
            )}

            {/* live video preview */}
            {showLivePreview && (
                <div
                    className="projectsOverlay"
                    onClick={() => setShowLivePreview(false)}
                >

                    <div
                        className="projectsCloseArea"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="projectsClose"
                            onClick={() => setShowLivePreview(false)}
                        >
                            <X
                                size={17}
                                strokeWidth={1.2}
                            />
                        </div>
                    </div>

                    <div
                        className="livePreviewPlaceholder"
                        onClick={() => setShowLivePreview(false)}
                    >
                        Live Preview Coming Soon
                    </div>

                    {/*
                        <video
                            className="projectPreviewVideo"
                            autoPlay
                            muted
                            loop
                            controls
                        >
                            ...
                        </video>
                    */}

                </div>
            )}

        </section >
    );
};

export default ProjectSection1;