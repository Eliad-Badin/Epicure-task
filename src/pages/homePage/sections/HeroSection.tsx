import heroImage from "/images/hero-food.png";
import searchIcon from "../../../assets/icons/search.svg";
import { HERO_CARD_TEXT, SEARCH_PLACEHOLDER } from "../../../utils/Strings";

type HeroSectionProps = {
  onSearchClick?: () => void; // fixed name + made optional
};

const HeroSection = ({ onSearchClick }: HeroSectionProps) => {
  return (
    <section className="w-full">
      <div className="relative mx-auto">
        <img
          src={heroImage}
          alt="Epicure Hero Dishes"
          className="h-[263px] w-full object-cover md:h-[696px]"
        />

        <div
          className="
            absolute left-1/2 top-1/2 w-[90%] max-w-xl
            -translate-x-1/2 -translate-y-1/2
            bg-white/90 px-4 py-4 shadow-md
            sm:px-6 sm:py-5 md:w-[776px] place-items-center
          "
        >
          <h1 className="w-[315px] text-center text-[24px]/[30px] font-thin tracking-[1.97px] md:text-[32px]/[40px] md:w-[402px]">
            {HERO_CARD_TEXT}
          </h1>

          <div
            className="
              mt-3 flex h-[30px] w-[315px] items-center
              rounded-[4px] border border-black/40
              px-3 gap-[16px] md:w-[505px]
            "
          >
            <button
              type="button"
              aria-label="Hero Search Button"
              onClick={onSearchClick}
              className="flex h-4 w-4 items-center justify-center hover:"
            >
              <img
                src={searchIcon}
                alt="Search logo"
                className="h-4 w-4 opacity-70"
              />
            </button>

            <input
              type="text"
              placeholder={SEARCH_PLACEHOLDER}
              className="
                ml-3 flex-1 border-none bg-transparent
                font-thin text-[12px] tracking-[1.29px] md:text-[24px] outline-none 
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
