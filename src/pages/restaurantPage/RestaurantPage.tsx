import { useParams } from "react-router-dom";
import { useState } from "react";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { restaurants } from "../../assets/data";
import RestaurantHeroSection from "./sections/RestaurantHeroSection";
import RestaurantInfoSection from "./sections/RestaurantInfoSection";
import RestaurantDishesSection from "./sections/RestaurantDishesSection";
import type { MealType } from "../../types/cardTypes";

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((rest) => rest.id === id);

  const [mealType, setMealType] = useState<MealType | null>(null);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex justify-center">
        <main className="w-full max-w-6xl px-4 py-10 text-center">
          <p className="text-sm tracking-[1.5px]">Restaurant not found.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center">
      <main className="w-full">
        <Header
          onMenuClick={() => console.log("menu clicked")}
          onSearchClick={() => console.log("search clicked")}
          onBagClick={() => console.log("bag clicked")}
        />
        <div className="max-w-[1185px] md:place-items-center md:place-self-center">

            <RestaurantHeroSection restaurant={restaurant} />

            <RestaurantInfoSection restaurant={restaurant} />

            <RestaurantDishesSection
            restaurantId={restaurant.id}
            mealType={mealType}
            onMealTypeChange={setMealType}
            />

            <Footer />
        </div>
      </main>
    </div>
  );
};

export default RestaurantPage;
