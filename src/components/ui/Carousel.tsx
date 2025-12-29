import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type CarouselProps<T extends {id:string}> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

function Carousel<T extends {id:string}> ({
    items,
    renderItem,
}: CarouselProps<T>) {
    return (
        <Swiper
            modules={[Navigation]}
            
            spaceBetween={16}
            slidesPerView={"auto"}
            className="w-full"
        >
            {items.map((item) =>(
                <SwiperSlide key={item.id} className="!w-auto">
                    {renderItem(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;