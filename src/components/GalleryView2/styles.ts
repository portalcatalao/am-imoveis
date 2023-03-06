import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000b0;
    z-index: 99998;

    display: flex;
    align-items: center;
`
export const Thumbnail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        object-fit: cover;
    }
`