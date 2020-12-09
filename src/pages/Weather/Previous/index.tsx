import React from "react";
import { ISolData } from "../index";
import styled from "styled-components";

import { SolNum, Temperature, Data } from "../WeatherPresenter";

const Previous = styled.section`
    padding: 20px;
    margin-top: 20px;
    display: grid;
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
                                        High:
                                        {sol.maxTemp}
                                        °C
                                    </Data>
                                    <Data>
                                        Low:
                                        {sol.minTemp}
                                        °C
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
