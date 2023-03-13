import styled from "styled-components";
import { GridLayout } from "../../styles/globals";

export const Container = styled.div`
    min-height: 70vh;
`
export const Content = styled(GridLayout)`
    display: flex;
    flex-direction: row!important;
    padding: 2rem 1rem 4rem 0;
    justify-content: space-between;

    @media(max-width: 1320px) {
        padding: 2rem 1rem;
    }
`
export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_100};
    margin-bottom: 4px;
`
export const Subtitle = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray_100};
    max-width: 70%;
    margin-bottom: 16px;
`
export const Form = styled.div`
    width: 100%;
    max-width: 600px;
`
export const Column = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const Button = styled.button`
    width: fit-content;
    height: 48px;
    padding: 0 2rem;

    border: 0;
    border-radius: ${({ theme }) => theme.borders.main};
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};

    cursor: pointer;
`
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;

    iframe {
        border-radius: ${({ theme }) => theme.borders.main};
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 18px;

    a {
        display: flex;
        align-items: center;
        gap: 8px;

        :hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    @media(max-width: 720px) {
        flex-direction: column;
        padding: 2rem 0 1rem 0;
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`