import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="py-4 border-b-2 border-black">
        <div className="flex justify-between items-center m-auto max-w-sm sm:max-w-xl lg:max-w-4xl xl:max-w-6xl">
          <span className="block h-full text-black font-bold text-xs sm:text-base">
            Antonino Alampi
          </span>
          <div className="flex">
            <Link
              to="/"
              className="block text-black hover:translate-y-0.5 font-bold text-xs sm:text-base"
            >
              Home
            </Link>
            <Link className="block ml-6 sm:ml-12 text-black hover:translate-y-0.5 font-bold text-xs sm:text-base">
              Chi sono
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
