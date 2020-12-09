import React from "react";
import { ISolData } from "../index";

import { Previous, Item, More, PrevDate } from "./styles";
import { SolNum, Temperature, Data, TempText, DataText } from "../styles";

interface PreviousDataProps {
    previous: Array<ISolData>;
    selectItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PreviousData: React.FunctionComponent<PreviousDataProps> = (
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
                                        <DataText>{sol.maxTemp} °C</DataText>
                                    </Data>
                                    <Data>
                                        <TempText> Low :</TempText>
                                        <DataText> {sol.minTemp} °C</DataText>
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
