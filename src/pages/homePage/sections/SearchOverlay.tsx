import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../../assets/icons/search.svg";
import { SEARCH_PLACEHOLDER , RESTAURANTS, DISHES, NO_RESULTS } from "../../../utils/Strings";
import { Fade } from "react-awesome-reveal";
import { restaurants, dishes } from "../../../assets/data";

type SearchOverlayProps = {
    initialQuery?: string;
};

const SearchOverlay = ({initialQuery = ""}: SearchOverlayProps) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const normalized = query.trim().toLowerCase();
  const hasQuery = normalized.length > 0;

  const filteredRestaurants = hasQuery
    ? restaurants.filter((rest) =>
        (rest.name + " " + rest.chef).toLowerCase().includes(normalized)
      )
    : [];

  const filteredDishes = hasQuery
    ? dishes.filter((dish) =>
        (dish.name + " " + dish.description).toLowerCase().includes(normalized)
      )
    : [];

  return (
    <div
      className="
        absolute inset-0 z-20
        flex h-[413px] w-full items-start justify-center bg-white pt-6
        md:h-[586px] md:w-[497px] md:justify-self-end md:items-start
      "
    >
      <Fade triggerOnce direction="down" duration={400} className="w-full">
        <div className="w-full px-4">
          <div className="flex h-[32px] w-full items-center gap-2 rounded-sm border border-neutral-300 bg-white px-3 text-xs">
            <img src={searchIcon} alt="Search" className="h-3 w-3" />
            <input
              type="text"
              placeholder={SEARCH_PLACEHOLDER}
              className="flex-1 bg-transparent outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {hasQuery && (
            <div className="mt-4 max-h-[320px] space-y-4 overflow-y-auto text-xs md:max-h-[500px]">
              {filteredRestaurants.length > 0 && (
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                    {RESTAURANTS}
                  </p>
                  <ul className="space-y-1">
                    {filteredRestaurants.map((rest) => (
                      <li key={rest.id}>
                        <Link
                          to={`/restaurants/${rest.id}`}
                          className="flex items-center justify-between border-b border-neutral-200 py-2 text-[12px] hover:bg-neutral-50"
                        >
                          <span>{rest.name}</span>
                          <span className="text-neutral-500">
                            {rest.chef}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {filteredDishes.length > 0 && (
                <div>
                  <p className="mb-1 mt-2 text-[10px] font-semibold uppercase tracking-[0.16em]">
                    {DISHES}
                  </p>
                  <ul className="space-y-1">
                    {filteredDishes.map((dish) => (
                      <li key={dish.id}>
                        <Link
                          to={`/restaurants/${dish.restaurantId}`}
                          className="flex items-center justify-between border-b border-neutral-200 py-2 text-[12px] hover:bg-neutral-50"
                        >
                          <span>{dish.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {filteredRestaurants.length === 0 &&
                filteredDishes.length === 0 && (
                  <p className="mt-2 text-[11px] text-neutral-500">
                    {NO_RESULTS}
                  </p>
                )}
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default SearchOverlay;
