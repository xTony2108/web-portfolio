import { Link } from "react-router-dom";
import foto from "../assets/images/foto.png";

export const Navbar = () => {
  return (
    <>
      <nav className="py-12 px-4 flex flex-col justify-between min-w-80 bg-[#101118] gap-8 sticky top-0 left-0 h-screen">
        <div className="text-black flex-grow-0 flex flex-col items-center">
          <img src={foto} className="w-32 h-32 rounded-full" />
          <span className="text-2xl font-bold mt-4 text-white">
            Antonino Alampi
          </span>
          <span className="font-semibold mt-2 text-[#F4E2C9]">
            Junior Fullstack Developer
          </span>
        </div>
        <div className="flex flex-col flex-grow items-center ">
          <Link
            to="/"
            className="text-white hover:translate-y-0.5 font-semibold text-sm hover:text-[#F4E2C9] hover:underline hover:decoration-[#F4E2C9] underline-offset-4 decoration-2"
          >
            HOME
          </Link>
          <Link className="mt-8 text-white hover:translate-y-0.5 font-semibold text-sm hover:text-[#F4E2C9] hover:underline hover:decoration-[#F4E2C9] underline-offset-4 decoration-2">
            CHI SONO
          </Link>
          <Link className="mt-8 text-white hover:translate-y-0.5 font-semibold text-sm hover:text-[#F4E2C9] hover:underline hover:decoration-[#F4E2C9] underline-offset-4 decoration-2">
            CONTATTAMI
          </Link>
        </div>
      </nav>
    </>
  );
};
