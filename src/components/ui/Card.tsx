import {
  type CardProps,
  CardType,
  type RestaurantCard,
  type DishCard,
  type ChefRestaurantCard,
  IconType,
} from "../../types/cardTypes";
import filledStarIcon from "../../assets/icons/star-filled.svg";
import emptyStarIcon from "../../assets/icons/star-empty.svg";
import spicyIcon from "../../assets/icons/spicy-small.svg";
import vegetarianIcon from "../../assets/icons/vegetarian-small.svg";
import veganIcon from "../../assets/icons/vegan.svg";
import nisIcom from "../../assets/icons/nis.svg";
import { Link } from "react-router-dom";

type CardVariant = "default" | "restaurant";

type Props = {
  card: CardProps;
  variant?: CardVariant;
};

const Card = ({ card, variant = "default" }: Props) => {
  switch (card.type) {
    case CardType.RESTAURANT:
      return <RestaurantCardView card={card} />;
    case CardType.DISH:
      return <DishCardView card={card} variant={variant} />;
    case CardType.CHEF_REST:
      return <ChefRestaurantCardView card={card} />;
    default:
      return null;
  }
};

export default Card;

type RestaurantCardViewProps = {
  card: RestaurantCard;
};

const RestaurantCardView = ({ card }: RestaurantCardViewProps) => {
  return (
    <Link to={`/restaurants/${card.id}`} className="block">
      <article className="flex h-[233px] w-[245px] shrink-0 flex-col overflow-hidden bg-[#F9F4EA] shadow-sm md:h-[405px] md:w-[380px]">
        <img
          src={card.image}
          alt={card.name}
          className="h-[152px] w-full object-cover md:h-[236px]"
        />

        <div className="flex flex-1 flex-col items-center px-3 pb-3 pt-2">
          <h3 className="font-regular font-400 text-[18px] tracking-[2.67px] md:text-center md:text-[40px]/[47px]">
            {card.name}
          </h3>
          <p className="mt-1 font-400 font-thin text-[16px]/[20px] tracking-[1.97px] md:text-center md:text-[24px]/[30px]">
            {card.chef}
          </p>

          <div className="mt-2 hidden h-[40px] w-[216px] items-center justify-center gap-[2px] md:flex">
            {Array.from({ length: 5 }).map((_, index) => {
              const filled = index < card.rating;
              return (
                <img
                  key={index}
                  src={filled ? filledStarIcon : emptyStarIcon}
                  alt={filled ? "Filled star" : "Empty star"}
                  className="h-10"
                />
              );
            })}
          </div>
        </div>
      </article>
    </Link>
  );
};

type DishCardViewProps = {
  card: DishCard;
  variant: CardVariant; // "default" | "restaurant"
};

