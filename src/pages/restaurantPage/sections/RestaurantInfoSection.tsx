import type { RestaurantCard } from "../../../types/cardTypes";
import clockIcon from "../../../assets/icons/clock-icon.svg";
import { OPEN_NOW } from "../../../utils/Strings";

type RestaurantInfoSectionProps = {
  restaurant: RestaurantCard;
};

const RestaurantInfoSection = ({ restaurant }: RestaurantInfoSectionProps) => {
  return (
    <section className="px-4 py-4 md:px-8 md:py-6">
      <div className="md:flex md:items-end md:justify-between">
        <div>
          <h1 className="text-[18px]/[32px] font-regular font-400 tracking-[2.67px]">
            {restaurant.name}
          </h1>
          <p className="mt-1 text-[16px]/[20px] font-thin font-200 tracking-[1.97px]">
            {restaurant.chef}
          </p>

          <div className="mt-2 flex items-center gap-2 text-[18px]/[20px] tracking-[1.97px] font-thin font-200">
            <img src={clockIcon} alt="clock" className="w-[17px] h-[18px]
            "/>
            <span>{OPEN_NOW}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfoSection;
