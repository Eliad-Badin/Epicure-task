import ChefCard from "../../../components/ui/ChefCard";
import Card from "../../../components/ui/Card";
import Carousel from "../../../components/ui/Carousel";
import { chefs, restaurants } from "../../../assets/data";
import {
    CardType,
    type CardProps,
    type RestaurantCard,
    type ChefRestaurantCard,
    type Chef

} from "../../../types/cardTypes"
import { CHEF_OF_WEEK, RESTAURANTS } from "../../../utils/Strings";
import AllRestaurantsLine from "../../../components/layout/AllRestaurantsLine";


const ChefOfTheWeekSection = () => {
    const chef =  chefs[3];
    if (!chef)
        return null;

    const chefRestaurants: RestaurantCard[] = restaurants.filter(
        (rest) => rest.chef.toLowerCase() === chef.name.toLowerCase());

    const chefRestCards: ChefRestaurantCard[] = chefRestaurants.map((rest) => ({
        id: rest.id,
        type: CardType.CHEF_REST,
        name: rest.name,
        image: rest.image,
        chef: rest.chef,
    }));

    const index = chef.name.indexOf(' ');
    const chefFirstName = chef.name.substring(0, index);

    return (
        <section className="mx-auto max-w-[1185px] mt-15 px-4">
            <h2 className="text-center text-[18px]/[35px] font-thin tracking-[1.25px] md:text-[30px]">
                {CHEF_OF_WEEK}
            </h2>

            <div>
                <ChefCard chef={chef} />
            </div>
            <div className="py-4 max-w-[724px]">
                <h3 className="font-thin font-200 text-[16px]/[25px] tracking-[1.25px] md:text-[30px]/[35px]">{chefFirstName}'s {RESTAURANTS}</h3>
                <div className="my-4 gap-[16px]">
                    <Carousel<CardProps>
                        items={chefRestCards}
                        renderItem={(card) => <Card card={card} />}
                        />
                </div>
            </div>
            <div className="md:hidden">
                <AllRestaurantsLine />
            </div>
        </section>
    )
}

export default ChefOfTheWeekSection;