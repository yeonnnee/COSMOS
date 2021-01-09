import styled from "styled-components";
import { Link } from "react-router-dom";
interface IImageProps {
    bgImg: undefined | string;
}

export const Main = styled.main`
    width: 100%;
    padding: 20px;
    background-color: black;
    font-family: "Titillium Web", sans-serif;
`;

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-template-rows: 1fr;
    @media only screen and (max-width: 1050px) {
        grid-template-rows: 0.5fr;
    }
`;

export const Intro = styled.div`
    margin-top: 20%;
`;

export const IntroTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
export const SmallImg = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 20px;
    display: none;
    @media only screen and (max-width: 1050px) {
        display: block;
    }
`;

export const Name = styled.div`
    font-family: "Texturina", serif;
    font-size: 40px;
    color: #f1c40f;
`;
export const Desc = styled.div`
    font-family: "Karla", sans-serif;
    width: 100%;
    padding: 18px;
    line-height: 1.5;
    font-size: 18px;
    opacity: 0.7;
    transform: translateY(20px);
`;
export const More = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;
export const MoreText = styled.div`
    align-self: flex-start;
    transform: translateY(30px) translateX(20px);
    color: #f1c40f;
    font-family: "Titillium Web", sans-serif;
`;
export const PlanetName = styled.div`
    display: none;
    color: #5e5037;
`;
export const PlanetLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    width: 100%;
    transform: translateY(-35%);
    &:hover {
        transform: translateY(-40%);
    }
    &:hover ${PlanetName} {
        display: block;
    }
`;
export const Planets = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const MorePlanets = styled.img`
    width: 100%;
`;

export const Img = styled.div`
    width: 100%;
    background-image: url(${(props: IImageProps) => props.bgImg});
    background-size: cover;
    @media only screen and (max-width: 1050px) {
        display: none;
    }
`;
export const InfoSection = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    @media only screen and (max-width: 1162px) {
        position: relative;
        transform: translateY(-80%);
    }
    @media only screen and (max-width: 1146px) {
        transform: translateY(-70%);
    }
    @media only screen and (max-width: 1049px) {
        transform: translateY(-60%);
    }
    @media only screen and (max-width: 796px) {
        transform: translateY(-30%);
    }
`;
export const Info = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: 1fr;
    text-align: center;
    font-size: 20px;
    background-color: rgba(158, 156, 156, 0.4);
    color: white;
    border-radius: 20px;
    @media only screen and (max-width: 739px) {
        background-color: transparent;
    }
`;
export const Column = styled.div`
    padding: 0 5px;

    @media only screen and (max-width: 739px) {
        border-bottom: 1px solid;
        background-color: rgba(158, 156, 156, 0.4);
        &:first-child {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
        &:last-child {
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            border-bottom: none;
        }
    }
`;
export const Title = styled.div`
    font-family: "Texturina", serif;
    padding: 10px 0;
    border-bottom: 1px solid white;
    @media only screen and (max-width: 739px) {
        border: none;
    }
`;
export const Text = styled.div`
    font-size: 25px;
    padding: 25px 0;
`;
export const SmallText = styled.div`
    position: relative;
    top: -18px;
    opacity: 0.7;
`;
