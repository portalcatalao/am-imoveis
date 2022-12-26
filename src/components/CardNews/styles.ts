import styled from "styled-components";
import Link from 'next/link';

export const Container = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;

    width: 307px;
    height: 450px;
    border: 0.5px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.borders.main};
`

export const CardHeader = styled.div`
    width: 100%;
    margin-bottom: 10px;
`

export const Thumbnail = styled.div`
    height: 220px;
    position: relative;
    border-radius: ${({ theme }) => theme.borders.main} ${({ theme }) => theme.borders.main} 0 0;
    overflow: hidden;

    img {
        transition: .2s;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const CardBody = styled.div`
    width: 100%;
    padding: 10px 20px;
`

export const SubTitle = styled.h4`
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const Description = styled.p`
    font-size: 16px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`