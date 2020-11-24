import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cover from "../pages/Cover";

const Router: () => JSX.Element = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Cover} />
        </BrowserRouter>
    );
};

export default Router;
