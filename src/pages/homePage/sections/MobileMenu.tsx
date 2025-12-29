import { RESTAURANTS, CHEFS, CONTECT_US, TERM_OF_USE, PRIVACY_POLICY } from "../../../utils/Strings";
import closeIcon from "../../../assets/icons/close.svg";
import Footer from "../../../components/layout/Footer";

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 "
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className="fixed z-10 h-[413px] w-[100%] bg-white shadow-lg px-[19px]">
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="mt-[11px]"
        >
          <img src={closeIcon} alt="close" className=""/>
        </button>

        <nav className="flex flex-col place-items-start mt-10 gap-[24px] font-thin font-200 text-[18px]/[100%] tracking-[1.92px]">
          <button type="button" className="block">
            {RESTAURANTS}
          </button>
          <button type="button" className="block">
            {CHEFS}
          </button>

          <div className="h-px w-full bg-neutral-200 my-4" />
          <div className="flex flex-col gap-[40px]">
            <button type="button" className="block">
              {CONTECT_US}
            </button>
            <button type="button" className="block">
              {TERM_OF_USE}
            </button>
            <button type="button" className="block">
              {PRIVACY_POLICY}
            </button>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default MobileMenu;
