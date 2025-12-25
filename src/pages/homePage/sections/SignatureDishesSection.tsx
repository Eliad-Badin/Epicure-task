import Card from "../../../components/ui/Card";
import Carousel from "../../../components/ui/Carousel";
import { dishes } from "../../../assets/data";
import type { CardProps } from "../../../types/cardTypes";
import { SIGNATURE_DISHES } from "../../../utils/Strings";
import AllRestaurantsLine from "../../../components/layout/AllRestaurantsLine";

const SignatureDishesSection = () => {
    const SignatureDishes = dishes;

    return (
        <section className="mx-auto mt-15 px-4 max-w-[1185px]">
            <p className="text-[18px]/[35px] font-thin tracking-[1.25px] md:text-center md:text-[30px]">
                {SIGNATURE_DISHES}
            </p>

            <div className="mt-4">
                <Carousel<CardProps>
                    items={SignatureDishes}
                    renderItem={(item) => <Card card={item} />}
                />
            </div>
            <div className="md:hidden">
                <AllRestaurantsLine />
            </div>
        </section>
    )
}

export default SignatureDishesSection;