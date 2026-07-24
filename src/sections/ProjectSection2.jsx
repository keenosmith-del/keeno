import preview3 from "../assets/3.png";
import preview4 from "../assets/4.png";

import {
    SquareArrowOutUpRight,
    Link,
    PictureInPicture2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const ProjectSection2 = () => {
    return (
        <section className="section projects">

            <h1 className="heroTitle">PROJ.</h1>

            <div className="projectsContent">

                <div className="projectColumn projectLink">

                    <div className="projectTile">

                        <img
                            src={preview3}
                            alt="Project Preview"
                            className="projectImage"
                        />

                        <div className="projectOverlay">
                            <SquareArrowOutUpRight
                                size={25}
                                strokeWidth={1.2}
                            />
                        </div>

                    </div>

                    <h3>Title</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <div className="projectLinkRow">
                        <FaGithub size={12} strokeWidth={1.2} />
                        <h2>GitHub Repository</h2>
                    </div>

                    <div className="projectLinkRow">
                        <PictureInPicture2 size={12} strokeWidth={1.5} />
                        <h2>Live Preview</h2>
                    </div>

                    <div className="projectLinkRow">
                        <Link size={12} strokeWidth={1.5} />
                        <h2>Website URL</h2>
                    </div>

                </div>

                <div className="projectColumn projectLink">

                    <div className="projectTile">

                        <img
                            src={preview4}
                            alt="Project Preview"
                            className="projectImage"
                        />

                        <div className="projectOverlay">
                            <SquareArrowOutUpRight
                                size={25}
                                strokeWidth={1.2}
                            />
                        </div>

                    </div>

                    <h3>Title</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <div className="projectLinkRow">
                        <FaGithub size={12} strokeWidth={1.2} />
                        <h2>GitHub Repository</h2>
                    </div>

                    <div className="projectLinkRow">
                        <PictureInPicture2 size={12} strokeWidth={1.5} />
                        <h2>Live Preview</h2>
                    </div>

                    <div className="projectLinkRow">
                        <Link size={12} strokeWidth={1.5} />
                        <h2>Website URL</h2>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProjectSection2;