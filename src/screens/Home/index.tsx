import { BannerHome } from "../../components/SectionsHome/Banner2";
import { Featured } from "../../components/SectionsHome/Featured";
import { PropertyTypes } from "../../components/SectionsHome/PropertyTypes";
import { Localities } from "../../components/SectionsHome/Localities";
import { Brokers } from "../../components/SectionsHome/Brokers";
import { News } from '../../components/SectionsHome/News';
import { GridLayout } from "../../styles/globals";

export function Home({ properties }) {
    return (
        <>
            <BannerHome
                title="Encontre o seu imóvel aqui!"
                subtitle="Conte com os melhores imóveis para você escolher!"
            />
            <Featured properties={properties} />
            <PropertyTypes />
            <Localities />
            <Brokers />
            <News />
        </>
    )
}