import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cover from "../pages/Cover";
import Home from "../pages/Home";
import Navigation from "./Navigation";
import Planets from "../pages/Planets";
import Detail from "../pages/Detail";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact component={Cover} />
            <Route path="/today" exact component={Home} />
            <Route path="/planets" exact component={Planets} />
            <Route path="/planets/:id" exact component={Detail} />
        </BrowserRouter>
    );
};

export default Router;
