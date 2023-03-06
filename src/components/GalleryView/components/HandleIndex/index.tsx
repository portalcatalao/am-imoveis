import { useEffect } from "react";
import { useSwiper } from "swiper/react";

export function HandleIndex({active, show}) {
    const swiper = useSwiper();
    useEffect(() => {
        {active && show && swiper.slideTo(active)}
        {active === 0 && show && swiper.slideTo(0)}
    }, [active, show]);
    return (
        <div></div>
    )
}