import preview1 from "../assets/1.png";
import preview2 from "../assets/2.png";

import { SquareArrowOutUpRight } from "lucide-react";

const ProjectSection1 = () => {
    return (
        <section className="section projects">

            <h1 className="heroTitle">HELLO.</h1>

            <div className="projectsContent">

                <div className="projectColumn projectLink">

                    <div className="projectTile">

                        <img
                            src={preview1}
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
                            src={preview2}
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

export default ProjectSection1;