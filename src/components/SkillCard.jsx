import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SkillCard = ({ iconName, icon }) => {
  return (
    <div className="min-w-60 flex justify-center items-center py-10 sm:py-20 overflow-hidden flex-col relative z-20 bg-emerald-400 p-6 rounded-2xl hover:cardBorder sm:basis-[calc(50%-6px)] lg:basis-[calc(33.333333%-16px)] 2xl:basis-[calc(25%-18px)]">
      <FontAwesomeIcon
        icon={icon}
        size="10x"
        style={{ color: "#101118" }}
        className="w-20 sm:w-60"
      />
      <p className="font-bold text-xl py-6">{iconName}</p>
    </div>
  );
};
