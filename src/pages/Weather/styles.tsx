import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISolNumProps {
    fontSize: string;
}
interface IToggleProps {
    status: string;
}
interface IPreviousSectionProps {
    status: string;
}
interface IDegreeProps {
    degrees: undefined | string;
}
interface IMainProps {
    bgImg: string;
}

export const Main = styled.main`
    padding: 150px 20px 20px 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0.7fr, 1fr));
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    background-image: url(${(props: IMainProps) => props.bgImg});
    background-size: cover;
`;
export const Section = styled.section`
    display: grid;
    background-color: rgba(71, 70, 70, 0.4);
    padding: 40px;
    transform: translateY(20%);
    @media only screen and (max-width: 1679px) {
        position: relative;
        transform: translateY(0);
    }
`;
export const Info = styled.div`
    padding: 20px;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: 1fr;
    gap: 30px;
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid #cf6a87;
    &:nth-child(4) {
        border-right: none;
    }
    @media only screen and (max-width: 1210px) {
        &:nth-child(3) {
            border-right: none;
        }
    }
    @media only screen and (max-width: 930px) {
        &:nth-child(2) {
            border-right: none;
        }
        &:nth-child(3) {
            border-right: 2px solid #cf6a87;
        }
    }
    @media only screen and (max-width: 655px) {
        padding-bottom: 20px;
        border-right: none;
        border-bottom: 2px solid #cf6a87;

        &:nth-child(3) {
            border-right: none;
            border-bottom: 2px solid #cf6a87;
        }
    }
`;

export const SolNum = styled.h1`
    font-size: ${(props: ISolNumProps) => props.fontSize};
    font-family: "Abel", sans-serif;
    font-weight: bold;
`;

export const Date = styled.h2`
    font-size: 25px;
    margin-top: 10px;
    opacity: 0.5;
    font-family: "Texturina", serif;
`;
export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    color: #3c6382;
    letter-spacing: 2px;
    font-family: "Raleway", sans-serif;
`;
export const BoxTitle = styled.h3`
    font-family: "Titillium Web", sans-serif;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.5px;
`;
export const Temperature = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DataText = styled.span`
    margin: 0 2px;
    font-family: "Abel", sans-serif;
`;
export const TempText = styled.div`
    font-family: "Titillium Web", sans-serif;
`;

export const Data = styled.div`
    margin-top: 10px;
    font-family: "Karla", sans-serif;
    font-size: 18px;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    &:nth-child(1) {
        margin-top: 20px;
    }
`;

export const Season = styled.h3`
    margin-top: 20px;
    font-size: 35px;
    opacity: 0.5;
    font-family: "Titillium Web", sans-serif;
    &::first-letter {
        text-transform: uppercase;
    }
`;
export const Text = styled.p`
    font-family: "Karla", sans-serif;
    line-height: 1.5;
`;
export const Wind = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
export const WindInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Compass = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: rgba(207, 202, 202, 0.4);
    display: grid;
    place-items: center;
`;
export const Degrees = styled.div`
    width: 18px;
    height: 45px;
    background-color: #53323b;
    clip-path: polygon(50% 0, 0% 100%, 100% 100%);
    transform: translateY(-50%)
        rotate(${(props: IDegreeProps) => props.degrees}deg);
    transform-origin: bottom center;
    transition: transform 2s ease;
`;

export const Desc = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px;
    @media only screen and (max-width: 927px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        gap: 30px;
    }
`;

export const Unit = styled.div`
    display: flex;
    align-items: flex-end;
    opacity: 0.5;
    transition: opacity 0.5s linear;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    @media only screen and (max-width: 927px) {
        justify-content: flex-end;
    }
`;
export const Toggle = styled.div`
    width: 50px;
    height: 25px;
    background-color: ${(props) =>
        props.status === "C" ? "#3c6382" : "rgba(207, 202, 202, 0.4)"};
    transition: background-color 2s ease;
    border: 2px solid white;
    border-radius: 30px;
    display: flex;
    align-items: center;

    &::after {
        content: "";
        background-color: rgba(207, 202, 202, 0.4);
        border-radius: 50%;
        height: 15px;
        width: 16px;
        margin: 2px;
        transform: translateX(
            ${(props: IToggleProps) => (props.status === "C" ? 25 : 0)}px
        );
        transition: transform 1s ease;
    }
`;

export const Label = styled.span`
    margin: 2px 5px;
    font-weight: bold;
    font-size: 20px;
    opacity: 0.7;
    font-family: "Karla", sans-serif;
    cursor: pointer;
`;

export const PreviousSection = styled.section`
    width: 100%;
    background-color: #ecf0f1;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    transform: translateY(${(props: IPreviousSectionProps) => props.status});
    transition: transform 1s ease;

    @media only screen and (max-width: 1679px) {
        position: relative;
        transform: translateY(0);
    }
`;

export const PrevText = styled.span`
    color: #cf6a87;
    font-size: 25px;
    font-family: "Karla", sans-serif;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #83495a;
    font-weight: bold;
    display: block;
    transform: translateX(
            ${(props: IPreviousSectionProps) =>
                props.status === "65%" ? "44%" : "0%"}
        )
        translateY(40%);
    @media only screen and (max-width: 652px) {
        position: relative;
        transform: translateX(30%);
    }
    @media only screen and (max-width: 497px) {
        position: relative;
        transform: translateX(25%);
    }
    @media only screen and (max-width: 369px) {
        position: relative;
        transform: translateX(20%);
    }
`;

export const Button = styled.button`
    width: 100px;
    height: 30px;
    font-size: 20px;
    position: absolute;
    background-color: #ecf0f1;
    outline: none;
    border: none;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    left: 50%;
    transform: translate(-50%, -165%);
    cursor: pointer;
    color: #a7a4a4;
    @media only screen and (max-width: 1679px) {
        display: none;
    }
`;
export const Icon = styled(FontAwesomeIcon)`
    transform: rotate(
            ${(props: IPreviousSectionProps) =>
                props.status === "65%" ? "0 deg" : "180deg"}
        )
        translateY(-5px);
    transition: transform 1s ease;
`;
