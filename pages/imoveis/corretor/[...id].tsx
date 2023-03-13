import { GetServerSideProps } from "next";
import { Broker } from "../../../src/screens/Broker";
import { api } from "../../../src/services/api";

export default function PropertyPage({ properties, total, user }) {
    return (
        <Broker owner={user} properties={properties} total={total} />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const idUser = id[id.length - 1];

    const user = await api.get(`user/${idUser}`).then(res => res.data);
    const properties = await api.get(`property?ownerId=${idUser}&realEstateId=${process.env.REAL_ESTATE_ID}`).then(res => res.data);

    return {
        props: {
            user: user ?? null,
            properties: properties.properties ?? [],
            total: properties.total
        }
    }
}