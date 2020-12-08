import React from "react";
import { ICurrentUnit, ISolDataState } from ".";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Main = styled.main`
    padding: 150px 20px 20px 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0.7fr, 1fr));
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
`;
const Section = styled.section`
    display: grid;
    background-color: rgba(158, 156, 156, 0.4);
    padding: 20px;
`;
const Info = styled.div`
    padding: 20px;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: 1fr;
    gap: 30px;
`;
const Column = styled.div`
    font-family: "Raleway", sans-serif;
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

const SolNum = styled.h1`
    font-size: ${(props: ISolNum) => props.fontSize};
    font-family: "Raleway", sans-serif;
    font-weight: bold;
`;
const Date = styled.h2`
    font-size: 25px;
    margin-top: 10px;
    opacity: 0.5;
    font-family: "Texturina", serif;
`;
const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    color: #786fa6;
    letter-spacing: 2px;
    font-family: "Raleway", sans-serif;
`;
const BoxTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.5px;
`;
const Temperature = styled.div`
    display: flex;
    flex-direction: column;
`;
const TempUnit = styled.span``;
const Data = styled.span`
    margin-top: 20px;
    font-family: "Texturina", serif;
    opacity: 0.5;
`;
const Season = styled.h3`
    margin-top: 20px;
    font-size: 35px;
    opacity: 0.5;
`;
const Text = styled.p`
    font-family: "Karla", sans-serif;
    line-height: 1.5;
`;
const Wind = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
const WindInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Compass = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: rgba(207, 202, 202, 0.4);
    display: grid;
    place-items: center;
`;
const Degrees = styled.div`
    width: 18px;
    height: 45px;
    background-color: #53323b;
    clip-path: polygon(50% 0, 0% 100%, 100% 100%);
    transform: translateY(-50%) rotate(${(props: IDegree) => props.degrees}deg);
    transform-origin: bottom center;
    transition: transform 2s ease;
`;

const Desc = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px;
    @media only screen and (max-width: 927px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        gap: 30px;
    }
`;
const Unit = styled.div`
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
const Toggle = styled.div`
    width: 50px;
    height: 25px;
    background-color: ${(props) =>
        props.status === "°C" ? "#b65f78" : "rgba(207, 202, 202, 0.4)"};
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
            ${(props: IToggle) => (props.status === "°C" ? 25 : 0)}px
        );
        transition: transform 1s ease;
    }
`;

const Label = styled.span`
    margin: 2px 5px;
    font-weight: bold;
    font-size: 20px;
    opacity: 0.7;
    font-family: "Karla", sans-serif;
    cursor: pointer;
`;

const PreviousSection = styled.section`
    width: 100%;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    transform: translateY(65%);

    @media only screen and (max-width: 1679px) {
        position: relative;
    }
`;

const Previous = styled.section`
    padding: 20px;
    margin-top: 20px;
    display: ${(props: IPreviousStatus) => props.status};
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    place-items: center;
    text-align: center;
    color: black;
`;
const Item = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const PrevDate = styled.div`
    font-family: "Texturina", serif;
    margin-top: 5px;
`;

const PrevText = styled.span`
    color: #cf6a87;
    font-size: 25px;
    font-family: "Karla", sans-serif;
    margin: 15px auto;
`;

const Button = styled.button`
    width: 100px;
    height: 30px;
    font-size: 20px;
    position: absolute;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    left: 50%;
    transform: translate(-50%, -165%);
    cursor: pointer;
    color: #a7a4a4;
`;

const More = styled.button`
    outline: none;
    border: none;
    box-shadow: 1px 1px 3px black;
    /* background-color: #503c42; */
    color: black;
    padding: 2px 10px;
    transform: translateY(20px);
    border-radius: 3px;
    font-family: "Karla", sans-serif;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        box-shadow: 2px 2px 3px black;
    }
`;

