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
    width: 600px;
    height: 100%;
    padding: 20px 0;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: ${({ theme }) => theme.borders.main};
    }
`

export const Content = styled.div`
    display: flex;
    gap: 20px;
`


export const Text2 = styled.ul`
    list-style-type: none;
    width: 750px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    span {
        font-weight: 600;
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
    background-color: #fafafa;

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