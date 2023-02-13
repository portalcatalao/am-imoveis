import { GetServerSideProps } from 'next';
import Institutional from '../../src/screens/Institucional'
import { api } from '../../src/services/api';

export default function InstitutionalPage({ properties }) {
    return (
        <Institutional properties={properties} />
    )
}

