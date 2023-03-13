import { GetServerSideProps } from "next";
import { api } from "../../src/services/api";
import PropertyView from "../../src/screens/PropertyView";

export default function PropertyPage({ property, properties }) {
    return (
        <PropertyView property={property} properties={properties} />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const properties1 = await api.get(`property/${id[id.length - 1]}`).then(res => res.data);
    const properties2 = await api.get(`property?realEstateId=${process.env.REAL_ESTATE_ID}`).then(res => res.data);
    

    return {
        props: {
            property: properties1.property ?? [],
            properties: properties2.properties ?? []
        }
    }
}