import type { RestaurantCard } from "../../../types/cardTypes";
import clockIcon from "../../../assets/icons/clock-icon.svg";
import { OPEN_NOW } from "../../../utils/Strings";

type RestaurantInfoSectionProps = {
  restaurant: RestaurantCard;
};

const RestaurantInfoSection = ({ restaurant }: RestaurantInfoSectionProps) => {
  return (
    <section className="px-4 py-4 md:px-0 md:py-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[24px]/[32px] font-regular font-400 tracking-[2.67px] md:text-[32px]/[38px] md:text-[56px]/[64px]">
          {restaurant.name}
        </h1>
        <p className="mt-1 text-[16px]/[20px] font-thin font-200 tracking-[1.97px] md:text-[32px]/[36px]">
          {restaurant.chef}
        </p>

        <div className="mt-3 flex items-center gap-2 text-[18px]/[20px] font-thin font-200 tracking-[1.97px] ">
          <img
            src={clockIcon}
            alt="clock"
            className="h-[18px] w-[17px]"
          />
          <span>{OPEN_NOW}</span>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfoSection;
