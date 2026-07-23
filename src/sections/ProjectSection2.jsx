import preview3 from "../assets/3.png";
import preview4 from "../assets/4.png";

import { SquareArrowOutUpRight } from "lucide-react";

const ProjectSection2 = () => {
    return (
        <section className="section projects">

            <h1 className="heroTitle">HELLO.</h1>

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

                </div>

            </div>

        </section>
    );
};

export default ProjectSection2;