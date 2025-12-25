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

type Props = {
    card: CardProps;
};

const Card = ({ card }: Props) => {
    switch (card.type) {
        case CardType.RESTAURANT:
            return <RestaurantCardView card={card} />;
        case CardType.DISH:
            return <DishCardView card={card} />;
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

const RestaurantCardView = ({card}: RestaurantCardViewProps) => {
    return (
        <article className="flex w-[245px] h-[233px] shrink-0 flex-col overflow-hidden bg-[#F9F4EA] shadow-sm md:w-[380px] md:h-[405px]">
            <img 
                src={card.image}
                alt={card.name}
                className="h-[152px] w-full object-cover md:h-[236px]"
                />

                <div className="flex flex-1 flex-col px-3 pb-3 pt-2 items-center">
                    <h3 className="font-regular font-400 text-[18px] tracking-[2.67px] md:text-[40px]/[47px] md:text-center">{card.name}</h3>
                    <p className="mt-1 text-[16px]/[20px] font-400 font-thin tracking-[1.97px] md:text-[24px]/[30px] md:text-center">{card.chef}</p>

                    <div className="hidden w-[216px] h-[40px] mt-2 flex items-center justify-center gap-[2px] md:flex">
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
    )
}

type DishCardViewProps = {
  card: DishCard;
};

const DishCardView = ({ card }: DishCardViewProps) => {
  return (
    <article
      className="
        flex shrink-0 flex-col overflow-hidden bg-[#FAF2E8] shadow-sm
        w-[245px] h-[388px]
        md:w-[380px] md:h-[654px]
      "
    >
      <img
        src={card.image}
        alt={card.name}
        className="h-[152px] w-full object-cover md:h-[306px]"
      />

      <div className="flex flex-1 flex-col px-3 pb-3 pt-2 md:px-6 md:pb-5 md:pt-4">
        <h3 className="font-regular font-400 text-[18px] tracking-[2.67px] md:text-[40px]/[47px] md:text-center">
          {card.name}
        </h3>
            <div className="hidden justify-center my-3 md:flex">
                <DishIcons icons={card.icons} />
            </div>
        <p
          className="
            mt-1 text-[16px]/[20px] font-thin tracking-[1.97px] font-200
            md:text-[24px]/[30px] md:text-center
          "
        >
          {card.description}
        </p>

        <div className="mt-auto pt-2 md:pt-4">
          <div
            className="
              flex items-center justify-between
              md:flex-col md:items-center md:gap-2 md:w-full
            "
          >
            <div className="flex flex-col">
                <div className="md:hidden">
                    <DishIcons icons={card.icons} />
                </div>
                <div
                className="
                    text-[16px]/[19px] font-regular font-400
                    md:mt-2 md:w-full md:border-t md:border-neutral-200 md:pt-2 md:text-center
                "
                >
                <img
                    src={nisIcom}
                    alt="₪"
                    className="mr-1 inline-block h-[11px] w-[8.11px] align-middle"
                />
                <span>{card.price}</span>
                </div>
            </div>
          </div>
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
            return <img key={idx} src={spicyIcon} alt="Spicy icon" className="w-[30px] h-[24px] md:w-[40px] md:h-[31px]" />;
          case IconType.VEGETARIAN:
            return <img key={idx} src={vegetarianIcon} alt="Vegetarian icon" className="w-[30px] h-[24px] md:w-[40px] md:h-[31px]" />;
          case IconType.VEGAN:
            return <img key={idx} src={veganIcon} alt="Vegan icon" className="w-[30px] h-[24px] md:w-[40px] md:h-[31px]" />;
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
    <article className="flex bg-[#FAF2E8] w-[245px] h-[233.34px] shrink-0 flex-col overflow-hidden bg-card shadow-sm md:w-[231px] md:h-[357px]">
      <img
        src={card.image}
        alt={card.name}
        className="h-[152.3px] w-full object-crop md:h-[231px]"
      />

      <div className="px-3 pb-3 pt-2">
        <h3 className="font-regular font-400 text-[18px] tracking-[2.67px] md:text-[40px]/[47px] md:text-center">{card.name}</h3>
      </div>
    </article>
  );
};