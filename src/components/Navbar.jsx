import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="py-4 border-b-2 border-black">
        <div className="flex justify-between items-center max-w-sectionWidth m-auto">
          <span className="block h-full text-black font-bold">
            Antonino Alampi
          </span>
          <div className="flex">
            <Link
              to="/"
              className="block text-black hover:translate-y-0.5 font-bold"
            >
              Home
            </Link>
            <Link className="block ml-12 text-black hover:translate-y-0.5 font-bold">
              Chi sono
            </Link>
            <Link className="block ml-12 text-black hover:translate-y-0.5 font-bold">
              Contattami
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
