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
        ref={{
          aboutMeRef,
          mySkillsRef,
          myProjectsRef,
        }}
      />
      <Hero ref={myProjectsRef} />
      <AboutMe ref={aboutMeRef} />
      <MySkills ref={mySkillsRef} />
      <MyProjects ref={myProjectsRef} />
    </>
  );
};
