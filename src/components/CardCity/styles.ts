import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    border-radius: ${({theme}) => theme.borders.border_p};
    overflow: hidden;
    
    display: flex;
    transition: .3s;
    position: relative;

    :hover {
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(51, 51, 51, .08);
    }
`
export const Header = styled.div`
    width: 100%;
    height: 150px;
    position: absolute;
    z-index: -1;
`
export const Body = styled.div`
    flex: 1;
    background: linear-gradient(90deg, rgba(51, 51, 51, 0.7) 0%, rgba(0, 0, 0, 0.8) 100%);
    border-radius: ${({theme}) => theme.borders.border_m};
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Thumbnail = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Title = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.white};
`
export const Subtitle = styled.span`
    font-size: .875rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.white};
`
