import Skill from "./Skill";

const SKILLS = [
  {
    name: "HTML",
    yearsOfXp: "1",
  },
  {
    name: "CSS",
    yearsOfXp: "1",
  },
  {
    name: "JavaScript",
    yearsOfXp: "1",
  },
  {
    name: "Accessibility",
    yearsOfXp: "1",
  },
  {
    name: "React",
    yearsOfXp: "0",
  },
  {
    name: "Sass",
    yearsOfXp: "0",
  },
];

function Component() {
  return (
    <>
      {SKILLS.map((skill) => (
        <Skill name={skill.name} yearsOfXp={skill.yearsOfXp} />
      ))}
    </>
  );
}

export default Component;
