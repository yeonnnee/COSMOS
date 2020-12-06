import React from "react";
import { ISolData } from ".";

interface IWeatherProps {
    solData: Array<ISolData>;
}

const WeatherPresenter: React.FunctionComponent<IWeatherProps> = (
    weatherProps
) => {
    const { solData } = weatherProps;
    return <h1>weather</h1>;
};

export default WeatherPresenter;
