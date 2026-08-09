import { useState } from "react";

import preview7 from "../assets/1.png";
import preview8 from "../assets/3.png";

import {
    Maximize2,
    Link,
    PictureInPicture2,
    X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
    siCss,
    siHtml5,
    siJavascript,
    siPostgresql,
    siPrisma,
    siMysql,
    siNodedotjs,
    siNeo4j,
    siGithubactions,
    siNginx,
    siCloudflare,
} from "simple-icons";

const ProjectSection4 = () => {

    const skills = [
        {
            icon: siCss,
            label: "CSS",
        },
        {
            icon: siHtml5,
            label: "HTML",
        },
        {
            icon: siJavascript,
            label: "JavaScript",
        },
        {
            icon: siPostgresql,
            label: "PostgreSQL",
        },
        {
            icon: siPrisma,
            label: "Prisma",
        },
        {
            icon: siMysql,
            label: "MySQL",
        },
        {
            icon: siNodedotjs,
            label: "Node.js",
        },
        {
            icon: siNeo4j,
            label: "Neo4j",
        },
        {
            icon: siGithubactions,
            label: "CI/CD",
        },
        {
            icon: siCloudflare,
            label: "Cloudflare"
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
                        onClick={() => setPreviewImage(preview7)}
                    >

                        <img
                            src={preview7}
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
                        onClick={() => setPreviewImage(preview8)}
                    >

                        <img
                            src={preview8}
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

                    <h2>SQL Workspace</h2>

                    <p>
                        Designed around a dynamic workspace model, the application enables the management of multiple interconnected 
                        datasets through reusable data tables, inline editing, live search, filtering, and persistent workspace state.
                        The project showcases PostgreSQL database design, Prisma schema modelling, complex CRUD operations, relational data management, 
                        and asynchronous client-server communication.
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
                                        "https://github.com/keenosmith-del/enterprise-workspace",
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

export default ProjectSection4;