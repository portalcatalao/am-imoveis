import { GetServerSideProps } from "next";
import { WebPage } from "../src/screens/WebPage";
import { api } from "../src/services/api";

export default function Pages({page}) {
    return (
        <WebPage page={page}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {id} = ctx.query;
    const slug = id[id.length - 1].replace('/', '');
    const response = await api.get(`page?realEstateId=${process.env.REAL_ESTATE_ID}&slug=${slug}`).then(res => res.data);

    if(!response?.results[0]) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            page: response?.results?.length > 0 ? response?.results[0] : null
        }
    }
}