import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cover from "../pages/Cover";
import Gallery from "../pages/Gallery";
import Navigation from "./Navigation";
import Planets from "../pages/Planets";
import Detail from "../pages/Detail";
import Tickets from "../pages/Tickets";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact component={Cover} />
            <Route path="/cosmos/gallery" exact component={Gallery} />
            <Route path="/cosmos/planets" exact component={Planets} />
            <Route path="/cosmos/planets/:id" exact component={Detail} />
            <Route path="/cosmos/buyTicket" exact component={Tickets} />
        </BrowserRouter>
    );
};

export default Router;
