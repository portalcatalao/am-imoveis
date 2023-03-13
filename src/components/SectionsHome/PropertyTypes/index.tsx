import Image from 'next/image'
import { CardTypeProperty } from '../../Cards/PropertyType'
import { GridLayout, Section, Subtitle, Title } from '../../../styles/globals'
import { BackgroundSection, TypePropertyContent } from './styles'
import theme from '../../../styles/theme'
import BackgroundBanner from "../../../../public/images/banner-home2.jpg"

export function PropertyTypes() {
    return (
        <Section style={{ position: 'relative' }}>
            <BackgroundSection>
                <Image src={BackgroundBanner} alt={'banner'} />
            </BackgroundSection>

            <GridLayout p="3rem 0 2rem 0" ai="center">
                <Title cl={theme.colors.white} fz={"1.8rem"}>O que você está procurando?</Title>
                <Subtitle cl={theme.colors.white} fz={"1rem"} ai="center">Aqui você encontra o imóvel que você está procurando!</Subtitle>

                <TypePropertyContent style={{ boxShadow: "0px 0px 50px 0px rgba(19, 19, 28, 0.12)" }} >
                    <div>
                        <CardTypeProperty
                            icon="fa-casa"
                            title="Casa"
                            subtitle="Imóveis tradicionais que oferecem mais privacidade."
                            link="/imoveis/filter?propertyType=casa"
                        />
                        <CardTypeProperty
                            icon="fa-apartamento"
                            title="Apartamento"
                            subtitle="Imóveis que oferecem praticidade e segurança."
                            link="/imoveis/filter?propertyType=apartamento"
                        />
                    </div>
                    <div>
                        <CardTypeProperty
                            icon="fa-kitnet"
                            title="Condomínio"
                            subtitle="Imovéis que atendem suas necessidades."
                            link="/imoveis/filter?propertyType=casa_condominio"
                        />
                        <CardTypeProperty
                            icon="fa-fazenda"
                            title="Fazenda"
                            subtitle="Imóveis que te proporcionam contato direto com a natureza."
                            link="/imoveis/filter?propertyType=fazenda"
                        />
                    </div>
                </TypePropertyContent>
            </GridLayout>
        </Section>
    )
}