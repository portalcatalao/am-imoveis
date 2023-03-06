import { GetServerSideProps } from "next";
import { Home } from "../src/screens/Home";
import { api } from "../src/services/api";

export default function HomePage({ properties, realtors, tags, releases }) {
  return (
    <Home properties={properties} realtors={realtors} tags={tags} releases={releases}/>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const properties = await api.get(`property?realEstateId=${process.env.REAL_ESTATE_ID}`).then(res => res.data);
  const realtors = await api.get(`real-estate/${process.env.REAL_ESTATE_ID}/realtors`).then(res => res.data);
  const tags = await api.get(`address/tags?city=catalao&realEstateId=${process.env.REAL_ESTATE_ID}`).then(res => res.data);
  const releases = await api.get(`banners?bannerTypeId=4&realEstateId=${process.env.REAL_ESTATE_ID}`).then(res => res.data);

  return {
    props: {
      properties: properties.properties ?? [],
      realtors: realtors.results ?? [],
      tags: tags.results ?? [],
      releases: releases.results ?? []
    }
  }
}