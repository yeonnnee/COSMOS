import React from "react";
import { ISolDataState } from ".";
import styled from "styled-components";

const Main = styled.main`
    padding: 150px 20px 20px 20px;
    width: 100%;
    height: 100vh;
    display: grid;
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

const SolText = styled.h1`
    font-size: 50px;
    font-family: "Karla", sans-serif;
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
const Desc = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    @media only screen and (max-width: 927px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        gap: 30px;
    }
`;
const Unit = styled.div`
    display: flex;
`;
const Toggle = styled.div`
    width: 45px;
    height: 20px;
    background-color: rgba(185, 182, 182, 0.4);
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Controller = styled.div`
    width: 17px;
    height: 16px;
    margin: 2px;
    border-radius: 8px;
    background-color: rgba(231, 228, 228, 0.4);
`;
const Label = styled.label`
    margin: 0 5px;
`;
const Radio = styled.input`
    display: none;
`;

interface IWeatherProps {
    solData: ISolDataState;
}

const WeatherPresenter: React.FunctionComponent<IWeatherProps> = (
    weatherProps
) => {
    const { solData } = weatherProps;
    const currentIndex = solData.sol.length - 1;
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
                                <SolText>
                                    Sol {solData.sol[currentIndex].sol}
                                </SolText>
                                <Date>{solData.sol[currentIndex].date}</Date>
                            </Column>
                            <Column>
                                <BoxTitle>Season</BoxTitle>
                                <Season>
                                    {solData.sol[currentIndex].season}
                                </Season>
                            </Column>
                            <Column>
                                <BoxTitle>Temperature</BoxTitle>
                                <Temperature>
                                    <Data>
                                        High:{solData.sol[currentIndex].maxTemp}
                                    </Data>
                                    <Data>
                                        Low:{solData.sol[currentIndex].minTemp}
                                    </Data>
                                </Temperature>
                            </Column>
                            <Column>
                                <BoxTitle>Wind</BoxTitle>
                                <div>
                                    <div></div>
                                </div>
                                <Data>
                                    {solData.sol[currentIndex].windSpeed} m/s
                                </Data>
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
                                <Label htmlFor="cel">°C</Label>
                                <Radio type="radio" id="cel" checked></Radio>
                                <Toggle>
                                    <Controller></Controller>
                                </Toggle>
                                <Label htmlFor="fah">°F</Label>
                                <Radio type="radio" id="fah"></Radio>
                            </Unit>
                        </Desc>
                    </Section>
                    <section>
                        <button>
                            <span>&#8593;</span>
                        </button>
                        <h2>PREVIOUS 7 DAYS</h2>
                    </section>
                    <section>
                        <div>
                            <span>num</span>
                            <span>date</span>
                            <span>high</span>
                            <span>low</span>
                            <button>MORE INFO</button>
                        </div>
                    </section>
                </>
            )}
        </Main>
    );
};

export default WeatherPresenter;
