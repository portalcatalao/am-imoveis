import styled from "styled-components";
import { GridLayout } from "../../styles/globals";

export const Container = styled.div`
    min-height: 70vh;
`
export const Content = styled(GridLayout)`
    padding: 2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
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
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};

    cursor: pointer;
`