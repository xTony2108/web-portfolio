export const Navbar = ({ aboutMeRef, mySkillsRef, myProjectsRef }) => {
  const aboutMe = aboutMeRef;
  const mySkills = mySkillsRef;
  const myProjects = myProjectsRef;

  return (
    <>
      <nav className="py-4 border-b-2 border-black px-4 sm:px-0">
        <div className="flex justify-between items-center m-auto max-w-sm sm:max-w-xl lg:max-w-4xl xl:max-w-6xl">
          <span className="block h-full text-black font-bold text-xs sm:text-base">
            Antonino Alampi
          </span>
          <div className="flex">
            <button
              className="block ml-6 sm:ml-12 text-black hover:translate-y-0.5 font-bold text-xs sm:text-base"
              onClick={() =>
                aboutMe &&
                aboutMe?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Chi sono
            </button>
            <button
              className="block ml-6 sm:ml-12 text-black hover:translate-y-0.5 font-bold text-xs sm:text-base"
              onClick={() =>
                mySkills &&
                mySkills?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Competenze
            </button>
            <button
              className="block ml-6 sm:ml-12 text-black hover:translate-y-0.5 font-bold text-xs sm:text-base"
              onClick={() =>
                myProjects &&
                myProjects?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Progetti
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
