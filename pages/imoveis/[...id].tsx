import { GetServerSideProps } from "next";
import { api } from "../../src/services/api";
import Property from "../../src/screens/Propriedade";

export default function PropertyPage({ property }) {
    return (
        <Property property={property} />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const properties = await api.get(`property/${id[id.length - 1]}`).then(res => res.data);

    return {
        props: {
            property: properties.property ?? [],
        }
    }
}