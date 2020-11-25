import React, { useRef, useState } from "react";
import SolarSystemPresneter from "./SoloarSystemPresenter";

const SolarSystem: () => JSX.Element = () => {
    const planets = [
        { id: 1, name: "SUN" },
        { id: 2, name: "MERCURY" },
        { id: 3, name: "EARTH" },
        { id: 4, name: "MARS" },
        { id: 5, name: "JUPITER" },
        { id: 6, name: "SATURN" },
        { id: 7, name: "URANUS" },
        { id: 8, name: "NEPTUNE" },
        { id: 9, name: "PLUTO" },
    ];
    const result = [...planets];
    const [listItem, setListItem] = useState(planets);
    const [state, setState] = useState({
        currentIndex: 1,
        ItemList: planets.length,
        left: 0,
    });

    function getNextItem() {
        setState({
            currentIndex: state.currentIndex + 1,
            ItemList: planets.length,
            left: state.currentIndex * 350 + 20 * state.currentIndex,
        });

        for (let i = 0; i < state.currentIndex; i++) {
            const newItem = { id: i + 10, name: planets[i].name };
            result.push(newItem);
            setListItem(result);
        }

        console.log("state", state);
        // console.log("result", result);
    }

    return (
        <SolarSystemPresneter
            state={state}
            getNextItem={getNextItem}
            planets={listItem}
        />
    );
};

export default SolarSystem;
