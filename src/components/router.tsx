import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cover from "../pages/Cover";
import Gallery from "../pages/Gallery";
import Navigation from "./Navigation";
import Planets from "../pages/Planets";
import Detail from "../pages/Detail";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact component={Cover} />
            <Route path="/cosmos/gallery" exact component={Gallery} />
            <Route path="/cosmos/planets" exact component={Planets} />
            <Route path="/cosmos/planets/:id" exact component={Detail} />
        </BrowserRouter>
    );
};

export default Router;
