import { BannerHome } from "../../components/SectionsHome/Banner2";
import { Featured } from "../../components/SectionsHome/Featured";
import { PropertyTypes } from "../../components/SectionsHome/PropertyTypes";
import { Localities } from "../../components/SectionsHome/Localities";
import { Brokers } from "../../components/SectionsHome/Brokers";
import { News } from '../../components/SectionsHome/News';

export function Home({ properties }) {
    return (
        <>
            <BannerHome
                title="Encontre o seu imóvel aqui!"
                subtitle="Conte com os melhores imóveis para você escolher!"
            />
            <Featured
                title="Imóveis em destaque"
                properties={properties}
                p="2rem 0"
            />
            <Featured
                title="Imóveis recentemente adicionados"
                properties={properties}
                p="0 0 4rem 0"
            />
            <PropertyTypes />
            <Localities />
            <Brokers />
            <News />
        </>
    )
}