import React, { useEffect, useState } from "react";
import { nasaApi } from "../../api";

import WeatherPresenter from "./WeatherPresenter";

interface ISolData {
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
    const [solData, setSolData] = useState<ISolDataState>({
        loading: true,
        selected: null,
        previous: [],
    });

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
    console.log(solData);

    useEffect(() => {
        fetchData();
    }, []);
    return <WeatherPresenter solData={solData} />;
};

export default Weather;
