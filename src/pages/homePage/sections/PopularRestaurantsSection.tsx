import Card from "../../../components/ui/Card";
import Carousel from "../../../components/ui/Carousel";
import { restaurants } from "../../../assets/data";
import type { CardProps } from "../../../types/cardTypes";
import { POPULAR_RESTAURANTS } from "../../../utils/Strings";
import AllRestaurantsLine from "../../../components/layout/AllRestaurantsLine";

const PopularRestaurantsSection = () => {
    const popularRestaurants = restaurants;

    return (
        <section className="mx-auto mt-8 px-4">
            <p className="text-[18px]/[35px] font-thin tracking-[1.25px] md:text-center md:text-[30px]">
                {POPULAR_RESTAURANTS}
            </p>

            <div className="mt-4">
                <Carousel<CardProps>
                    items={popularRestaurants}
                    renderItem={(item) => <Card card={item} />}
                />
            </div>

            <AllRestaurantsLine />
        </section>
    );
};

export default PopularRestaurantsSection;