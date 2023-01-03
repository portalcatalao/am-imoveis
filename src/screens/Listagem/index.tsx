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
                    <Link href="/">Home</Link> / Listagem de Imóveis
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
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221114095148_60464.jpg"
                                forRent={true}
                                price="570.000,00"
                                title="Jardim Florença"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221230090034_52430.jpg"
                                forSell={true}
                                price="570.000,00"
                                title="Margon II"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221221152839_04820.jpg"
                                forSell={true}
                                price="570.000,00"
                                title="Nossa Senhora de Fátima"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221214120837_44704.jpg"
                                forSell={true}
                                price="570.000,00"
                                title="Nossa Senhora de Fátima"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221222154032_09984.jpg"
                                forSell={true}
                                price="570.000,00"
                                title="Ipanema"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221226133509_71837.jpg"
                                forRent={true}
                                price="570.000,00"
                                title="Jardim Florença"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221230090034_52430.jpg"
                                forSell={true}
                                price="570.000,00"
                                title="Margon II"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221221152839_04820.jpg"
                                forSell={true}
                                price="570.000,00"
                                title="Nossa Senhora de Fátima"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
                            <CardProperty
                                src="https://amimoveiscatalao.com.br/painel/upload/imoveis/20221214120837_44704.jpg"
                                forSell={true}
                                price="570.000,00"
                                title="Nossa Senhora de Fátima"
                                city="Catalão"
                                bed="3"
                                bath="2"
                                car="2"
                                area="138"
                            />
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