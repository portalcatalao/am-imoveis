import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import theme from "../../styles/theme";
import { Container, Content, Subtitle, Title } from "./styles";
import { HeaderPage } from '../../components/Breadcrumb'

export default function Services() {
    return (
        <Container>
            <HeaderPage title={"Serviços"} />
            <Content>
                <Title>Serviços que oferecemos</Title>
                <Subtitle>Conheça os serviços</Subtitle>
                <Swiper slidesPerView={"auto"} spaceBetween={24} style={{ width: 'fit-content !important', maxWidth: "100%", marginTop: 24 }}>
                    <SwiperSlide>

                    </SwiperSlide>
                </Swiper>
            </Content>
        </Container>
    )
}