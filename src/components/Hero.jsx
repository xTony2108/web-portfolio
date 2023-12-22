import { useEffect, useState } from "react";
import foto from "../assets/images/foto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
  const [writer, setWriter] = useState("");
  const [count, setCount] = useState(0);

  const text = `Sono un junior full stack developer. Esplora il mio portfolio per vedere cosa posso fare e come ho affrontato sfide uniche nel mondo dello sviluppo web.`;

  const maxLength = text.length;
  const speed = 3000 / maxLength;

  useEffect(() => {
    const write = setInterval(() => {
      if (count >= text.length) {
        clearInterval(write);
      } else {
        setWriter((prevText) => (prevText += text.charAt(count)));
        setCount((prevCount) => prevCount + 1);
      }
    }, speed);
    return () => clearInterval(write);
  }, [count, text]);

  return (
    <>
      <header className="relative">
        <div className="flex justify-center m-auto pb-20 pt-10 max-w-sm sm:max-w-2xl sm:pb-40 sm:pt-20 lg:max-w-4xl xl:min-h-[calc(100svh-58px)] xl:py-heroXl xl:max-w-6xl">
          <div className="flex-1 w-full">
            <div className="w-full">
              <h1 className="font-black text-4xl lg:text-6xl xl:text-8xl">
                <span>
                  Ciao,
                  <br /> sono <span className="text-[#6A0DAD]">Antonino.</span>
                </span>
              </h1>
              <p className="text-sm font-bold lg:leading-8 lg:mt-4 sm:text-base lg:text-xl xl:text-2xl">
                {writer}
              </p>
            </div>
            <div className="w-full flex items-start mt-4 gap-4">
              <button className="bg-[#6A0DAD] text-white min-w-32 h-9 rounded-2xl font-semibold shadow-lg self-start">
                Chi sono
              </button>
              <a
                href="https://www.linkedin.com/in/antonino-alampi-002b62280/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin"
                  cursor={"pointer"}
                  style={{
                    display: "block",
                    color: "#6a0dad",
                    width: "36px",
                    height: "36px",
                  }}
                />
              </a>
              <a href="https://github.com/xTony2108" target="_blank">
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  cursor={"pointer"}
                  style={{
                    display: "block",
                    color: "#6a0dad",
                    width: "36px",
                    height: "36px",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="flex-1 hidden justify-center items-center sm:flex">
            <div className="p-4 hidden relative z-20 imgBorder overflow-hidden sm:flex items-center justify-center rounded-full xl:w-96 xl:h-96 lg:w-72 lg:h-72 sm:w-56 sm:h-56">
              <img
                src={foto}
                className="w-full h-full rounded-full relative z-20"
              />
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1703247122">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </header>
    </>
  );
};
