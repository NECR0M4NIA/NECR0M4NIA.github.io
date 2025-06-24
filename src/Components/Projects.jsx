import Project from "./Project";

import designPortfolioPicture from "../images/designportfolio.png";
import elearningLandingPagePicture from "../images/elearninglandingpage.png";
import toDoWebAppPicture from "../images/todowebapp.png";
import entertainmentWebAppPicture from "../images/entertainment.png";
import memoryGamePicture from "../images/memorygame.png";
import artGalleryShowCase from "../images/artgalleryshowcase.png";

const PROJECTS = [
  {
    picture: designPortfolioPicture,
    name: "DESIGN PORTFOLIO",
    primaryLangage: "HTML",
    secondaryLangage: "CSS",
    tertiaryLangage: "",
    technologies: ["HTML", "CSS"],
  },
  {
    picture: elearningLandingPagePicture,
    name: "E-LEARNING LANDING PAGE",
    primaryLangage: "HTML",
    secondaryLangage: "CSS",
    tertiaryLangage: "",
    technologies: ["HTML"],
  },
  {
    picture: toDoWebAppPicture,
    name: "TODO WEB APP",
    primaryLangage: "HTML",
    secondaryLangage: "CSS",
    tertiaryLangage: "JAVASCRIPT",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    picture: entertainmentWebAppPicture,
    name: "ENTERTAINMENT WEB APP",
    primaryLangage: "HTML",
    secondaryLangage: "CSS",
    tertiaryLangage: "JAVASCRIPT",
    technologies: ["HTML", "CSS"],
  },
  {
    picture: memoryGamePicture,
    name: "MEMORY GAME",
    primaryLangage: "HTML",
    secondaryLangage: "CSS",
    tertiaryLangage: "JAVASCRIPT",
    technologies: ["CSS", "JavaScript"],
  },
  {
    picture: artGalleryShowCase,
    name: "ART GALLERY SHOWCASE",
    primaryLangage: "HTML",
    secondaryLangage: "CSS",
    tertiaryLangage: "JAVASCRIPT",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
  },
];

function Component() {
  return (
    <div className="md:grid-cols-2 md:auto-rows-fr md:mx-12">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-4xl text-white font-bold">Projects</h1>
        <a
          className="text-white decoration-3 underline decoration-emerald-500 text-2xl hover:text-zinc-500 transition-all duration-300 ease-out hover:decoration-emerald-900"
          href="#"
        >
          CONTACT ME
        </a>
      </div>

      {PROJECTS.map((project) => (
        <Project
          picture={project.picture}
          name={project.name}
          primaryLangage={project.primaryLangage}
          secondaryLangage={project.secondaryLangage}
          tertiaryLangage={project.tertiaryLangage}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default Component;
