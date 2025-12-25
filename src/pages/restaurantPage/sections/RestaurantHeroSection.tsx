import type { RestaurantCard } from "../../../types/cardTypes";

type RestaurantHeroSectionProps = {
  restaurant: RestaurantCard;
};

const RestaurantHeroSection = ({ restaurant }: RestaurantHeroSectionProps) => {
  return (
    <section className="w-full h-[272px] md:h-[425px]">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="h-full w-full object-cover "
      />
    </section>
  );
};

export default RestaurantHeroSection;
