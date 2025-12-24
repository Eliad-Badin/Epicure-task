import bagIcon from "../../../assets/icons/bag.svg";
import { BAG_EMPTY } from "../../../utils/Strings";

const BagOverlay = () => {
  return (
    <div className="absolute h-[218px] w-full gap-[83px] inset-0 z-20 flex items-center justify-center bg-white">
      <div className="flex flex-col w-[145px] h-[178px] items-center justify-center">
        <img src={bagIcon} alt="Bag" className="mb-3 h-10 w-10" />
        <p className="text-[16px]/[20px] font-thin font-200 text-center tracking-[1.97px]">{BAG_EMPTY}</p>
        
      </div>
    </div>
  );
};

export default BagOverlay;
