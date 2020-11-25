import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cover from "../pages/Cover";
import Home from "../pages/Home";
import Navigation from "./Navigation";
import SolarSystem from "../pages/SolarSystem";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact component={Cover} />
            <Route path="/today" exact component={Home} />
            <Route path="/SolarSystem" exact component={SolarSystem} />
        </BrowserRouter>
    );
};

export default Router;
