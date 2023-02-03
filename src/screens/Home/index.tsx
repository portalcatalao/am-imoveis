import { BannerHome } from "../../components/SectionsHome/Banner2";
import { Featured } from "../../components/SectionsHome/Featured";
import { PropertyTypes } from "../../components/SectionsHome/PropertyTypes";
import { Localities } from "../../components/SectionsHome/Localities";
import { Brokers } from "../../components/SectionsHome/Brokers";
import { News } from '../../components/SectionsHome/News';

export function Home() {
    return (
        <>
            <BannerHome />
            <Featured />
            <PropertyTypes />
            <Localities />
            <Brokers />
            <News />
        </>
    )
}