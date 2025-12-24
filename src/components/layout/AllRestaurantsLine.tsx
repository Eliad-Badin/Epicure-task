import arrowIcon from "../../assets/icons/arrow.svg";
import { ALL_RESTAURANTS } from "../../utils/Strings";

const AllRestaurantsLine = () => {
    return (
        <div className="flex">
            <button
                type="button"
                className="mt-4 text-s font-semibold tracking-[1.25px] hover:underline"
            >
                {ALL_RESTAURANTS} <img src={arrowIcon} alt="&gt %gt" className="inline-block w-4"/>
            </button>
        </div>
    )
}

export default AllRestaurantsLine;