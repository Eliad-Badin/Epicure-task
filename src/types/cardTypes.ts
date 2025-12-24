
export enum CardType {
    RESTAURANT = "restaurant",
    DISH = "dish",
    CHEF_REST = "chef_rest",
}

export enum IconType {
    SPICY = "spicy",
    VEGETARIAN = "vegetarian",
    VEGAN = "vegan",
}

type BaseCard = {
    id: string;
    type: CardType;
    name: string;
    image: string;
};

export type RestaurantCard = BaseCard & {
    type: CardType.RESTAURANT;
    chef: string;
    rating: number;
};

export type DishCard = BaseCard & {
    type: CardType.DISH;
    description: string;
    price: number;
    icons?: IconType[];
};

export type ChefRestaurantCard = BaseCard & {
    type: CardType.CHEF_REST;
    chef: string;
};

export type Chef = {
    id: string;
    name: string;
    image: string;
    description: string;
}

export type CardProps = RestaurantCard | DishCard | ChefRestaurantCard;