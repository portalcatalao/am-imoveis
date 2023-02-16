import styled from "styled-components";

export const BackgroundSection = styled.div`
    height: 320px;
    width: 100%;

    position: absolute;
    overflow: hidden;
    z-index: -1;
    background: #222;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .5;
    }
`
export const TypePropertyContent = styled.div`
    background-color: #fff;
    border-radius: ${({ theme }) => theme.borders.main};
    display: flex;
    justify-content: center;
    
    div {
        display: flex;
    }

    @media (max-width: 720px) {
        padding: 0 12px 28px 12px;
        div {
            display: flex;
            flex-direction: column;
        }
    }
`