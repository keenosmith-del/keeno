import { useState } from "react";

import preview3 from "../assets/5.png";
import preview4 from "../assets/6.png";

import {
    Maximize2,
    Link,
    PictureInPicture2,
    X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
    // siOpenai,
    siAnthropic,
    siGithubcopilot,
    siLangchain,
    siGit,
    siDocker,
    siHuggingface,
    siPytorch,
    siTensorflow,
    siGooglegemini,
    siElasticsearch,
    siRedis,
    siNodedotjs,
} from "simple-icons";

const ProjectSection2 = () => {

    const skills = [
        {
            icon: siAnthropic,
            label: "Anthropic",
        },
        {
            icon: siGithubcopilot,
            label: "CoPilot",
        },
        {
            icon: siLangchain,
            label: "LangChain",
        },
        {
            icon: siGit,
            label: "Git GUI Client",
        },
        {
            icon: siDocker,
            label: "Docker",
        },
        {
            icon: siHuggingface,
            label: "Hugging Face",
        },
        {
            icon: siPytorch,
            label: "PyTorch",
        },
        {
            icon: siTensorflow,
            label: "TensorFlow",
        },
        {
            icon: siGooglegemini,
            label: "Google Gemini",
        },
        {
            icon: siElasticsearch,
            label: "Elasticsearch",
            // search and retrieval
        },
        {
            icon: siRedis,
            label: "Redis",
            // memory / caching
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
                        onClick={() => setPreviewImage(preview3)}
                    >

                        <img
                            src={preview3}
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
                        onClick={() => setPreviewImage(preview4)}
                    >

                        <img
                            src={preview4}
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

                    <h2>Applied AI Engineering Platform</h2>

                    <p>
                        Designed as an engineering-focused application to demonstrate modern frontend engineering, responsive application development, and applied AI development.
                        It provides a transparent view of the AI interaction lifecycle, including prompt processing, context construction, retrieval-augmented generation (RAG) 
                        concepts, state management, response generation, conversation memory, and workflow visualisation. 
                        The project demonstrates practical application of Large Language Models (LLMs), Generative AI, OpenAI integration, GitHub Copilot-assisted development workflows, and modern software engineering practices for AI-enabled applications.
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
                                        "https://github.com/keenosmith-del/ai-entity",
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

export default ProjectSection2;