import React from "react";
import { ISolData } from "../WeatherContainer";

import { Previous, Item, More, PrevDate } from "./styles";
import { SolNum, Temperature, Data, TempText, DataText } from "../styles";

interface IPreviousDataProps {
    previous: Array<ISolData>;
    selectItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PreviousData: React.FunctionComponent<IPreviousDataProps> = (
    prevProps
) => {
    return (
        <Previous>
            {prevProps.previous.map((sol, index) => {
                return (
                    <Item key={index}>
                        <SolNum fontSize="25px">Sol {sol.sol}</SolNum>
                        <PrevDate>{sol.date}</PrevDate>
                        <Temperature>
                            {sol.maxTemp ? (
                                <>
                                    <Data>
                                        <TempText> High :</TempText>
                                        <DataText>{sol.maxTemp} °F</DataText>
                                    </Data>
                                    <Data>
                                        <TempText> Low :</TempText>
                                        <DataText> {sol.minTemp} °F</DataText>
                                    </Data>
                                </>
                            ) : (
                                <Data>No data</Data>
                            )}
                        </Temperature>
                        <More id={sol.sol} onClick={prevProps.selectItem}>
                            MORE
                        </More>
                    </Item>
                );
            })}
        </Previous>
    );
};

export default PreviousData;
