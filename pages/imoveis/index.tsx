import { GetServerSideProps } from 'next';
import Listing from '../../src/screens/Listagem'
import { api } from '../../src/services/api';

export default function ListingPage({ properties, total, page }) {
    return (
        <Listing properties={properties} total={total} page={page} />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const properties = await api.get(`property?realEstateId=${process.env.REAL_ESTATE_ID}`).then(res => res.data);
    const realtors = await api.get(`real-estate/${process.env.REAL_ESTATE_ID}/realtors`).then(res => res.data);

    return {
        props: {
            properties: properties.properties ?? [],
            total: properties?.total,
            page: properties.page,
            realtors: realtors.results ?? [],
        }
    }
}