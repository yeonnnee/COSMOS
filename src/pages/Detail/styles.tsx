import styled from "styled-components";
import { Link } from "react-router-dom";
interface IImageProps {
    bgImg: undefined | string;
}

export const Main = styled.main`
    width: 100%;
    height: 100%;
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
        grid-template-rows: 1fr 1fr;
    }
`;
export const More = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 110px;
`;
export const MoreText = styled.div`
    align-self: flex-start;
    transform: translateY(-40px) translateX(20px);
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
    height: 60%;
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
`;
export const Intro = styled.div`
    margin-top: 20%;
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
export const Info = styled.section`
    width: 97%;
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgba(158, 156, 156, 0.4);
    color: white;
    position: fixed;
    bottom: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 5px;
    @media only screen and (max-width: 1050px) {
        position: relative;
        margin-top: 50px;
    }
`;
export const Column = styled.div`
    width: 100%;
    padding: 0 10px;
`;
export const Title = styled.div`
    font-family: "Texturina", serif;
    text-align: center;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid white;
    font-size: 20px;
`;
export const Text = styled.div`
    width: 100%;
    text-align: center;
    font-size: 25px;
    padding: 25px;
`;
export const SmallText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 20px;
    position: relative;
    top: -18px;
    opacity: 0.7;
`;
