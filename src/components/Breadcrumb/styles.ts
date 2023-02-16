import styled from "styled-components";

export const Container = styled.div`
    height: 140px;  
    position: initial!important;
    margin-top: 72px;
    background-image: url("https://creativelayers.net/themes/findhouse-html/images/background/inner-pagebg.jpg");
    display: flex;
    align-items: center;
    color: #fff;
    position: relative!important;

    h1 {
        position: relative;
        font-weight: 600;
    }

    p {
        position: relative;
    }

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

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`