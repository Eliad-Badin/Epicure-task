import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { restaurants } from "../../assets/data";
import RestaurantHeroSection from "./sections/RestaurantHeroSection";
import RestaurantInfoSection from "./sections/RestaurantInfoSection";
import RestaurantDishesSection from "./sections/RestaurantDishesSection";
import type { MealType } from "../../types/cardTypes";
import BagOverlay from "../homePage/sections/BagOverlay";
import SearchOverlay from "../homePage/sections/SearchOverlay";
import MobileMenu from "../homePage/sections/MobileMenu";
import { RESTAURANT_NOT_FOUND } from "../../utils/Strings";

type Overlay = "none" | "bag" | "search";

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((rest) => rest.id === id);

  const [mealType, setMealType] = useState<MealType | null>(null);
  const [overlay, setOverlay] = useState<Overlay>("none");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSearch = overlay === "search";

  if (!restaurant) {
    return (
      <div className="min-h-screen flex justify-center">
        <main className="w-full relative">
          <Header
            mode={isSearch ? "search" : "default"}
            onMenuClick={() => setIsMenuOpen(true)}
            onSearchClick={() =>
              setOverlay((prev) => (prev === "search" ? "none" : "search"))
            }
            onBagClick={() =>
              setOverlay((prev) => (prev === "bag" ? "none" : "bag"))
            }
            onCloseSearch={() => setOverlay("none")}
          />

          {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}

          <section className="relative">
            {overlay === "bag" && <BagOverlay />}
            {overlay === "search" && <SearchOverlay />}
          </section>

          <div className="mx-auto w-full max-w-6xl px-4 py-10 text-center">
            <p className="text-sm tracking-[1.5px]">{RESTAURANT_NOT_FOUND}</p>
          </div>

          <Footer />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center">
      <main className="w-full relative">
        <Header
          mode={isSearch ? "search" : "default"}
          onMenuClick={() => setIsMenuOpen(true)}
          onSearchClick={() =>
            setOverlay((prev) => (prev === "search" ? "none" : "search"))
          }
          onBagClick={() =>
            setOverlay((prev) => (prev === "bag" ? "none" : "bag"))
          }
          onCloseSearch={() => setOverlay("none")}
        />

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}

        <section className="relative w-full max-w-[1185px] mx-auto">
          <RestaurantHeroSection restaurant={restaurant} />

          {overlay === "bag" && <BagOverlay />}
          {overlay === "search" && <SearchOverlay />}
        </section>

        <div className="mx-auto w-full max-w-[1185px]">
          <RestaurantInfoSection restaurant={restaurant} />

          <RestaurantDishesSection
            restaurantId={restaurant.id}
            mealType={mealType}
            onMealTypeChange={setMealType}
          />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default RestaurantPage;
