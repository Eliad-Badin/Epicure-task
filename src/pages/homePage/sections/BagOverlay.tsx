import bagIcon from "../../../assets/icons/bag.svg";
import { BAG_EMPTY } from "../../../utils/Strings";

const BagOverlay = () => {
  return (
    <div
      className="
        absolute inset-0 z-20
        flex h-[218px] w-full items-center justify-center gap-[83px] bg-white
        md:h-[586px] md:w-[497px] md:justify-self-end md:items-start
      "
    >
      <div className="my-auto flex h-[178px] w-[145px] flex-col items-center justify-center">
        <img src={bagIcon} alt="Bag" className="mb-3 h-10 w-10" />
        <p className="text-[16px]/[20px] font-thin font-200 text-center tracking-[1.97px]">
          {BAG_EMPTY}
        </p>
      </div>
    </div>
  );
};

export default BagOverlay;
