import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { MySkills } from "../components/MySkills";
import { MyProjects } from "../components/MyProjects";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <MySkills />
      <MyProjects />
    </>
  );
};
