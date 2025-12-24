import searchIcon from "../../../assets/icons/search.svg";

const SearchOverlay = () => {
  return (
    <div className="absolute inset-0 h-[413px] z-20 bg-white flex items-start pt-6">
      <div className="w-full px-4">
        <div className="flex h-[32px] w-full items-center gap-2 rounded-sm border border-neutral-300 px-3 text-xs bg-white">
          <img src={searchIcon} alt="Search" className="h-3 w-3" />
          <input
            type="text"
            placeholder="Search for restaurant, cuisine, chef"
            className="flex-1 bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
