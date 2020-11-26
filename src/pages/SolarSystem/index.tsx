import React, { useState } from "react";
import SolarSystemPresneter from "./SoloarSystemPresenter";

const SolarSystem: () => JSX.Element = () => {
    const [state, setState] = useState({
        currentGroup: 1,
        left: 0,
        max: false,
    });

    function getNextItem() {
        if (state.currentGroup < 5) {
            setState({
                currentGroup: state.currentGroup + 1,
                left: state.currentGroup * 350 + 20 * state.currentGroup,
                max: false,
            });
        } else {
            setState({
                currentGroup: state.currentGroup,
                left: state.left,
                max: true,
            });
        }
    }
    return <SolarSystemPresneter state={state} getNextItem={getNextItem} />;
};

export default SolarSystem;
