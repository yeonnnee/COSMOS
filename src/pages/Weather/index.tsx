import React, { useEffect, useState } from "react";

import { nasaApi } from "../../api";

import WeatherPresenter from "./WeatherPresenter";

export interface ISolData {
    sol: string;
    maxTemp: undefined | number;
    minTemp: undefined | number;
    season: string;
    windSpeed: undefined | number;
    windDirectionDegrees: undefined | number;
    windDirectionCardinal: undefined | number;
    date: string;
}
export interface ISolDataState {
    loading: boolean;
    selected: null | ISolData;
    previous: Array<ISolData>;
}

const Weather: () => JSX.Element = () => {
    const [currentUnit, setCurrentUnit] = useState<string>("C");
    const [displayPrev, setDisplayPrev] = useState<string>("65%");
    const [solData, setSolData] = useState<ISolDataState>({
        loading: true,
        selected: null,
        previous: [],
    });

    function showPrev() {
        if (displayPrev === "65%") {
            setDisplayPrev("0%");
        }
        if (displayPrev === "0%") {
            setDisplayPrev("65%");
        }
    }

    function convertUnit() {
        const selectedMaxTemp = solData.selected?.maxTemp;
        const selectedMinTemp = solData.selected?.minTemp;

        //* celsius to Fah *//
        const fahMaxTemp = selectedMaxTemp
            ? selectedMaxTemp * 1.8 + 32
            : undefined;
        const fahMinTemp = selectedMinTemp
            ? selectedMinTemp * 1.8 + 32
            : undefined;

        //* fahrenheit to celsius *//
        const celMaxTemp = selectedMaxTemp
            ? (selectedMaxTemp - 32) / 1.8
            : undefined;
        const celMinTemp = selectedMinTemp
            ? (selectedMinTemp - 32) / 1.8
            : undefined;

        //* convert *//
        if (currentUnit === "C") {
            setCurrentUnit("F");
            setSolData({
                loading: false,
                selected: solData.selected
                    ? {
                          ...solData.selected,
                          maxTemp: fahMaxTemp,
                          minTemp: fahMinTemp,
                      }
                    : null,
                previous: solData.previous,
            });
        }
        if (currentUnit === "F") {
            setCurrentUnit("C");
            setSolData({
                loading: false,
                selected: solData.selected
                    ? {
                          ...solData.selected,
                          maxTemp: celMaxTemp,
                          minTemp: celMinTemp,
                      }
                    : null,
                previous: solData.previous,
            });
        }
    }
    function selecteItem(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.currentTarget.id;
        const selected = solData.previous.filter(
            (sol) => sol.sol == `${target}`
        );
        setSolData({
            loading: false,
            selected: selected[0],
            previous: solData.previous,
        });
    }
    async function fetchData() {
        try {
            const res = await nasaApi.insight();
            const sol_keys = res.data.sol_keys;

            const result = [];
            for (let i = 0; i < sol_keys.length; i++) {
                const sol = res.data[sol_keys[i]];
                const date = new Date(sol.First_UTC).toLocaleDateString("en", {
                    day: "numeric",
                    month: "long",
                });

                const solData = {
                    sol: sol_keys[i],
                    maxTemp: Math.round(sol.AT?.mx),
                    minTemp: Math.round(sol.AT?.mn),
                    season: sol.Season,
                    windSpeed: Math.round(sol.HWS?.av),
                    windDirectionDegrees: sol.WD?.most_common?.compass_degrees,
                    windDirectionCardinal: sol.WD?.most_common?.compass_point,
                    date: date,
                };
                result.push(solData);
            }
            setSolData({
                loading: false,
                selected: result[result.length - 1],
                previous: result,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <WeatherPresenter
            solData={solData}
            selectItem={selecteItem}
            convertUnit={convertUnit}
            currentUnit={currentUnit}
            displayPrev={displayPrev}
            showPrev={showPrev}
        />
    );
};

export default Weather;
