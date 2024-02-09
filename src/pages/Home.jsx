import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { MySkills } from "../components/MySkills";
import { MyProjects } from "../components/MyProjects";
import { useRef } from "react";

export const Home = () => {
  const aboutMeRef = useRef();
  const mySkillsRef = useRef();
  const myProjectsRef = useRef();

  return (
    <>
      <Navbar
        aboutMeRef={aboutMeRef}
        mySkillsRef={mySkillsRef}
        myProjectsRef={myProjectsRef}
      />
      <Hero myProjectsRef={myProjectsRef} />
      <AboutMe aboutMeRef={aboutMeRef} />
      <MySkills mySkillsRef={mySkillsRef} />
      <MyProjects myProjectsRef={myProjectsRef} />
    </>
  );
};
