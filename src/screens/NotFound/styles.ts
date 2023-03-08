import Link from "next/link";
import styled from "styled-components";
import { GridLayout } from "../../styles/globals";

export const Container = styled.div`
    min-height: 70vh;
    margin-top: 80px;
    padding: 2rem 0;
`
export const Content = styled(GridLayout)`
    display: flex;
    align-items: center;
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
export const Error = styled.span`
    font-size: 6rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.primary};
`
export const Button = styled(Link)`
    width: fit-content;
    height: 48px;
    border-radius: 6px;
    padding: 0 2rem;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({theme}) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.white};
`