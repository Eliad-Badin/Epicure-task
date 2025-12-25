import { dishes } from "../../../assets/data";
import type { MealType, DishCard } from "../../../types/cardTypes";
import Card from "../../../components/ui/Card";
import { NO_DISHES } from "../../../utils/Strings";

type RestaurantDishesSectionProps = {
  restaurantId: string;
  mealType: MealType | null;
  onMealTypeChange: (meal: MealType | null) => void;
};

const RestaurantDishesSection = ({
  restaurantId,
  mealType,
  onMealTypeChange,
}: RestaurantDishesSectionProps) => {
  const filteredDishes: DishCard[] = dishes.filter((dish) => {
    if (dish.restaurantId !== restaurantId) return false;
    if (mealType === null) return true;
    return dish.mealType === mealType;
  });

  return (
    <section className="pb-12">
      {/* Tabs */}
      <div className="px-4 md:px-0">
        <div className="flex justify-start gap-[21px] text-[18px] font-thin font-200 tracking-[1.92px] md:justify-center">
          <MealTab
            label="Breakfast"
            value="breakfast"
            active={mealType === "breakfast"}
            onClick={(value) => onMealTypeChange(value)}
          />
          <MealTab
            label="Lunch"
            value="lunch"
            active={mealType === "lunch"}
            onClick={(value) => onMealTypeChange(value)}
          />
          <MealTab
            label="Dinner"
            value="dinner"
            active={mealType === "dinner"}
            onClick={(value) => onMealTypeChange(value)}
          />
        </div>
      </div>

      <div
        className="
          mt-3 space-y-[22px] px-4
          md:mt-6 md:space-y-0 md:px-0
          md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 md:gap-y-8
        "
      >
        {filteredDishes.map((dish) => (
          <Card key={dish.id} card={dish} variant="restaurant" />
        ))}

        {filteredDishes.length === 0 && (
          <p className="mt-4 text-xs tracking-[1.3px] text-neutral-500 md:col-span-full">
            {NO_DISHES}
          </p>
        )}
      </div>
    </section>
  );
};

type MealTabProps = {
  label: string;
  value: MealType;
  active: boolean;
  onClick: (value: MealType) => void;
};

const MealTab = ({ label, value, active, onClick }: MealTabProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`relative py-1 uppercase ${
        active ? "font-semibold" : ""
      }`}
    >
      {label}
      <span
        className={`absolute left-0 right-0 -bottom-[1px] h-[1.8px] ${
          active ? "bg-[#DE9200]" : "bg-transparent"
        }`}
      />
    </button>
  );
};

export default RestaurantDishesSection;
