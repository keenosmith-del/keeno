import stellenbosch from "../assets/stellenbosch.png";
import wethinkcode from "../assets/wethinkcode.png";
import aws from "../assets/aws.png";
import hyperion from "../assets/hyperiondev.png";
import unisa from "../assets/unisa.png";
import fcc from "../assets/fcc.png";
import udacity from "../assets/udacity.png";
import helsinki from "../assets/helsinki.png"
import ghs from "../assets/ghs.png"

const Education = () => {
    return (
        <section className="section home">

            <h1 className="heroTitle">EDU.</h1>

            <div className="educationGrid">

                <div className="educationTile">

                    {/* tile 1 */}
                    <div className="educationItem">
                        <img
                            src={stellenbosch}
                            alt="Stellenbosch"
                            className="educationBadge"
                        />

                        <div className="educationInfo">

                            <div className="titleYear">
                                <h3>
                                    Stellenbosch University

                                </h3>
                                <span className="educationYear"> 2026 </span>
                            </div>

                            <p>
                                Generative AI Course
                            </p>

                        </div>
                    </div>

                    <div className="educationItem">
                        <img
                            src={hyperion}
                            alt="HyperionDev"
                            className="educationBadge"
                        />

                        <div className="educationInfo">

                            <div className="titleYear">
                                <h3>
                                    HyperionDev

                                </h3>
                                <span className="educationYear"> 2026 </span>
                            </div>

                            <p>
                                Full-Stack Software Engineering and Web Development Bootcamp
                            </p>

                        </div>
                    </div>

                    <div className="educationItem">
                        <img
                            src={helsinki}
                            alt="Helsinki"
                            className="educationBadge"
                        />

                        <div className="educationInfo">

                            <div className="titleYear">
                                <h3>
                                    University of Helsinki

                                </h3>
                                <span className="educationYear"> 2026 </span>
                            </div>

                            <p>
                                Full-Stack Open
                            </p>

                        </div>
                    </div>

                </div>

                {/* tile 2 */}
                <div className="educationTile">

                    <div className="educationItem">
                        <img
                            src={aws}
                            alt="Amazon"
                            className="educationBadge"
                        />


                        <div className="educationInfo">

                            <div className="titleYear">
                                <h3>
                                    AWS
                                </h3>
                                <span className="educationYear"> 2026 </span>
                            </div>

                            <p>
                                AWS AI/ML Scholars Programme
                            </p>

                            <p>
                                AWS Python Programmer
                            </p>

                        </div>
                    </div>

                    <div className="educationItem">
                        <img
                            src={wethinkcode}
                            alt="WeThinkCode"
                            className="educationBadge"
                        />


                        <div className="educationInfo">

                            <div className="titleYear">
                                <h3>
                                    WeThinkCode_

                                </h3>
                                <span className="educationYear"> 2025 </span>
                            </div>

                            <p>
                                Generative AI Course for Software Engineers
                            </p>

                        </div>
                    </div>

                </div>

                {/* tile 3*/}
                <div className="educationTile">

                    <div className="educationItem">
                        <img
                            src={fcc}
                            alt="freeCodeCamp"
                            className="educationBadge"
                        />

                        <div className="educationInfo">

                            <div className="titleYear">
                                <h3>
                                    _freeCodeCamp

                                </h3>
                                <span className="educationYear"> 2022 </span>
                            </div>

                            <p>
                                Responsive Web Design Certification
                            </p>

                            <p>
                                JavaScript Certification
                            </p>

                            <p>
                                Frontend Development Libraries Certification
                            </p>

                            <p>
                                Python Certification
                            </p>

                            <p>
                                Relational Databases Certification
                            </p>

                            <p>
                                Backend Decelopment Certification
                            </p>

                        </div>
                    </div>

                </div>

                {/* tile 4 */}
                <div className="educationTile">

                    <div className="educationItem">
                        <img
                            src={unisa}
                            alt="UNISA"
                            className="educationBadge educationBadgeLarge"
                        />

                        <div className="educationInfo">

                            <div className="titleYear">
                                <h3>
                                    University of South Africa

                                </h3>
                                <span className="educationYear"> 2017 </span>
                            </div>

                            <p>
                                BSc Computer Science
                            </p>

                        </div>
                    </div>

                    <div className="educationItem">
                        <img
                            src={ghs}
                            alt="Greenside High School"
                            className="educationBadge"
                        />

                        <div className="educationInfo">

                            <div className="titleYear">
                                <h3>
                                    Greenside High School

                                </h3>
                                <span className="educationYear"> 2015 </span>
                            </div>

                            <p>
                                National Senior Certificate
                            </p>

                            <p>
                                - Information Technology
                            </p>

                            <p>
                                - Engineering Graphics and Design
                            </p>

                            <p>
                                - Physics
                            </p>

                            <p>
                                - Mathematics
                            </p>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Education;