import React, { useEffect, useState } from "react";

import { getInsight } from "../../api";
import WeatherPresenter from "./WeatherPresenter";
import { db } from "../../firebase";

export interface ISolData {
    sol: string;
    maxTemp: undefined | number;
    minTemp: undefined | number;
    season: string;
    windSpeed: undefined | number;
    windDirectionDegrees: undefined | number;
    windDirectionCardinal: undefined | string;
    date: string;
}

export interface ISolDataState {
    selected: null | ISolData;
    previous: Array<ISolData>;
}

const Weather: () => JSX.Element = () => {
    const [currentUnit, setCurrentUnit] = useState<string>("F");
    const [displayPrev, setDisplayPrev] = useState<string>("65%");
    const [solData, setSolData] = useState<ISolDataState>({
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
            ? Math.round(selectedMaxTemp * 1.8 + 32)
            : undefined;
        const fahMinTemp = selectedMinTemp
            ? Math.round(selectedMinTemp * 1.8 + 32)
            : undefined;

        //* fahrenheit to celsius *//
        const celMaxTemp = selectedMaxTemp
            ? Math.round((selectedMaxTemp - 32) / 1.8)
            : undefined;
        const celMinTemp = selectedMinTemp
            ? Math.round((selectedMinTemp - 32) / 1.8)
            : undefined;

        //* convert *//
        if (currentUnit === "C") {
            setCurrentUnit("F");
            setSolData({
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
            selected: selected[0],
            previous: solData.previous,
        });
        setCurrentUnit("F");
    }

    async function getExample() {
        const exampleRef = db.collection("exampleData");
        const querySnapshot = await exampleRef.get();
        const exampleData: Array<ISolData> = [];
        querySnapshot.forEach(function (doc) {
            exampleData.push({
                sol: doc.data().sol,
                maxTemp: doc.data().maxTemp,
                minTemp: doc.data().minTemp,
                season: doc.data().season,
                windSpeed: doc.data().windSpeed,
                windDirectionDegrees: doc.data().windDirectionDegrees,
                windDirectionCardinal: doc.data().windDirectionCardinal,
                date: doc.data().date,
            });
        });
        setSolData({
            selected: exampleData[exampleData.length - 1],
            previous: exampleData,
        });
    }

    async function fetchData() {
        try {
            const res = await getInsight();
            const sol_keys = res.data.sol_keys;

            if (sol_keys.length > 0) {
                const result = [];
                for (let i = 0; i < sol_keys.length; i++) {
                    const sol = res.data[sol_keys[i]];
                    const date = new Date(sol.First_UTC).toLocaleDateString(
                        "en",
                        {
                            day: "numeric",
                            month: "long",
                        }
                    );

                    const solData = {
                        sol: sol_keys[i],
                        maxTemp: Math.round(sol.AT?.max),
                        minTemp: Math.round(sol.AT?.mn),
                        season: sol.Season,
                        windSpeed: Math.round(sol.HWS?.av),
                        windDirectionDegrees:
                            sol.WD?.most_common?.compass_degrees,
                        windDirectionCardinal:
                            sol.WD?.most_common?.compass_point,
                        date: date,
                    };
                    result.push(solData);
                }

                if (!result[0].maxTemp) {
                    getExample();
                }
                setSolData({
                    selected: result[result.length - 1],
                    previous: result,
                });
            } else {
                getExample();
            }
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
