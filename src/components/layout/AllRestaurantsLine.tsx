import arrowIcon from "../../assets/icons/arrow.svg";
import { ALL_RESTAURANTS } from "../../utils/Strings";
import { Link } from "react-router-dom";

const AllRestaurantsLine = () => {
    return (
        <div className="flex">
            <Link
                to="/"
                className="mt-4 text-s font-semibold tracking-[1.25px] hover:underline"
            >
                {ALL_RESTAURANTS} <img src={arrowIcon} alt="&gt %gt" className="inline-block w-4"/>
            </Link>
        </div>
    )
}

export default AllRestaurantsLine;