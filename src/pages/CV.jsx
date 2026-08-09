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

                    <p>business.keenosmith@icloud.com</p>

                    <p>https://github.com/keenosmith-del</p>

                </div>

                <div className="cvName">
                    <h1>Keeno</h1>
                    <h1>Smith.</h1>

                    <p className="cvTitle">
                        Full-Stack Software Engineer & Web Developer
                    </p>

                </div>

                <div className="cvSectionDivider cvSectionDividerCover"></div>

                <div className="cvContact">

                    <p>business.keenosmith@icloud.com</p>

                    <p>https://github.com/keenosmith-del</p>

                </div>

                <div className="cvBio">

                    <p>
                        Full-Stack Software Engineer with over a decade of programming experience designing,
                        developing, and deploying production-ready software across web, cloud, and AI technologies.
                        Expertise spans software engineering, systems architecture, frontend and backend development, database engineering, and applied AI, with professional
                        qualifications in Full-Stack Software Engineering, AWS AI & Machine Learning, Applied Generative AI, and Data Structures & Algorithms.
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

                                <h4>Generative AI Bootcamp</h4>

                                <p>
                                    Focuses on the fundamentals of machine learning, deep learning,
                                    Large Language Models (LLMs), prompt engineering, generative AI,
                                    and practical AI applications through hands-on projects, real-world case studies, and modern software engineering workflows.

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

                                <h4>Full-Stack Software Engineering and Web Development Bootcamp</h4>

                                <p>
                                    Covers the complete software development lifecycle, including
                                    frontend and backend development, software architecture, SQL and NoSQL
                                    database design, RESTful APIs, the MERN stack, Python, Docker,
                                    CI/CD workflows, version control, and modern software engineering practices through hands-on, project-based development.
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
                                    Focuses on artificial intelligence, machine learning,
                                    generative AI, foundation models, responsible AI, Amazon Bedrock,
                                    AWS AI services, and the practical application of cloud-based AI
                                    technologies to modern software engineering and intelligent application development.


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
                                    Focuses on AI programming using Python, PyTorch, neural networks,
                                    transformers, foundation models, and modern AI development workflows,
                                    with practical application of machine learning, generative AI, and AWS technologies to build intelligent
                                    software solutions.

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

                                <h4>Full-Stack Open Certification</h4>

                                <p>
                                    Covers modern full-stack web development using React, Node.js, Express, MongoDB, GraphQL,
                                    TypeScript, testing, cloud deployment, and modern JavaScript development practices through
                                    comprehensive, project-based software engineering.

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
                                    Focuses on applying Generative AI throughout the software development lifecycle,
                                    including prompt engineering, AI-assisted coding, code comprehension, debugging, testing,
                                    refactoring, documentation, pair programming with Large Language Models (LLMs), and modern AI-powered software engineering workflows.

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
                                    Provides a comprehensive foundation in computer science,
                                    including software engineering, programming, algorithms, data structures, database systems,
                                    operating systems, computer networks, systems design, mathematics, and analytical problem-solving for
                                    modern software development.

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

                                <h3>Firstdaes Entertainment</h3>

                                <h4>Co-Founder & Brand Strategist</h4>

                                <p>
                                    Co-founded and helped grow a creative entertainment and branding business,
                                    leading business strategy, brand development, marketing initiatives, and creative direction.
                                    Worked closely with clients and collaborators to deliver branding and digital media solutions while developing strong leadership,
                                    communication, project management, and strategic planning skills within a fast-paced entrepreneurial environment.

                                </p>

                            </div>

                        </div>

                        <div className="experienceItem">

                            <div className="experienceMeta">

                                <span><br /></span>

                            </div>

                            <div className="educationInfo">

                                <h3></h3>

                                <h4></h4>

                                <p>
                                    Professional software engineering experience has primarily been gained through freelance development, 
                                    independent consulting, and building end-to-end software solutions from concept through deployment. 
                                    Projects have involved full ownership of system architecture, frontend and backend development, database design, API integration, authentication, testing, deployment, and ongoing product support for real-world applications.

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
                                    <br />
                                    Python Certification
                                    <br />
                                    Relational Databases
                                    <br />
                                    Back End Development and APIs
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