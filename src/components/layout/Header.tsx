import burgerMenuIcon from "../../assets/icons/burger.svg";
import searchIcon from "../../assets/icons/search.svg";
import bagIcon from "../../assets/icons/bag.svg";
import userIcon from "../../assets/icons/user.svg";
import aboutLogo from "../../assets/icons/about-logo.svg";
import { EPICURE, RESTAURANTS, CHEFS, SEARCH} from "../../utils/Strings";
import closeIcon from "../../assets/icons/close.svg";

type HeaderMode = "default" | "search";

type HeaderProps = {
  mode?: HeaderMode;
  onMenuClick: () => void;
  onSearchClick: () => void;
  onBagClick: () => void;
  onCloseSearch?: () => void;
};

const Header = ({
  mode = "default",
  onMenuClick,
  onSearchClick,
  onBagClick,
  onCloseSearch,
}: HeaderProps) => {
  const isSearchMode = mode === "search";

  return (
    <header className="h-[46px] sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/90 backdrop-blur md:h-[64px]">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 md:h-20 md:px-6">
        {isSearchMode ? (
          <button
            type="button"
            aria-label="Close search"
            onClick={onCloseSearch}
            className="flex h-8 w-8 items-center justify-center md:hidden"
          >
            <img src={closeIcon} alt="close" className=""/>
          </button>
        ) : (
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={onMenuClick}
            className="flex h-8 w-8 items-center justify-center md:hidden"
          >
            <img src={burgerMenuIcon} alt="Burger Menu Icon" />
          </button>
        )}

        {!isSearchMode && (
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0 md:gap-2">
            <div className="flex h-8 w-8 items-center justify-center">
              <img src={aboutLogo} alt="Epicure logo" />
            </div>
            <span className="hidden text-sm font-semibold tracking-[0.35em] md:inline">
              {EPICURE}
            </span>
          </div>
        )}

        {isSearchMode && (
          <p className="absolute left-1/2 -translate-x-1/2 font-thin text-[18px] tracking-[1.92px] md:hidden">
            {SEARCH}
          </p>
        )}

        <nav className="hidden flex-1 ml-[3em] gap-6 text-xs font-medium tracking-[0.3em] md:flex">
          <button
            type="button"
            className="uppercase text-neutral-900 hover:underline"
          >
            {RESTAURANTS}
          </button>
          <button
            type="button"
            className="uppercase text-neutral-900 hover:underline"
          >
            {CHEFS}
          </button>
        </nav>

        {!isSearchMode && (
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              aria-label="Search"
              onClick={onSearchClick}
              className="flex h-8 w-8 items-center justify-center hover:opacity-70"
            >
              <img src={searchIcon} alt="Search Icon" />
            </button>
            <button
              type="button"
              aria-label="User account"
              className="flex h-8 w-8 items-center justify-center hover:opacity-70"
            >
              <img src={userIcon} alt="User Icon" />
            </button>
            <button
              type="button"
              aria-label="Shopping bag"
              onClick={onBagClick}
              className="flex h-8 w-8 items-center justify-center hover:opacity-70"
            >
              <img src={bagIcon} alt="Bag Icon" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
