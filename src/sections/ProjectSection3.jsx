import { useState } from "react";

import preview5 from "../assets/7.png";
import preview6 from "../assets/8.png";

import {
    Maximize2,
    Link,
    PictureInPicture2,
    X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
    siExpress,
    siJsonwebtokens,
    siMongodb,
    siMongoose,
    siNodedotjs,
    siReact,
    siRender,
    siVercel,
    siVite,
} from "simple-icons";

const ProjectSection3 = () => {

    const skills = [
        {
            icon: siMongodb,
            label: "MongoDB",
        },
        {
            icon: siMongoose,
            label: "Mongoose",
        },
        {
            icon: siExpress,
            label: "Express.js",
        },
        {
            icon: siReact,
            label: "React",
        },
        {
            icon: siNodedotjs,
            label: "Node.js",
        },
        {
            icon: siJsonwebtokens,
            label: "Json Web Tokens",
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
            icon: siVite,
            label: "Vite",
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
                        onClick={() => setPreviewImage(preview5)}
                    >

                        <img
                            src={preview5}
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
                        onClick={() => setPreviewImage(preview6)}
                    >

                        <img
                            src={preview6}
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

                    <h2>Flagship MERN Productivity Platform</h2>

                    <p>
                        Designed as a production-style application, the platform integrates tasks, projects, goals, reminders, notes, folders, calendar management, and user accounts into a cohesive productivity ecosystem. It demonstrates practical implementation of protected routes, 
                        JWT-based authentication and authorisation, password hashing with bcrypt, MongoDB data modelling with Mongoose, persistent data storage, modular application architecture, and modern full-stack development practices while emphasising maintainability, scalability, security, and clean software design.
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
                                        "https://github.com/keenosmith-del/personal-productivity-desktop",
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

export default ProjectSection3;