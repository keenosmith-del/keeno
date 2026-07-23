import cinematic from "../assets/cinematic2.png";
import signature from "../assets/signature2.png";

const Intro = () => {
    return (
        <section className="section intro">

            <h1 className="heroTitle">HELLO.</h1>

            <div className="introContent">

                <div className="introImage">
                    <img
                        src={cinematic}
                        alt="Keeno Smith"
                    />
                </div>

                <div className="introText">

                    <h2>Keeno Smith.</h2>

                    <h3>
                        Title
                    </h3>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
                    </p>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <img
                        src={signature}
                        alt="Signature"
                        className="introSignature"
                    />

                </div>

            </div>

        </section>
    );
};

export default Intro;