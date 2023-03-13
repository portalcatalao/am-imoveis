import styled from "styled-components";

export const Container = styled.div`
    background-color: #f9f9f9;
`

export const Title = styled.h1`
    width: 100%;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray_100};
`

export const Description = styled.p`
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.gray_200};
`

export const Background = styled.div`
    height: fit-content;
    padding: 20px 0;
    
    img {
        border-radius: ${({ theme }) => theme.borders.main};
        width: 100%;
        height: 77%;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    @media(max-width: 930px) {
        grid-template-columns: 1fr;
    }
`

export const Text2 = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    h2 {
        display: block;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 12px;
    }

    ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
    }

    li {
        color: ${({ theme }) => theme.colors.gray_100};
        background-color: #fff;
        padding: 20px;
        border-radius: ${({ theme }) => theme.borders.main};
    }
`

export const Text = styled.div`
    display: grid;
    flex-direction: column;
`

export const Card = styled.div`
    margin: 10px 0;
    padding: 20px;
    border-radius: ${({ theme }) => theme.borders.main};
    background-color: #f5f5f5;

    h2 {
        font-size: 18px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 8px;

        ::before {
            content: "";
            display: inline-block;
            width: 12px;
            height: 8px;
            margin-right: 4px;
            margin-bottom: 3px;
            background-color: ${({ theme }) => theme.colors.primary};
            border-radius:  ${({ theme }) => theme.borders.main};;
        }
    }

    p {
        color: ${({ theme }) => theme.colors.gray_200};
    }
`