import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 72px;
    padding: 2rem 1.5rem;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.5rem;
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const ButtonIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 6px;

    width: 32px;
    height: 32px;

    color: ${({theme}) => theme.colors.gray_200};
    background: ${({theme}) => theme.colors.gray_500};
    cursor: pointer;
    transition: all .3s;

    :hover {
        color: ${({theme}) => theme.colors.white};
        background: ${({theme}) => theme.colors.primary};
    }
`
export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_100};
    margin-bottom: 8px;
`
export const Price = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray_100};
`
export const Subtitle = styled.h5`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_100};
`
export const Gallery = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 35% ;
    grid-template-rows: 1fr;
`
export const Thumbnail = styled.div`
    width: 100%;
    height: 100%;
    background: #333;

    border-radius: 6px;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Thumbs = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`