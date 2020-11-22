import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
        </BrowserRouter>
    );
};

export default Router;
