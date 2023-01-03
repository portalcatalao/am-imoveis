import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 72px;
    padding: 2rem 0;
    background-color: #fafafa;

    @media(max-width: 720px) {
        padding-top: 0;
    }
`
export const Breadcrumb = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.colors.gray_200};

    a:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`
export const Content = styled.div`
    width: 100%;
    margin-top: 28px;
    
    display: grid;
    grid-template-columns: 350px 1fr;
    width: 100%;
    grid-gap: 1.2rem;

    @media (max-width: 1020px) {
        grid-template-columns: 1fr;
    }
`
export const Results = styled.div`
    h3 {
        font-size: 18px;
        color: #333;
        font-weight: 500;
    }
`
export const Top = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 1.2rem;
    align-items: center;
    
    background-color: #fff;
    padding: 8px 12px;
    margin-bottom: 1.2rem;
    border-radius: ${({ theme }) => theme.borders.main};
    border: 1px solid rgb(235, 235, 235);

    @media(max-width: 1175px) {
        grid-template-columns: 1.4fr 1fr;
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        row-gap: 16px;
        padding: 16px;
    }
`
export const Right = styled.span`
    display: flex;
    width: 100%;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
`
export const Properties = styled.div`
    display: flex;
    flex-flow: wrap;
    gap: 1.2rem;
    justify-content: space-between;
    width: 100%;

    a {
        flex-basis: 31.9%!important;
    }

    @media(max-width: 720px) {
        justify-content: center;

        a {
            
        }
    }

    @media(max-width: 1310px) {
        a {
            flex-basis: 48%!important;
        }
    }
`
export const Bot = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 1.2rem;

    li {
        width: 45px;
        height: 45px;
        background-color: #fff;
        
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: ${({ theme }) => theme.borders.main};
        border: 1px solid rgb(235, 235, 235);

        :nth-child(3) {
            background-color: #262937;
            color: #fff;
        }

        :first-child, :last-child {
            background: #e9e9e9;
        }

        :hover {
            cursor: pointer;
            background-color: #EC700F;
            color: #fff;
        }
    }
`