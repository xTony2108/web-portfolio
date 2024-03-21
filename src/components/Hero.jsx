import { forwardRef, useEffect, useRef, useState } from "react";
import foto from "../assets/images/foto.png";
import { clsx } from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = forwardRef((_, ref) => {
  const [writer, setWriter] = useState("");
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const heroRef = useRef();
  const myProjects = ref;
  const text = `Sono un junior full stack developer. Esplora il mio portfolio per vedere cosa posso fare e come ho affrontato sfide uniche nel mondo dello sviluppo web.`;

  const maxLength = text.length;
  const speed = 3000 / maxLength;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-1px",
        threshold: 0,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

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
      <header className="relative" ref={heroRef}>
        <div className="px-5 m-auto pb-20 pt-[90px] tallmd:flex tallmd:flex-col sm:min-h-fit md:min-h-fit max-w-screen-sm sm:pb-40 sm:flex sm:items-center sm:justify-center sm:pt-[138px] md:max-w-screen-md xl:py-heroXl lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <div className="flex flex-col justify-center tallmd:flex-1 tallmd:flex-col sm:flex-row sm:flex-1">
            <div className="w-full sm:flex-1 tallmd:flex tallmd:flex-col tallmd:justify-center">
              <div className="w-full">
                <h1 className="font-black text-3xl text-center tall:text-5xl tallmd:text-5xl tallmd:text-center sm:text-left lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  <span>
                    Ciao,
                    <br /> sono{" "}
                    <span className="text-[#6A0DAD]">Antonino.</span>
                  </span>
                </h1>
                <p className="text-sm font-bold text-center tall:text-base tallmd:text-lg tallmd:text-center sm:text-left lg:leading-8 lg:mt-4 sm:text-base lg:text-xl xl:text-2xl">
                  {writer}
                </p>
              </div>
              <div className="w-full flex items-start mt-4 gap-4 justify-center sm:justify-normal tallmd:justify-center">
                <button
                  onClick={() =>
                    myProjects &&
                    myProjects?.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="bg-[#6A0DAD] text-white min-w-32 h-9 rounded-2xl font-semibold shadow-lg self-start"
                >
                  Progetti
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
            <div className="flex justify-center items-center mt-10 sm:flex-1 sm:mt-0 tallmd:mt-10">
              <div className="tallsm:w-1/2 tallsm:h-auto tallsm:aspect-square tallmd:h-auto tallmd:aspect-square tall:w-52 tall:h-52 w-48 h-48 p-4 relative z-20 imgBorder overflow-hidden flex items-center justify-center rounded-full xl:w-96 xl:h-96 lg:w-72 lg:h-72 sm:w-56 sm:h-56">
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
        </div>
        <button
          className={clsx(
            "fixed p-2 rounded-lg content-none right-5 bottom-20 bg-[#6a0dad] z-50 sm:p-4 sm:rounded-2xl",
            isIntersecting && "hidden"
          )}
          onClick={() =>
            heroRef && heroRef?.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-up"
            cursor={"pointer"}
            style={{
              display: "block",
              color: "white",
              width: "18px",
              height: "18px",
            }}
          />
        </button>
      </header>
    </>
  );
});
