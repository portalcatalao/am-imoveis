import { BannerHome } from "../../components/SectionsHome/Banner";
import { Properties } from "../../components/SectionsHome/Properties";
import { PropertyTypes } from "../../components/SectionsHome/PropertyTypes";
import { Localities } from "../../components/SectionsHome/Localities";
import { Brokers } from "../../components/SectionsHome/Brokers";
import { Releases } from '../../components/SectionsHome/Releases';

export function Home({ properties, realtors, tags, releases }) {
    return (
        <>
            <BannerHome
                title="Encontre o seu imóvel aqui!"
                subtitle="Conte com os melhores imóveis para você escolher!"
            />


            <Properties
                title="Imóveis em destaque"
                properties={properties}
                p="2rem 2rem 3rem 2rem"
                backgroundColor="white"
            />

            <PropertyTypes />

            {
                tags.length > 0 &&
                <Localities tags={tags} />
            }

            <Properties
                title="Imóveis à venda"
                properties={properties}
                backgroundColor="#f7f7f7"
            />

            <Properties
                title="Imóveis para alugar"
                properties={properties}
                p="2rem 2rem 3rem 2rem"
                backgroundColor="white"
            />

            {
                realtors.length > 0 &&
                <Brokers realtors={realtors} />
            }

            {
                releases.length > 0 &&
                <Releases releases={releases} />
            }
        </>
    )
}