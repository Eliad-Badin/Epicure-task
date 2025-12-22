import heroImage from "../../../assets/images/hero-food.png";
import searchIcon from "../../../assets/icons/search.svg";
import { HERO_CARD_TEXT, HERO_SEARCH_PLACEHOLDER } from "../../../utils/Strings";

type HeroSectionProps = {
  onSearchClick?: () => void; // fixed name + made optional
};

const HeroSection = ({ onSearchClick }: HeroSectionProps) => {
  return (
    <section className="w-full">
      <div className="relative mx-auto">
        {/* Hero Image */}
        <img
          src={heroImage}
          alt="Epicure Hero Dishes"
          className="h-[263px] w-full object-cover md:h-[696px]"
        />

        {/* Overlay card */}
        <div
          className="
            absolute left-1/2 top-1/2 w-[335px] max-w-xl
            -translate-x-1/2 -translate-y-1/2
            rounded-sm bg-white/90 px-4 py-4 shadow-md
            sm:px-6 sm:py-5
          "
        >
          <h1 className="text-center text-base font-semibold leading-snug md:text-xl">
            {HERO_CARD_TEXT}
          </h1>

          {/* Search Bar */}
          <div
            className="
              mt-3 flex h-[30px] w-full items-center
              rounded-[4px] border border-black/40
              px-3
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
              placeholder={HERO_SEARCH_PLACEHOLDER}
              className="
                ml-3 flex-1 border-none bg-transparent
                text-xs outline-none placeholder:text-neutral-400
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
