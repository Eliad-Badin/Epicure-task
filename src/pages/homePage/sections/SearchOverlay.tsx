import searchIcon from "../../../assets/icons/search.svg";
import { SEARCH_PLACEHOLDER } from "../../../utils/Strings";
import { Fade } from "react-awesome-reveal";

const SearchOverlay = () => {
  return (
    <div
      className="
        absolute inset-0 z-20
        flex h-[413px] w-full items-start justify-center bg-white pt-6
        md:h-[586px] md:w-[497px] md:justify-self-end md:items-start
      "
    >
      <Fade triggerOnce direction="down" duration={400} className="w-full">
        <div className="w-full px-4">
          <div className="flex h-[32px] w-full items-center gap-2 rounded-sm border border-neutral-300 px-3 text-xs bg-white">
            <img src={searchIcon} alt="Search" className="h-3 w-3" />
            <input
              type="text"
              placeholder={SEARCH_PLACEHOLDER}
              className="flex-1 bg-transparent outline-none"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SearchOverlay;
