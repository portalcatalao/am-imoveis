import Link from 'next/link';

import { CardProperty } from '../../components/CardProperty'
import { InputSelect } from '../../components/InputSelect';
import { Filter } from '../../components/Filter';

import { GridLayout } from '../../styles/globals'

import { FiChevronRight } from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import {
    Container, Breadcrumb, Content, Results, Properties,
    Top, Right, Bot,
} from './styles'


export default function Listing() {
    return (
        <Container>
            <GridLayout>
                <Breadcrumb>
                    <Link href="/">Home</Link>
                    <FiChevronRight />
                    Listagem de Imóveis
                </Breadcrumb>

                <Content>
                    <Filter />

                    <Results>
                        <Top>
                            <h3>202 imóveis encontrados</h3>
                            <Right>
                                <span>Ordernar:</span>
                                <InputSelect placeholder="Mais recentes" value={undefined} onChange={undefined} />
                            </Right>
                        </Top>

                        <Properties>
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                            <CardProperty />
                        </Properties>

                        <Bot>
                            <li><AiOutlineArrowLeft /></li>
                            <li>1</li>
                            <li>2</li>
                            <li>...</li>
                            <li><AiOutlineArrowRight /></li>
                        </Bot>
                    </Results>
                </Content>
            </GridLayout>
        </Container>
    )
}