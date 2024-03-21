import { forwardRef } from "react";
import cv from "../assets/images/Alampi_Antonino_CV.pdf";

export const AboutMe = forwardRef((_, ref) => {
  return (
    <div className="bg-[#101118] px-5 py-heroLg 2xl:py-heroXl" ref={ref}>
      <h2 className="text-white text-center font-black text-3xl lg:text-5xl xl:text-6xl">
        Chi sono
      </h2>
      <div className="m-auto pt-6 flex flex-col items-center max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <p className="text-white font-bold text-sm pb-8 sm:text-base xl:text-xl">
          Mi chiamo Antonino Alampi sono nato a Reggio Calabria il 21/08/1999.
          Sin da piccolo ho avuto una forte passione per l'informatica
          osservando i miei fratelli utilizzare computer e console. Nel 2013 ho
          frequentato l'istituto "ITT Panella-Vallauri" conseguendo nel 2018 il
          diploma come perito informatico con una valutazione di 83/100.
          Terminata la scuola ho fatto vari lavori spostandomi tra Milano e
          Reggio Calabria. Nel 2023 conobbi Develhope che, attraverso
          videolezioni, tutor e progetti pratici in team, mi ha permesso dopo 6
          mesi di imparare le basi della programmazione Full Stack così da
          aiutarmi a trasformare le mie passioni in lavoro. Durante il corso
          abbiamo creato 3 progetti utlizzando la metodologia agile scrum. I
          primi due progetti sono repliche di siti già esistenti mentre il terzo
          è un sito con design è funzionalità scelte dal team con suggerimenti
          da parte del nostro tutor di team. Per il primo progetto abbiamo
          creato una replica del sito xbox cloud gaming utilizzando HTML e CSS.
          Per il secondo progetto abbiamo creato una replica del sito pancake
          swap usando le stesse teconologie ma con l'implementazione di
          Javascript e SCSS. Infine per il terzo ed ultimo progetto abbiamo
          utilizzato lo stack MERN.
        </p>
        <div className="flex gap-4 justify-center w-full sm:gap-8 sm:w-fit">
          <a
            href="https://www.credential.net/041e8eaa-4b45-4764-b874-7a718471c947"
            target="_blank"
            className="text-xs w-fit px-4 h-9 bg-[#F52691] flex items-center justify-center text-center font-semibold shadow-lg text-white rounded-2xl sm:text-base"
          >
            Visualizza certificato
          </a>
          <a
            href={cv}
            target="_blank"
            className="text-xs w-fit px-4 h-9 bg-[#F52691] flex items-center justify-center text-center font-semibold shadow-lg text-white rounded-2xl sm:text-base"
          >
            Visualizza CV
          </a>
        </div>
      </div>
    </div>
  );
});
