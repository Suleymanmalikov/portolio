import React from "react";
import "./Projects.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiXstate,
  SiStyledcomponents,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Tic Tac Toe",
      description: () => {
        return (
          <div>
            <ul>
              <li>
                <strong>Development:</strong> Created a front-end web
                application using React for playing Tic-Tac-Toe, featuring board
                size selection (3x3 or 4x4) and game modes against AI or another
                player.
              </li>
              <li>
                <strong>Features:</strong> Implemented a dynamic game board that
                updates with each move, detects game outcomes (win, draw,
                ongoing), and includes a reset button
              </li>
              <li>
                <strong>Technologies:</strong> Utilized XState for state
                management, Styled Components for a clean, responsive UI, and
                conducted unit testing with Jest and React Testing Library to
                ensure functionality and reliability
              </li>
            </ul>
          </div>
        );
      },
      technologies: [
        <FaHtml5 className="icon" />,
        <FaJs className="icon" />,
        <FaReact className="icon" />,
        <SiXstate className="icon" />,
        <SiStyledcomponents className="icon" />,
        <SiJest className="icon" />,
        <SiTestinglibrary className="icon" />,
      ],
      link: "https://github.com/Suleymanmalikov/tic-tac-toe",
    },
    {
      title: "Student-Management-System",
      description: () => {
        return (
          <div>
            <ul>
              <li>
                Developed a comprehensive Student Management Web Application for
                university projects, integrating a MySQL database for secure
                storage of student information and utilizing Java for backend
                programming.
              </li>
              <li>
                Implemented a professional user interface using React, enabling
                functionalities such as adding, viewing, editing, and deleting
                student profiles, thereby enhancing administrative efficiency.
              </li>
              <li>
                Incorporated search capabilities for quick access to student
                records, showcasing proficiency in database management (MySQL)
                and user experience design (React).
              </li>
            </ul>
          </div>
        );
      },
      technologies: [
        <FaHtml5 className="icon" />,
        <FaCss3Alt className="icon" />,
        <FaJs className="icon" />,
        <FaReact className="icon" />,
        <FaDatabase className="icon" />,
        <FaJava className="icon" />,
      ],
      link: "https://github.com/Suleymanmalikov/Student-Management-System",
    },
    {
      title: "TED-Talks",
      description: () => {
        return (
          <div>
            <ul>
              <li>
                Utilized the{" "}
                <a
                  href="https://github.com/Yakup3/ted-talk-api"
                  target="_blank"
                >
                  TED-Talk API
                </a>{" "}
                to create a TED-Talk Aggregator, organizing talks into sections
                for user convenience.
              </li>
              <li>
                Boasts a professional UI design, prioritizing ease of navigation
                and aesthetics to enhance the browsing experience.
              </li>
              <li>
                Ensured effective video presentation by efficiently presenting a
                diverse range of TED talks, fostering accessibility and user
                engagement with insightful content.
              </li>
            </ul>
          </div>
        );
      },
      technologies: [
        <FaHtml5 className="icon" />,
        <FaCss3Alt className="icon" />,
        <FaJs className="icon" />,
        <FaReact className="icon" />,
        <RiNextjsLine className="icon" />,
      ],
      link: "https://github.com/Suleymanmalikov/TED-Talks",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  {project.description()}
                </div>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
