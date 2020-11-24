import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cover from "../pages/Cover";
import Navigation from "./Navigation";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact component={Cover} />
        </BrowserRouter>
    );
};

export default Router;
