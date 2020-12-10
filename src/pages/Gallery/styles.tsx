import styled, { keyframes } from "styled-components";

interface BoxProps {
    num: number;
    id: string;
}

const PicSlide = keyframes`
    0% {
        transform:perspective(1000px) rotateX(0deg);
    }
    100% {
        transform:perspective(1000px) rotateX(360deg);
    }
`;

export const Main = styled.main`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    height: 100vh;
    @media only screen and (max-width: 1600px) {
        padding: 50px 20px 20px 20px;
    }
    @media only screen and (max-width: 1300px) {
        padding: 100px 20px 20px 20px;
    }
`;
export const Section = styled.section`
    width: 100%;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(-5%);
    &:nth-child(2) {
        transform: translateX(-10%);
        @media only screen and (max-width: 780px) {
            transform: translateX(0) translateY(60%);
        }
    }
    &:nth-child(3) {
        border: 1px solid #f7f1e3;
    }
    @media only screen and (max-width: 780px) {
        transform: translateX(0) translateY(20%);
    }
`;

export const Img = styled.img`
    width: 100%;
    box-shadow: 10px 10px 10px black, 0px 0px 10px black;
`;
export const SectionTitle = styled.div`
    font-family: "Texturina", serif;
    font-size: 22px;
    transform: translateY(-150%);
`;

export const Desc = styled.div`
    font-family: "Karla", sans-serif;
    margin-bottom: 20px;
    line-height: 1.3;
`;

export const Title = styled.div`
    font-family: "Karla", sans-serif;
    font-size: 18px;
    font-style: italic;
    margin-bottom: 20px;
`;
export const Date = styled.div`
    font-size: 15px;
    margin-top: 20px;
`;
export const More = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;
export const MoreSection = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    animation: ${PicSlide} 20s linear infinite;
    &:hover {
        animation-play-state: paused;
    }
`;

export const Box = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateX(calc(${(props: BoxProps) => props.num}*45deg))
        translateZ(300px);
`;
export const MoreImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    &:hover {
        border: 1px solid white;
    }
`;
