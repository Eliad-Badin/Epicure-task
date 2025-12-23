import Card from "../../../components/ui/Card";
import Carousel from "../../../components/ui/Carousel";
import { dishes } from "../../../assets/data";
import type { CardProps } from "../../../types/cardTypes";
import { SIGNATURE_DISHES, ALL_RESTAURANTS } from "../../../utils/Strings";
import arrowIcon from "../../../assets/icons/arrow.svg";

const SignatureDishesSection = () => {
    const SignatureDishes = dishes;

    return (
        <section className="mx-auto mt-8 px-4">
            <p className="text-[18px]/[35px] font-thin tracking-[1.25px] md:text-center md:text-[30px]">
                {SIGNATURE_DISHES}
            </p>

            <div className="mt-4">
                <Carousel<CardProps>
                    items={SignatureDishes}
                    renderItem={(item) => <Card card={item} />}
                />
            </div>

            <div className="flex">
                <button
                    type="button"
                    className="mt-4 text-s font-semibold tracking-[1.25px] hover:underline"
                >
                    {ALL_RESTAURANTS} <img src={arrowIcon} alt="&gt %gt" className="inline-block w-4"/>
                </button>
            </div>
        </section>
    )
}

export default SignatureDishesSection;