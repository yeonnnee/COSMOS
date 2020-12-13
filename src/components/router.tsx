import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cover from "../pages/Cover/CoverContainer";
import Gallery from "../pages/Gallery/GalleryContainer";
import Navigation from "./Navigation";
import Planets from "../pages/Planets/PlanetsContainer";
import Detail from "../pages/Detail/DetailContainer";
import Weather from "../pages/Weather/WeatherContainer";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact component={Cover} />
            <Route path="/cosmos/gallery" exact component={Gallery} />
            <Route path="/cosmos/weather" exact component={Weather} />
            <Route path="/cosmos/planets" exact component={Planets} />
            <Route path="/cosmos/planets/:id" exact component={Detail} />
        </BrowserRouter>
    );
};

export default Router;
