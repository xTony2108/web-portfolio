import { useEffect, useState } from "react";
import foto from "../assets/images/foto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
  const [writer, setWriter] = useState("");
  const [count, setCount] = useState(0);

  const text = `Sono un junior full stack developer. Esplora il mio portfolio per vedere cosa posso fare e come ho affrontato sfide uniche nel mondo dello sviluppo web.`;

  const maxLength = text.length;
  const speed = 5000 / maxLength;

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
      <header className="bgImg">
        <div className="flex justify-center h-[calc(100vh-92px)] py-sectionPY max-w-sectionWidth m-auto">
          <div className="flex-1 w-full">
            <div className="w-full">
              <h1 className="font-black text-8xl leading-tight">
                <span>
                  Ciao,
                  <br /> sono <span className="text-[#6A0DAD]">Antonino.</span>
                </span>
              </h1>
              <p className="text-2xl font-bold leading-8 mt-4">{writer}</p>
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
                  size="2xl"
                  cursor={"pointer"}
                  style={{ color: "#6a0dad" }}
                />
              </a>
              <a href="https://github.com/xTony2108" target="_blank">
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  size="2xl"
                  cursor={"pointer"}
                  style={{ color: "#6a0dad" }}
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="p-4 w-96 h-96 relative z-20 imgBorder overflow-hidden flex items-center justify-center rounded-full">
              <img
                src={foto}
                className="w-full h-full rounded-full relative z-20"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
