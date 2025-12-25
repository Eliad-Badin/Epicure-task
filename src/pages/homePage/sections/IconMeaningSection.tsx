import spicyIcon from "../../../assets/icons/spicy.svg";
import vegetarianIcon from "../../../assets/icons/vegetarian.svg";
import veganIcon from "../../../assets/icons/vegan.svg";
import { ICON_MEANING } from "../../../utils/Strings";

type IconItemProps = {
  icon: string;
  label: string;
};

function IconItem({ icon, label }: IconItemProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={icon} alt={label} className="h-10 w-10 md:h-12 md:w-12" />
      <span className="text-xs tracking-[0.08em]">{label}</span>
    </div>
  );
}

function IconsMeaningSection() {
  return (
    <section className="mt-15 bg-[#FAFAFA] py-12 md:py-16">

      <div className="mx-auto w-full max-w-[375px] md:max-w-[1120px] px-4 md:px-0">
        <h2 className="text-center text-[18px]/[35px] font-thin tracking-[1.25px] md:text-[30px]">
          {ICON_MEANING}
        </h2>

        <div className="mt-10 flex flex-col items-center gap-12 md:mt-8 md:flex-row md:justify-center md:gap-32">
          <IconItem icon={spicyIcon} label="Spicy" />
          <IconItem icon={vegetarianIcon} label="Vegitarian" />
          <IconItem icon={veganIcon} label="Vegan" />
        </div>
      </div>
    </section>
  );
}

export default IconsMeaningSection;