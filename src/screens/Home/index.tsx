import { BannerHome } from "../../components/SectionsHome/Banner2";
import { Featured } from "../../components/SectionsHome/Featured";
import { PropertyTypes } from "../../components/SectionsHome/PropertyTypes";
import { Localities } from "../../components/SectionsHome/Localities";
import { Brokers } from "../../components/SectionsHome/Brokers";
import { News } from '../../components/SectionsHome/News';

export function Home({ properties, realtors }) {
    return (
        <>
            <BannerHome
                title="Encontre o seu imóvel aqui!"
                subtitle="Conte com os melhores imóveis para você escolher!"
            />
            <Featured
                title="Imóveis em destaque"
                properties={properties}
                p="2rem 2rem 3rem 2rem"
            />
            <PropertyTypes />
            <Localities />
            <Brokers realtors={realtors} />
            <News />
        </>
    )
}