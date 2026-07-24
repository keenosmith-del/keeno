import {
    Mail,
    Globe,
    Download,
    Phone,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section className="section contact">
            <h1 className="heroTitle">LINKS.</h1>

            <div className="contactContent">

                <div className="contactCard">

                    <div className="contactRowStatic">
                        <Phone size={15} strokeWidth={1.3} color="#575757" />
                        <p>+27 82 415 8441</p>
                    </div>

                    <div className="contactRowStatic">
                        <Mail size={15} strokeWidth={1.3} color="#575757" />
                        <p>business.keenosmith@icloud.com</p>
                    </div>

                    <div className="contactRow">
                        <FaGithub size={15} strokeWidth={1.3} />
                        <p>Github</p>
                    </div>

                    <div className="contactRow">
                        <FaLinkedin size={15} strokeWidth={1.3} />
                        <p>LinkedIn</p>
                    </div>

                    <div className="contactRow">
                        <FaYoutube size={15} strokeWidth={1.3} />
                        <p>YouTube</p>
                    </div>

                    <div className="contactRow">
                        <Download size={15} strokeWidth={1.3} />
                        <p>Download CV</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;