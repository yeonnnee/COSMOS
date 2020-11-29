import React from "react";
import DetailPresenter from "./DetailPresenter";
import Data from "../../data/planets.json";

const Detail: () => JSX.Element = () => {
    const target = location.pathname.toString().split("/")[3];
    const result = Data.filter((list) => list.name === target);

    return <DetailPresenter planet={result} />;
};
export default Detail;
