import React from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// import BackImg from "../../img/1.jpg";
import { ISolDataState } from "./WeatherContainer";
import Previous from "./Previous/PreviousPresenter";
import {
    Main,
    Section,
    Title,
    Info,
    Column,
    SolNum,
    Date,
    BoxTitle,
    Season,
    Temperature,
    Data,
    PreviousSection,
    TempText,
    DataText,
    Compass,
    Wind,
    Degrees,
    WindInfo,
    Text,
    Unit,
    Toggle,
    Button,
    PrevText,
    Desc,
    Icon,
    Label,
    Direction,
    DirectionText,
} from "./styles";

interface IWeatherProps {
    solData: ISolDataState;
    currentUnit: string;
    displayPrev: string;
    selectItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
    convertUnit: () => void;
    showPrev: () => void;
}

const WeatherPresenter: React.FunctionComponent<IWeatherProps> = (
    weatherProps
) => {
    const {
        solData,
        selectItem,
        currentUnit,
        convertUnit,
        displayPrev,
        showPrev,
    } = weatherProps;
    return (
        <Main bgImg="https://www.vaisala.com/sites/default/files/inline-images/LIFT-Mars-space-sun-800x450.jpg">
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
                                        <TempText> High :</TempText>

                                        <DataText>
                                            {solData.selected?.maxTemp}°
                                        </DataText>
                                        <DataText>{currentUnit}</DataText>
                                    </Data>
                                    <Data>
                                        <TempText> Low :</TempText>
                                        <DataText>
                                            {solData.selected?.minTemp}°
                                        </DataText>
                                        <DataText>{currentUnit}</DataText>
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
                                <Degrees
                                    degrees={
                                        solData?.selected?.windDirectionDegrees
                                    }
                                />
                                <DirectionText>
                                    <Direction>N</Direction>
                                    <Direction>E</Direction>
                                    <Direction>S</Direction>
                                    <Direction>W</Direction>
                                </DirectionText>
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
                        (temperature, wind, pressure) on the surface of Mars at
                        Elysium Planitia, a flat, smooth plain near Mars’
                        equator.
                        <br />
                        As more data from a particular sol is downlinked from
                        the spacecraft (sometimes several days later), these
                        values are recalculated, and consequently may change as
                        more data is received on Earth.
                        <br />
                        Nasa provides per-Sol summary data for each of the last
                        seven available Sols (Martian Days)
                        <br />
                        Please note that if there is no data to provide you,
                        example data will be appeared.
                    </Text>

                    <Unit>
                        <Label onClick={convertUnit}>°C</Label>
                        <Toggle onClick={convertUnit} status={currentUnit} />
                        <Label onClick={convertUnit}>°F</Label>
                    </Unit>
                </Desc>
            </Section>
            <PreviousSection status={displayPrev}>
                <Button onClick={showPrev}>
                    <Icon icon={faChevronUp} status={displayPrev} />
                </Button>

                <PrevText status={displayPrev}>PREVIOUS 7 DAYS</PrevText>
                <Previous previous={solData.previous} selectItem={selectItem} />
            </PreviousSection>
        </Main>
    );
};

export default WeatherPresenter;
