import cv from "../assets/images/Alampi_Antonino_CV.pdf";

export const AboutMe = () => {
  return (
    <div className="bg-[#101118] py-sectionPY">
      <h2 className="text-6xl text-white text-center font-black">Chi sono</h2>
      <div className="max-w-sectionWidth m-auto pt-6 flex flex-col items-center">
        <p className="text-white text-xl font-bold pb-8">
          Mi chiamo Antonino Alampi sono nato e cresciuto a Reggio Calabria il
          21/08/1999. Sin da piccolo ho avuto una forte passione per
          l'informatica osservando i miei fratelli utilizzare computer e
          console. Nel 2013 ho frequentato l'istituto "ITT Panella-vallauri"
          conseguendo nel 2018 il diploma come perito informatico con una
          valutazione di 83/100. Terminata la scuola ho fatto vari lavoretti
          fino al 2020 quando mi trasferì in provincia di Milano per lavorare
          presso Poste Italiane come addetto allo smistamento. Terminato il
          contratto tornai alla mia città natale dove trovai un lavoro come
          operatore di call center inbound presso System House SRL. Infine nel
          2023 conobbi Develhope che, attraverso videolezioni, tutor e progetti
          pratici in team, mi ha permesso dopo 6 mesi di imparare le basi della
          programmazione Full Stack così da aiutarmi trasformare le mie passioni
          in lavoro.
        </p>
        <div className="flex gap-8">
          <a
            href="https://www.credential.net/041e8eaa-4b45-4764-b874-7a718471c947"
            target="_blank"
            className="min-w-32 h-9 bg-[#F52691] px-6 flex items-center justify-center font-semibold shadow-lg text-white rounded-2xl"
          >
            Visualizza certificato
          </a>
          <a
            href={cv}
            target="_blank"
            className="min-w-32 h-9 bg-[#F52691] px-6 flex items-center justify-center font-semibold shadow-lg text-white rounded-2xl"
          >
            Visualizza CV
          </a>
        </div>
      </div>
    </div>
  );
};
