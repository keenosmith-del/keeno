import "../styles/cv.css";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import image from "../assets/cv/cv2.png";
import overlayImage from "../assets/cv/signature2.png";

const CV = () => {
    const [lightMode, setLightMode] = useState(false);

    useEffect(() => {

        document.body.classList.toggle("light", lightMode);

    }, [lightMode]);

    return (
        <main className="cv">

            <button
                className="themeToggle"
                onClick={() => setLightMode(!lightMode)}
            >

                {lightMode
                    ? <Moon size={18} strokeWidth={1.4} />
                    : <Sun size={18} strokeWidth={1.4} />
                }

            </button>

            <div className="cvPage cvPageCover">

                <img
                    src={image}
                    alt="Keeno Smith"
                    className="cvPortrait"
                />

                {/* signature overlay */}
                <img
                    src={overlayImage}
                    alt=""
                    className="cvPortraitOverlay"
                />

                <div className="cvPortraitContact">

                    <p>+27 82 415 8441</p>

                    <p>business.keenosmith@icloud.com</p>

                    <p>keenosmith.dev</p>

                </div>

                <div className="cvName">
                    <h1>Keeno</h1>
                    <h1>Smith.</h1>

                    <p className="cvTitle">
                        Full-Stack Software Engineer<br />
                        & Web Developer
                    </p>

                </div>

                <div className="cvSectionDivider cvSectionDividerCover"></div>

                <div className="cvContact">

                    <p>+27 82 415 8441</p>

                    <p>business.keenosmith@icloud.com</p>

                    <p>https://keenosmith.dev</p>

                </div>

                <div className="cvBio">

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                </div>

                <div className="cvSection">

                    <div className="cvSectionHeading">
                        <h2>Education</h2>
                    </div>

                    <div className="cvSectionContent">

                        {/* education item row */}
                        <div className="educationItem">

                            <div className="educationMeta">

                                <div className="educationDot"></div>

                                <span>2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>Stellenbosch University</h3>

                                <h4>Generative AI Course</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                        <div className="educationItem">

                            <div className="educationMeta">

                                <div className="educationDot"></div>

                                <span>2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>Hyperion Dev</h3>

                                <h4>Full-Stack Software Engineer and Web Development Bootcamp</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                        <div className="educationItem">

                            <div className="educationMeta">

                                <div className="educationDot"></div>

                                <span>2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>AWS</h3>

                                <h4>AI/ML Scholar AI Practitioner Challenge</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                        <div className="educationItem">

                            <div className="educationMeta">

                                <div className="educationDot"></div>

                                <span>2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>AWS</h3>

                                <h4>AI Programmer Nanodegree</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="cvPage">

                <div className="cvSection cvSectionTop">

                    <div className="cvSectionHeading">

                    </div>

                    <div className="cvSectionContent">

                        {/* education item row */}
                        <div className="educationItem">

                            <div className="educationMeta">

                                <div className="educationDot"></div>

                                <span>2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>University of Helsinki</h3>

                                <h4>Full-Stack Open</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                        <div className="educationItem">

                            <div className="educationMeta">

                                <div className="educationDot"></div>

                                <span>2025</span>

                            </div>

                            <div className="educationInfo">

                                <h3>WeThinkCode_</h3>

                                <h4>Generative AI for Software Engineers</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                        <div className="educationItem">

                            <div className="educationMeta">

                                <div className="educationDot"></div>

                                <span>2017</span>

                            </div>

                            <div className="educationInfo">

                                <h3>University of South Africa</h3>

                                <h4>BSc Computer Science</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="cvDivider"></div>

                <div className="cvSection cvSectionTop">

                    <div className="cvSectionHeading">
                        <h2>Experience</h2>
                    </div>

                    <div className="cvSectionContent">

                        <div className="experienceItem">

                            <div className="experienceMeta">

                                <div className="educationDot"></div>

                                <span>Mar 2025<br />Jan 2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>Company Name</h3>

                                <h4>Full-Stack Software Engineer</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                        <div className="experienceItem">

                            <div className="experienceMeta">

                                <div className="educationDot"></div>

                                <span>Mar 2025<br />Jan 2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>Company Name</h3>

                                <h4>Full-Stack Software Engineer</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                        <div className="experienceItem">

                            <div className="experienceMeta">

                                <div className="educationDot"></div>

                                <span>Mar 2025<br />Jan 2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>Company Name</h3>

                                <h4>Full-Stack Software Engineer</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                        <div className="experienceItem">

                            <div className="experienceMeta">

                                <div className="educationDot"></div>

                                <span>Mar 2025<br />Jan 2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>Company Name</h3>

                                <h4>Full-Stack Software Engineer</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="cvDivider"></div>

                <div className="cvCertifications">

                    <div className="cvSectionHeading">
                        <h2>Certifications</h2>
                    </div>

                    <div className="cvSectionContent">

                        <div className="educationItem">

                            <div className="educationMeta">

                                <div className="educationDot"></div>

                                <span>2026</span>

                            </div>

                            <div className="educationInfo">

                                <h3>freeCodeCamp</h3>

                                <h4>
                                    Responsive Web Design
                                    <br />
                                    JavaScript Algorithms & Data Structures
                                    <br />
                                    Front End Development Libraries
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default CV;