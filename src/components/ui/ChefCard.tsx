import type { Chef } from "../../types/cardTypes";

type ChefCardProps = {
    chef: Chef;
};

const ChefCard = ({ chef }: ChefCardProps) => {
    return (
        <article className="w-full overflow-hidden flex flex-col md:flex-row" aria-label={chef.name}>
            <div className="relative">
                <img 
                    src={chef.image}
                    alt={chef.name}
                    className="w-full object-cover h-[262px] md:h-[372]"
                    />
                <div className="w-full absolute bottom-0 h-[51px] bg-[#FFFFFFCC] md:h-[78px]">
                    <p className="w-full font-regular font-400 text-[18px]/[47px] text-center tracking-[2.67px]">
                        {chef.name}
                    </p>
                </div>
            </div>
            <div className="text-[18px]/[28px] font-thin font-200 tracking-[1.25px] md:text-[24px]/[35px]">
                {chef.description}
            </div>
        </article>
    )
}

export default ChefCard;