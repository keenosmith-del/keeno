import stellenbosch from "../assets/stellenbosch.png";
import wethinkcode from "../assets/wethinkcode.png";
import aws from "../assets/aws.png";
import hyperion from "../assets/hyperiondev.png";

const Home = () => {
    return (
        <section className="section home">

            <h1 className="heroTitle">HELLO.</h1>

            <div className="educationContent">

                <div className="educationRow">

                    <div className="educationCard">

                        <img
                            src={stellenbosch}
                            alt="Stellenbosch"
                            className="educationBadge"
                        />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                    </div>

                    <div className="educationCard">

                        <img
                            src={wethinkcode}
                            alt="We Think Code"
                            className="educationBadge"
                        />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                    </div>

                </div>

                <div className="educationRow">

                    <div className="educationCard">

                        <img
                            src={aws}
                            alt="AWS Udacity"
                            className="educationBadge"
                        />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                    </div>

                    <div className="educationCard">

                        <img
                            src={hyperion}
                            alt="Hyperion Dev"
                            className="educationBadge"
                        />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Home;