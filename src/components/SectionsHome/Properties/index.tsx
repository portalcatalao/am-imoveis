import { FiChevronRight } from 'react-icons/fi'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPropertyTitleCard, getUrl } from '../../../helpers/functions';
import { maskPrice } from '../../../helpers/mask';
import { GridLayout, Section, Subtitle, Title } from '../../../styles/globals'
import theme from '../../../styles/theme'
import { IProperty } from '../../../types/interfaces';
import { CardProperty } from '../../Cards/Property'
import { Container, Content, LinkButton, TopCard } from './styles'

interface Props {
    properties: IProperty[];
    title: string,
    p?: string,
    backgroundColor?: string
}

export function Properties({ properties, title, p, backgroundColor }: Props) {
    return (
        <Container>
            <Content>
                <TopCard>
                    <div>
                        <Title cl={theme.colors.gray_100} fz={"1.8rem"}>{title}</Title>
                        <Subtitle cl={theme.colors.gray_100} fz={"1rem"}>
                            Excelentes imóveis disponíveis para você conhecer
                            <LinkButton href="/imoveis/filter?">Ver todos<FiChevronRight /></LinkButton>
                        </Subtitle>
                    </div>
                </TopCard>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={18}
                    slidesPerView={'auto'}
                    navigation={true}
                >
                    {properties.map(property =>
                        <SwiperSlide>
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
                                area={property.totalArea}
                                id={property.id}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Content>
        </Container>
    )
}