interface ISolNum {
    fontSize: string;
}
interface IToggle {
    status: string;
}
interface IPreviousStatus {
    status: string;
}
interface IDegree {
    degrees: undefined | string;
}
interface IWeatherProps {
    solData: ISolDataState;
    currentUnit: ICurrentUnit;
    selectItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
    convertUnit: () => void;
}

const WeatherPresenter: React.FunctionComponent<IWeatherProps> = (
    weatherProps
) => {
    const { solData, selectItem, currentUnit, convertUnit } = weatherProps;
    return (
        <Main>
            {solData.loading ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <Section>
                        <Title>Latest Weather at Elysium Planitia</Title>
                        <Info>
                            <Column>
                                <SolNum fontSize="50px">
                                    Sol {solData.selected?.sol}
                                </SolNum>
                                <Date>{solData.selected?.date}</Date>
                            </Column>
                            <Column>
                                <BoxTitle>Season</BoxTitle>
                                <Season>{solData.selected?.season}</Season>
                            </Column>
                            <Column>
                                <BoxTitle>Temperature</BoxTitle>
                                <Temperature>
                                    {solData.selected?.maxTemp ? (
                                        <>
                                            <Data>
                                                High:
                                                {solData.selected.maxTemp}
                                                <TempUnit>
                                                    {currentUnit.checked}
                                                </TempUnit>
                                            </Data>
                                            <Data>
                                                Low:
                                                {solData.selected.minTemp}
                                                <TempUnit>
                                                    {currentUnit.checked}
                                                </TempUnit>
                                            </Data>
                                        </>
                                    ) : (
                                        <Data>No data</Data>
                                    )}
                                </Temperature>
                            </Column>
                            <Column>
                                <Wind>
                                    <Compass>
                                        <Degrees degrees="157"></Degrees>
                                    </Compass>
                                    <WindInfo>
                                        <BoxTitle>Wind</BoxTitle>

                                        {solData.selected?.windSpeed ? (
                                            <Data>
                                                {solData.selected.windSpeed}
                                                m/s
                                            </Data>
                                        ) : (
                                            <Data>No data</Data>
                                        )}
                                    </WindInfo>
                                </Wind>
                            </Column>
                        </Info>
                        <Desc>
                            <Text>
                                InSight is taking daily weather measurements
                                (temperature, wind, pressure) on the surface of
                                Mars at Elysium Planitia, a flat, smooth plain
                                near Mars’ equator.
                                <br />
                                It is possible to check previous 7 days record
                                from the latest one.
                            </Text>

                            <Unit>
                                <Label onClick={convertUnit}>°C</Label>
                                <Toggle
                                    onClick={convertUnit}
                                    status={currentUnit.checked}
                                ></Toggle>
                                <Label onClick={convertUnit}>°F</Label>
                            </Unit>
                        </Desc>
                    </Section>
                    <PreviousSection>
                        <Button>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </Button>
                        <PrevText>PREVIOUS 7 DAYS</PrevText>
                        <Previous status="grid">
                            {solData.previous.map((sol, index) => {
                                return (
                                    <Item key={index}>
                                        <SolNum fontSize="25px">
                                            Sol {sol.sol}
                                        </SolNum>
                                        <PrevDate>{sol.date}</PrevDate>
                                        <Temperature>
                                            {sol.maxTemp ? (
                                                <>
                                                    <Data>
                                                        High:
                                                        {sol.maxTemp}
                                                    </Data>
                                                    <Data>
                                                        Low:
                                                        {sol.minTemp}
                                                    </Data>
                                                </>
                                            ) : (
                                                <Data>No data</Data>
                                            )}
                                        </Temperature>
                                        <More id={sol.sol} onClick={selectItem}>
                                            MORE
                                        </More>
                                    </Item>
                                );
                            })}
                        </Previous>
                    </PreviousSection>
                </>
            )}
        </Main>
    );
};

export default WeatherPresenter;
