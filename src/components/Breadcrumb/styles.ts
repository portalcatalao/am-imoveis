import styled from "styled-components";
import { GridLayout } from "../../styles/globals";

export const Container = styled.div`
    color: #fff;
    height: 120px;  
    margin-top: 72px;

    background-image: url("https://creativelayers.net/themes/findhouse-html/images/background/inner-pagebg.jpg");
    position: relative;

    ::before {
        background-color: rgb(29, 41, 62);
        bottom: 0;
        content: "";
        left: 0;
        opacity: 0.6;
        position: absolute;
        right: 0;
        top: 0;
    }
`

export const Content = styled(GridLayout)`
    display: flex;
    flex-direction: row!important;
    align-items: center;
    height: 100%;
    gap: 0.5rem;
        
    h1 {
        position: relative;
        font-weight: 600;
    }

    a {
        :hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    @media(max-width: 700px) {
        h1 {
            font-size: 28px;
        }
    }
`

export const Fixed = styled.div`
    display: flex;
    gap: 0.5rem;
`
