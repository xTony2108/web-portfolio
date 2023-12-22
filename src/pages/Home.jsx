import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { MySkills } from "../components/MySkills";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <MySkills />
    </>
  );
};