const DishCardView = ({ card, variant }: DishCardViewProps) => {
  const isRestaurant = variant === "restaurant";
  const showIcons = variant === "default";

  const wrapperClasses = isRestaurant
    ? "flex w-full shrink-0 flex-col overflow-hidden bg-[#FAF2E8]"
    : "flex h-[388px] w-[245px] shrink-0 flex-col overflow-hidden bg-[#FAF2E8] md:h-[654px] md:w-[380px]";

  const imageClasses = isRestaurant
    ? "h-[167px] w-full object-cover md:h-[220px]"
    : "h-[152px] w-full object-cover md:h-[306px]";

  return (
    <article className={wrapperClasses}>
      <img src={card.image} alt={card.name} className={imageClasses} />

      <div className="flex flex-1 flex-col px-3 pb-3 pt-2 md:px-6 ">
        <h3 className="font-regular font-400 text-[18px] tracking-[2.67px] md:text-center md:text-[40px]/[47px]">
          {card.name}
        </h3>

        {showIcons && (
          <div className="my-3 hidden justify-center md:flex">
            <DishIcons icons={card.icons} />
          </div>
        )}

        <p className="mt-1 text-[16px]/[20px] font-thin font-200 tracking-[1.97px] md:text-center md:text-[24px]/[30px]">
          {card.description}
        </p>

        <div className="mt-auto pt-2 md:pt-4">
          {isRestaurant ? (
            <>
              {/* mobile: price left, line to the right (unchanged) */}
              <div className="flex items-center gap-3 md:hidden">
                <span className="flex items-center text-[16px]/[19px]">
                  <img
                    src={nisIcom}
                    alt="₪"
                    className="mr-1 inline-block h-[11px] w-[8.11px] align-middle"
                  />
                  <span>{card.price}</span>
                </span>
                <div className="h-[1px] flex-1 bg-[#D6D6D6]" />
              </div>

              {/* desktop: price centered with lines on both sides */}
              <div className="hidden items-center gap-3 md:flex">
                <div className="h-[1px] flex-1 bg-[#D6D6D6]" />
                <span className="flex items-center text-[16px]/[19px] md:text-[24px]/[30px]">
                  <img
                    src={nisIcom}
                    alt="₪"
                    className="mr-1 inline-block h-[11px] w-[8.11px] align-middle md:h-[19px] md:w-[14px]"
                  />
                  <span>{card.price}</span>
                </span>
                <div className="h-[1px] flex-1 bg-[#D6D6D6]" />
              </div>
            </>
          ) : (
            <div className="text-[16px]/[19px] font-regular font-400 md:mt-2 md:h-[30px] md:w-[287px] md:pt-2 md:text-[24px]/[30px] md:font-thin">
              <div className="md:hidden">
                <img
                  src={nisIcom}
                  alt="₪"
                  className="mr-1 inline-block h-[11px] w-[8.11px] align-middle md:h-[19px] md:w-[14px]"
                />
                <span>{card.price}</span>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <div className="h-[1px] flex-1 bg-[#D6D6D6]" />
                <span className="flex items-center">
                  <img
                    src={nisIcom}
                    alt="₪"
                    className="mr-1 inline-block h-[11px] w-[8.11px] align-middle md:h-[19px] md:w-[14px]"
                  />
                  <span>{card.price}</span>
                </span>
                <div className="h-[1px] flex-1 bg-[#D6D6D6]" />
              </div>
            </div>
          )}

          {showIcons && (
            <div className="mt-2 md:hidden">
              <DishIcons icons={card.icons} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};



type DishIconsProps = {
  icons?: IconType[];
};

const DishIcons = ({ icons }: DishIconsProps) => {
  if (!icons || icons.length === 0) return null;

  return (
    <div className="flex items-center gap-1">
      {icons.map((icon, idx) => {
        switch (icon) {
          case IconType.SPICY:
            return (
              <img
                key={idx}
                src={spicyIcon}
                alt="Spicy icon"
                className="h-[24px] w-[30px] md:h-[31px] md:w-[40px]"
              />
            );
          case IconType.VEGETARIAN:
            return (
              <img
                key={idx}
                src={vegetarianIcon}
                alt="Vegetarian icon"
                className="h-[24px] w-[30px] md:h-[31px] md:w-[40px]"
              />
            );
          case IconType.VEGAN:
            return (
              <img
                key={idx}
                src={veganIcon}
                alt="Vegan icon"
                className="h-[24px] w-[30px] md:h-[31px] md:w-[40px]"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

type ChefRestaurantCardViewProps = {
  card: ChefRestaurantCard;
};

const ChefRestaurantCardView = ({ card }: ChefRestaurantCardViewProps) => {
  return (
    <article className="flex h-[233.34px] w-[245px] shrink-0 flex-col overflow-hidden bg-[#FAF2E8] bg-card shadow-sm md:h-[357px] md:w-[231px]">
      <img
        src={card.image}
        alt={card.name}
        className="h-[152.3px] w-full object-crop md:h-[231px]"
      />

      <div className="px-3 pb-3 pt-2">
        <h3 className="font-regular font-400 text-[18px] tracking-[2.67px] md:text-center md:text-[40px]/[47px]">
          {card.name}
        </h3>
      </div>
    </article>
  );
};
