import styled from "styled-components";
import { GridLayout } from "../../styles/globals";

export const Container = styled.div`
    min-height: 70vh;
`
export const Content = styled(GridLayout)`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.gray_100};
    margin-bottom: 4px;
`
export const Subtitle = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.colors.gray_100};
    max-width: 70%;
    margin-bottom: 16px;
`