import styled from "styled-components";
import Link from 'next/link';

export const Container = styled(Link)`
    position: relative;
    display: flex;
    max-width: 460px;
    min-width: 280px;
    flex-flow: wrap;
    height: 360px;
    color: #fff;
    border: 0.5px solid #ebebeb;
    border-radius: ${({ theme }) => theme.borders.main};
    background: ${({ theme }) => theme.colors.white};
    flex-grow: 1;     
    flex-shrink: 1; 
    
    img {
        transition: transform .3s
    }

    :hover {
        img {
            transform: scale(1.08);
        }
    }
`

export const CardHeader = styled.div`
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    gap: 3px;

    width: 100%;
    padding: 20px;
    border-radius: ${({ theme }) => theme.borders.main};
`

export const Category = styled.div`
    padding: 3px 8px;

    font-size: 12px;
    text-align: center;

    background-color: #262937;
    border-radius: ${({ theme }) => theme.borders.main};
`

export const TagPrice = styled.div`
    width: 100%;
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 18px;
`

export const Thumbnail = styled.div`
    position: absolute;
    display: flex;

    width: 100%;
    height: 100%;

    overflow: hidden;
    border-radius: ${({ theme }) => theme.borders.main};

    img {
        object-fit: cover;
    }
`

export const Mask = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, rgba(38, 38, 38, 0) 45%, rgba(38, 38, 38, 0.8) 80%, rgba(38, 38, 38, 0.9) 100%);
`

export const CardBody = styled.div`
    position: absolute;
    bottom: 0;

    width: 100%;
    padding: 20px;
`

export const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
`

export const Address = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
`

export const Resume = styled.ul`
    margin-top: 10px;
    max-width: 260px;
    display: flex;
    list-style-type: none;
    font-size: 14px;
    justify-content: space-between;

    svg {
        width: 18px;
        height: 18px;
    }

    li {
        display: flex;
        gap: 8px;
        align-items: center;

        :last-child {
            font-size: 16px;
        }
    }
`