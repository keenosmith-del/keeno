import "./App.css";
import { useEffect, useRef, useState } from "react";

import Intro from "./sections/Intro";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

import {
  Grip,
  ArrowRight,
  GraduationCap,
  FolderOpen,
  Briefcase,
  Mail,
  Globe,
  Download,
  Phone,
  UserRound,
} from "lucide-react";

import {
  FaGithub,
  FaRedditAlien,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { BsBluesky } from "react-icons/bs";

function App() {
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  // cursor light
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let lightX = mouseX;
    let lightY = mouseY;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animationFrame;

    const animate = () => {
      lightX += (mouseX - lightX) * 0.08;
      lightY += (mouseY - lightY) * 0.08;

      document.documentElement.style.setProperty("--light-x", `${lightX}px`);
      document.documentElement.style.setProperty("--light-y", `${lightY}px`);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // active pill nav
  useEffect(() => {
    const container = contentRef.current;

    const handleScroll = () => {
      const index = Math.round(
        container.scrollLeft / window.innerWidth
      );

      setActiveSection(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="app">
      {/* cursor light */}
      {/*<div className="cursorLight"></div>*/}

      {/* glass slideout */}
      <div className={`menuPanel ${menuOpen ? "open" : ""}`}>

        <button
          className="closeMenu"
          onClick={() => setMenuOpen(false)}
        >
          <ArrowRight size={20} strokeWidth={1.3} color="#E7E2D9" />
        </button>

        <div className="menuContent">
          {/* navigation */}
          <div className="menuItem active">
            <UserRound size={16} strokeWidth={1.3} />
            <span>Intro</span>
          </div>

          <div className="menuItem">
            <GraduationCap size={16} strokeWidth={1.3} />
            <span>Education & Skills</span>
          </div>

          <div className="menuItem">
            <FolderOpen size={16} strokeWidth={1.3} />
            <span>Projects I</span>
          </div>

          <div className="menuItem">
            <FolderOpen size={16} strokeWidth={1.3} />
            <span>Projects II</span>
          </div>

          <div className="menuItem">
            <Briefcase size={16} strokeWidth={1.3} />
            <span>Experience</span>
          </div>

          <div className="menuItem">
            <Mail size={16} strokeWidth={1.3} />
            <span>Contact</span>
          </div>

          <div className="menuSpacer" />

          {/* links */}
          <div className="menuItem">
            <Globe size={16} strokeWidth={1.3} />
            <span>Web Project 1</span>
          </div>

          <div className="menuItem">
            <Globe size={16} strokeWidth={1.3} />
            <span>Web Project 2</span>
          </div>

          <div className="menuItem">
            <Globe size={16} strokeWidth={1.3} />
            <span>Web Project 3</span>
          </div>

          <div className="menuItem">
            <Globe size={16} strokeWidth={1.3} />
            <span>Web Project 4</span>
          </div>

          <div className="menuSpacer" />

          {/* socials */}
          <div className="menuItem">
            <FaGithub size={16} strokeWidth={1.3} />
            <span>GitHub</span>
          </div>

          <div className="menuItem">
            <BsBluesky />
            <span>Bluesky</span>
          </div>

          <div className="menuItem">
            <FaLinkedin />
            <span>LinkedIn</span>
          </div>

          <div className="menuItem">
            <FaInstagram />
            <span>Instagram</span>
          </div>

          <div className="menuItem">
            <FaTwitter />
            <span>X</span>
          </div>

          <div className="menuItem">
            <FaRedditAlien />
            <span>Reddit</span>
          </div>

          <div className="menuSpacer" />

          {/* downloads */}
          <div className="menuItem">
            <Download size={16} strokeWidth={1.3} />
            <span>Download CV</span>
          </div>

          <div className="menuItem">
            <Download size={16} strokeWidth={1.3} />
            <span>Academic Record</span>
          </div>

          <div className="menuSpacer" />

          {/* contact */}
          <div className="menuItemStatic">
            <Phone size={16} strokeWidth={1.3} />
            <span>+27 82 415 8441</span>
          </div>

          <div className="menuItemStatic">
            <Mail size={16} strokeWidth={1.3} />
            <span>business.keenosmith@icloud.com</span>
          </div>

        </div>

      </div>

      <div
        className="content"
        ref={contentRef}
      >
        <Intro />

        <Home />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

      </div>

      {/* menu */}
      <button
        className="menuButton"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Grip size={22} strokeWidth={1.3} />
      </button>

      <nav className="navigationPills">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <button
            key={index}
            className={`navPill ${activeSection === index ? "active" : ""}`}
            onClick={() => {
              contentRef.current.children[index].scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
          />
        ))}
      </nav>

      <div className="socials">
        <FaGithub />
        <FaRedditAlien />
        <BsBluesky />
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
      </div>

    </main>
  );
}

export default App;