export const Navbar = ({ aboutMeRef, mySkillsRef, myProjectsRef }) => {
  const aboutMe = aboutMeRef;
  const mySkills = mySkillsRef;
  const myProjects = myProjectsRef;

  return (
    <>
      <nav className="fixed bg-white top-0 left-0 right-0 z-50 py-4 border-b-2 border-black px-5">
        <div className="flex justify-between items-center m-auto max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <span className="sm:block h-full text-black font-bold text-xs hidden sm:text-base">
            Antonino Alampi
          </span>
          <span className="block h-full text-black font-bold text-xs sm:hidden sm:text-base">
            A. A.
          </span>
          <div className="flex gap-3 sm:gap-12">
            <button
              className="block text-black hover:translate-y-0.5 font-bold text-xs sm:text-base"
              onClick={() =>
                aboutMe &&
                aboutMe?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Chi sono
            </button>
            <button
              className="block text-black hover:translate-y-0.5 font-bold text-xs sm:text-base"
              onClick={() =>
                mySkills &&
                mySkills?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Competenze
            </button>
            <button
              className="block text-black hover:translate-y-0.5 font-bold text-xs sm:text-base"
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
