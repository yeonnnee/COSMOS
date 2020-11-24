import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cover from "../pages/Cover";
import Home from "../pages/Home";
import Navigation from "./Navigation";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact component={Cover} />
            <Route path="/today" exact component={Home} />
        </BrowserRouter>
    );
};

export default Router;
