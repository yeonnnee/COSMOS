import React, { useEffect, useState } from "react";
import { nasaApi } from "../../api";

import WeatherPresenter from "./WeatherPresenter";

export interface ISolData {
    sol: string;
    maxTemp: undefined | string;
    minTemp: undefined | string;
    season: string;
    windSpeed: undefined | string;
    windDirectionDegrees: undefined | string;
    windDirectionCardinal: undefined | string;
    date: Date;
}

const Weather: () => JSX.Element = () => {
    const [solData, setSolData] = useState<Array<ISolData>>([]);
    async function fetchData() {
        try {
            const res = await nasaApi.insight();
            const sol_keys = res.data.sol_keys;

            const result = [];
            for (let i = 0; i < sol_keys.length; i++) {
                const sol = res.data[sol_keys[i]];
                const solData = {
                    sol: sol_keys[i],
                    maxTemp: sol.AT?.mx,
                    minTemp: sol.AT?.mn,
                    season: sol.Season,
                    windSpeed: sol.HWS?.av,
                    windDirectionDegrees: sol.WD?.most_common?.compass_degrees,
                    windDirectionCardinal: sol.WD?.most_common?.compass_point,
                    date: new Date(sol.First_UTC),
                };
                result.push(solData);
            }
            setSolData(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return <WeatherPresenter solData={solData} />;
};

export default Weather;
