import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SkillCard = ({
  iconName,
  icon,
  firstStar,
  secondStar,
  thirdStar,
  fourthStar,
  fifthStar,
  color,
}) => {
  return (
    <div className="min-w-60 flex justify-center items-center py-10 sm:py-20 overflow-hidden flex-col relative z-20 bg-emerald-400 p-6 rounded-2xl hover:cardBorder sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333333%-24px)]">
      <FontAwesomeIcon
        icon={icon}
        size="10x"
        style={{ color: "#101118" }}
        className="w-20 sm:w-60"
      />
      <p className="font-bold text-xl py-6">{iconName}</p>
      <div>
        <FontAwesomeIcon
          icon={firstStar.star}
          style={firstStar.color ? { color: "gold" } : ""}
        />
        <FontAwesomeIcon
          icon={secondStar.star}
          style={secondStar.color ? { color: "gold" } : ""}
        />
        <FontAwesomeIcon
          icon={thirdStar.star}
          style={thirdStar.color ? { color: "gold" } : ""}
        />
        <FontAwesomeIcon
          icon={fourthStar.star}
          style={fourthStar.color ? { color: "gold" } : ""}
        />
        <FontAwesomeIcon
          icon={fifthStar.star}
          style={fifthStar.color ? { color: "gold" } : ""}
        />
      </div>
    </div>
  );
};
