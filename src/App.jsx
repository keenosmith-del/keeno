import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Intro from "./sections/Intro";
import ProjectSection1 from "./sections/ProjectSection1";
import ProjectSection2 from "./sections/ProjectSection2";
import ProjectSection3 from "./sections/ProjectSection3";
import ProjectSection4 from "./sections/ProjectSection4";
import Contact from "./sections/Contact";

import CV from "./pages/CV";

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
  MessageCircle,
  Puzzle,
  SquareArrowOutUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaRedditAlien,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGitlab,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

import { BsBluesky } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";

function App() {
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  const [showProjects, setShowProjects] = useState(false);

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

  // scroll helper
  const scrollToSection = (index) => {
    contentRef.current.children[index].scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });

    setMenuOpen(false);
  };

  return (
    <main className="app">
      {/* cursor light */}
      {/* <div className="cursorLight"></div> */}

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
          <div
            className={`menuItem ${activeSection === 0 ? "active" : ""}`}
            onClick={() => scrollToSection(0)}
          >
            <UserRound size={11} strokeWidth={1} />
            <span>Intro</span>
          </div>

          <div
            className={`menuItem ${activeSection === 1 ? "active" : ""}`}
            onClick={() => scrollToSection(1)}
          >
            <FolderOpen size={14} strokeWidth={1} />
            <span>Project I</span>
          </div>

          <div
            className={`menuItem ${activeSection === 2 ? "active" : ""}`}
            onClick={() => scrollToSection(2)}
          >
            <FolderOpen size={14} strokeWidth={1} />
            <span>Project II</span>
          </div>

          <div
            className={`menuItem ${activeSection === 3 ? "active" : ""}`}
            onClick={() => scrollToSection(3)}
          >
            <FolderOpen size={14} strokeWidth={1} />
            <span>Project III</span>
          </div>

          <div
            className={`menuItem ${activeSection === 4 ? "active" : ""}`}
            onClick={() => scrollToSection(4)}
          >
            <FolderOpen size={14} strokeWidth={1} />
            <span>Project IV</span>
          </div>

          {/*
          <div
            className={`menuItem ${activeSection === 5 ? "active" : ""}`}
            onClick={() => scrollToSection(5)}
          >
            <Puzzle size={14} strokeWidth={1} />
            <span>Skills</span>
          </div>
          */}

          {/*
          <div
            className={`menuItem ${activeSection === 5 ? "active" : ""}`}
            onClick={() => scrollToSection(5)}
          >
            <GraduationCap size={14} strokeWidth={1} />
            <span>Education</span>
          </div>

          <div
            className={`menuItem ${activeSection === 6 ? "active" : ""}`}
            onClick={() => scrollToSection(6)}
          >
            <Briefcase size={14} strokeWidth={1} />
            <span>Experience</span>
          </div>
          */}

          <div
            className={`menuItem ${activeSection === 5 ? "active" : ""}`}
            onClick={() => scrollToSection(5)}
          >
            <MessageCircle size={14} strokeWidth={1} />
            <span>Contact</span>
          </div>

          <div className="menuSpacer" />

          {/* links */}
          <div className="menuItem">
            <Globe size={14} strokeWidth={1} />
            <span>Web Projects</span>
          </div>

          <div className="menuSpacer" />

          {/* socials */}
          <div className="menuItem">
            <FaGithub size={14} strokeWidth={1} />
            <span>GitHub</span>
          </div>

          <div className="menuItem">
            <FaGitlab size={14} strokeWidth={1} />
            <span>GitLab</span>
          </div>

          <div className="menuItem">
            <FaLinkedin />
            <span>LinkedIn</span>
          </div>

          <div className="menuItem">
            <FaDiscord />
            <span>Discord</span>
          </div>

          <div className="menuItem">
            <SiFiverr size={40} color="currentColor" />
            <span>Fiverr</span>
          </div>

          <div className="menuItem">
            <BsBluesky />
            <span>Bluesky</span>
          </div>

          <div className="menuItem">
            <FaRedditAlien />
            <span>Reddit</span>
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
            <FaYoutube />
            <span>YouTube</span>
          </div>

          <div className="menuSpacer" />

          {/* downloads */}
          <div
            className="menuItem"
            onClick={() => window.open("/cv.html", "_blank")}
          >
            <SquareArrowOutUpRight size={14} strokeWidth={1} />
            <span>View CV</span>
          </div>

          {/*
          <div className="menuItem">
            <Download size={14} strokeWidth={1} />
            <span>Academic Record</span>
          </div>
          */}

          <div className="menuSpacer" />


          {/* contact */}
          {/*
          <div className="menuItemStatic">
            <Phone size={14} strokeWidth={1} />
            <span>+27 82 415 8441</span>
          </div>

          <div className="menuItemStatic">
            <Mail size={14} strokeWidth={1} />
            <span>business.keenosmith@icloud.com</span>
          </div>
          */}

        </div>

      </div>

      <div
        className="content"
        ref={contentRef}
      >
        <Intro
          showProjects={showProjects}
          setShowProjects={setShowProjects}
          setMenuOpen={setMenuOpen}
        />

        <ProjectSection1 />

        <ProjectSection2 />

        <ProjectSection3 />

        <ProjectSection4 />

        <Contact />

      </div>

      {/* menu */}
      <button
        className="menuButton"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Grip size={22} strokeWidth={1.3} fill="currentColor" />
      </button>

      <nav className="navigationPills">
        {[0, 1, 2, 3, 4, 5].map((index) => (
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

      <div className={`socials ${activeSection === 0 ? "visible" : "hidden"}`}>
        <FaGithub />
        <FaGitlab />
        <FaLinkedin />
        <FaDiscord />
        <SiFiverr />
        <BsBluesky />
        <FaRedditAlien />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>

    </main>
  );
}

export default App;