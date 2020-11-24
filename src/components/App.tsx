import React from "react";

import Router from "./router";
import GlobalStyles from "./globalstyles";

function App(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Router />
        </>
    );
}

export default App;
