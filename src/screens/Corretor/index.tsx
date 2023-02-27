import Image from 'next/image'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardProperty } from '../../components/Cards/Property'
import { InputSelect } from '../../components/Forms/InputSelect'
import { getUrl } from '../../helpers/functions'
import { maskPrice } from '../../helpers/mask'
import { GridLayout } from '../../styles/globals'
import { Divisor, TitleDescription } from '../Propriedade/styles'
import { Contact, ContactAgent, Cards, Container, Content, LinkButton, Email, Properties, Right, SendMessage, TextAgent, Top } from './styles'


export function PropertiesBroker({ properties, owner, total }) {
    return (
        <Container>
            <GridLayout p="2rem 0rem">
                <Content>
                    <Contact>
                        <ContactAgent>
                            <TextAgent>
                                <h4>{owner?.name}</h4>
                                <span>{owner?.cellPhone}</span>
                                <Email>{owner?.email}</Email>
                            </TextAgent>
                            <Image
                                src={getUrl(owner?.avatar)}
                                alt=""
                                width={160}
                                height={160}
                            />
                        </ContactAgent>
                        <Divisor></Divisor>
                        <SendMessage>
                            <LinkButton href="#" fill={true}>Entrar em contato</LinkButton>
                            <LinkButton href="#">Agendar visita</LinkButton>
                        </SendMessage>
                    </Contact>

                    <Properties>
                        <Top>
                            {total > 1 || total == 0 && <h3>{total} imóveis encontrados</h3>}
                            {total == 1 && <h3>{total} imóvel encontrado</h3>}
                            <Right>
                                <span>Ordernar:</span>
                                <InputSelect placeholder="Mais recentes" value={undefined} onChange={undefined} />
                            </Right>
                        </Top>

                        <Cards>
                            {properties.map(property =>
                                <CardProperty
                                    src={getUrl(property.thumbnail)}
                                    forSell={property.adType === 'venda'}
                                    forRent={property.adType === 'aluguel'}
                                    price={maskPrice(property.value)}
                                    title={property.address.district}
                                    city={property.type.charAt(0).toUpperCase() + property.type.slice(1) + ' em ' + property.address.city}
                                    bed={property.numberRooms}
                                    bath={property.numberBathrooms}
                                    car={property.numberGarages}
                                    area={property.area}
                                    id={property.id}
                                />
                            )}
                        </Cards>
                    </Properties>
                </Content>
            </GridLayout>
        </Container>
    )
}