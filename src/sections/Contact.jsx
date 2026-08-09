import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";

import signature from "../assets/cv/signature2.png";

const Contact = () => {

    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const [showToast, setShowToast] = useState(false);

    const [invalidField, setInvalidField] = useState(null);
    const [sending, setSending] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });



    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    nameRef.current?.focus();
                }
            },
            {
                threshold: 0.6,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate Name
        if (!form.name.trim()) {
            setInvalidField("name");
            nameRef.current?.focus();

            setTimeout(() => {
                setInvalidField(null);
            }, 1800);

            return;
        }

        // Validate Email
        if (!form.email.trim()) {
            setInvalidField("email");
            emailRef.current?.focus();

            setTimeout(() => {
                setInvalidField(null);
            }, 1800);

            return;
        }

        // Validate Subject
        if (!form.subject.trim()) {
            setInvalidField("subject");

            setTimeout(() => {
                setInvalidField(null);
            }, 1800);

            return;
        }

        // Validate Message
        if (!form.message.trim()) {
            setInvalidField("message");

            setTimeout(() => {
                setInvalidField(null);
            }, 1800);

            return;
        }

        // Only start sending AFTER validation passes
        setSending(true);

        try {
            const response = await emailjs.sendForm(
                "service_hbhtr4l",
                "template_xtmmpnl",
                formRef.current,
                {
                    publicKey: "Wy06Fl_fod1rRHsv4",
                }
            );

            console.log("EMAILJS SUCCESS");
            console.log("STATUS:", response.status);
            console.log("TEXT:", response.text);

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setInvalidField(null);

            setTimeout(() => {
                nameRef.current?.focus();
            }, 50);

            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
            }, 3500);

        } catch (error) {
            console.error("EMAILJS FAILED");
            console.error("ERROR:", error);
            console.error("ERROR TEXT:", error?.text);
            console.error("ERROR STATUS:", error?.status);

        } finally {
            setSending(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="section contact"
        >

            <h1 className="contactHero">
                GET IN
                <br />
                TOUCH.
            </h1>

            <img
                src={signature}
                alt="Signature"
                className="contactSignature"
            />

            <form
                ref={formRef}
                className="contactCard"
                onSubmit={handleSubmit}
            >

                <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className={`${form.name ? "hasValue" : ""} ${invalidField === "name" ? "invalid" : ""
                        }`}
                />

                <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className={`${form.email ? "hasValue" : ""} ${invalidField === "email" ? "invalid" : ""
                        }`}
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${form.subject ? "hasValue" : ""} ${invalidField === "subject" ? "invalid" : ""
                        }`}
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className={`${form.message ? "hasValue" : ""} ${invalidField === "message" ? "invalid" : ""
                        }`}
                />

                <button
                    type="submit"
                    className="contactSendButton"
                    disabled={sending}
                >
                    <span>
                        {sending ? "Sending..." : "Send Message"}
                    </span>

                    <div className="contactSendArrow">
                        <ArrowRight
                            size={17}
                            strokeWidth={1}
                        />
                    </div>
                </button>

            </form>

            {showToast && (
                <div className="contactToast">
                    <div className="contactToastCheck">
                        ✓
                    </div>

                    <span>Message sent</span>
                </div>
            )}

        </section>
    );
};

export default Contact;