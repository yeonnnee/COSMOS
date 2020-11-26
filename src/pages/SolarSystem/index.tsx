import React, { useState } from "react";
import SolarSystemPresneter from "./SoloarSystemPresenter";

const SolarSystem: () => JSX.Element = () => {
    const [state, setState] = useState({
        currentGroup: 1,
        left: 0,
        max: false,
        min: true,
    });

    function getNextItem() {
        if (state.currentGroup < 5) {
            setState({
                currentGroup: state.currentGroup + 1,
                left: -state.currentGroup * 350 + -20 * state.currentGroup,
                max: false,
                min: false,
            });
        } else {
            setState({
                currentGroup: state.currentGroup,
                left: state.left,
                max: true,
                min: false,
            });
        }
    }
    function getPrevItem() {
        if (state.currentGroup === 1) {
            setState({
                currentGroup: state.currentGroup,
                left: state.left,
                max: false,
                min: true,
            });
        } else {
            setState({
                currentGroup: state.currentGroup - 1,
                left: state.left + 370,
                max: true,
                min: false,
            });
        }
    }
    console.log(state.currentGroup);
    return (
        <SolarSystemPresneter
            state={state}
            getNextItem={getNextItem}
            getPrevItem={getPrevItem}
        />
    );
};

export default SolarSystem;
