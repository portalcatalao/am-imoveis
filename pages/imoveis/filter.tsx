import { GetServerSideProps } from 'next';
import Listing from '../../src/screens/PropertySearch'
import { api } from '../../src/services/api';

export default function ListingPage({ filter }) {
    return (
        <Listing filter={filter} />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { city, maxPrice, district, propertyType, adType } = ctx.query;
    const filter = {
      city: city ?? null, 
      maxPrice: maxPrice ?? null, 
      district: district ?? null, 
      type: propertyType ?? null, 
      adType: adType ?? null
    }
    return {
      props: {
        filter: filter
      }
    }
  }