import { GetServerSideProps } from "next";
import { Home } from "../src/screens/Home";
import { api } from "../src/services/api";

export default function HomePage({ properties }) {
  return (
    <Home properties={properties} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const properties = await api.get(`property?realEstateId=${process.env.REAL_ESTATE_ID}`).then(res => res.data);
  const realtors = await api.get(`real-estate/${process.env.REAL_ESTATE_ID}/realtors`).then(res => res.data);

  return {
    props: {
      properties: properties.properties ?? [],
      realtors: realtors.results ?? []
    }
  }
}