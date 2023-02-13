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
    height: 100%;
    padding: 20px 0;
    
    img {
        border-radius: ${({ theme }) => theme.borders.main};
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`


export const Text2 = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    span {
        font-weight: 600;
        ::before {
            content: "";
            display: inline-block;
            width: 12px;
            height: 8px;
            margin-right: 4px;
            margin-bottom: 2px;
            background-color: ${({ theme }) => theme.colors.primary};
            border-radius:  ${({ theme }) => theme.borders.main};;
        }
    }

    ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
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
    display: flex;
    flex-direction: column;
    max-width: 750px;
`

export const Card = styled.div`
    margin: 10px 0;
    padding: 20px;
    border-radius: ${({ theme }) => theme.borders.main};
    background-color: #f9f9f9;

    h2 {
        font-size: 18px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 8px;

        ::before {
            content: "";
            display: block;
            width: 12px;
            height: 8px;
            margin-right: 4px;
            margin-bottom: 4px;
            background-color: ${({ theme }) => theme.colors.primary};
            border-radius:  ${({ theme }) => theme.borders.main};;
        }
    }

    p {
        color: ${({ theme }) => theme.colors.gray_200};
    }
`