import React from "react";
import IconDisplay from "./iconDisplay";
import ClearNight from "../../common/images/Clear-night.png";
import ClearDay from "../../common/images/Clear-day.png";
import CloudsDay from "../../common/images/Clouds-day.png";
import CloudsNigh from "../../common/images/Clouds-night.png";
import Mist from "../../common/images/Mist.png";
import Rain from "../../common/images/Rain.png";
import Snow from "../../common/images/Snow.png";
import Thunderstorm from "../../common/images/Thunderstorm.png";
import Tornado from "../../common/images/Tornado.png";

type IconProps = {
  icon: string;
  discription: string;
};
export const Icon: React.FC<IconProps> = ({ icon, discription }: IconProps) => {
  return (
    <div>
      {(() => {
        switch (discription) {
          case "Mist" ||
            "Smoke" ||
            "Haze" ||
            "Dust" ||
            "Fog" ||
            "Sand" ||
            "Ash" ||
            "Squall":
            return <img src={Mist} alt={discription} />;
          case "Clear":
            if (icon.includes("n")) {
              return <img src={ClearNight} alt={discription} />;
            } else {
              return <img src={ClearDay} alt={discription} />;
            }
          case "Clouds":
            if (icon.includes("n")) {
              return <img src={CloudsNigh} alt={discription} />;
            } else {
              return <img src={CloudsDay} alt={discription} />;
            }
          case "Drizzle" || "Rain":
            return <img src={Rain} alt={discription} />;
          case "Snow":
            return <img src={Snow} alt={discription} />;
          case "Thunderstorm":
            return <img src={Thunderstorm} alt={discription} />;
          case "Tornado":
            return <img src={Tornado} alt={discription} />;
          default:
            return <IconDisplay discription={discription} />;
        }
      })()}
    </div>
  );
};

export default Icon;
