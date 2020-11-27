import React, { useEffect, useState } from "react";
import SolarSystemPresneter from "./SolarSystemPresenter";
import info from "../../data/planets.json";

const SolarSystem: () => JSX.Element = () => {
    const [state, setState] = useState({
        currentGroup: 1,
        left: 0,
        max: false,
        min: true,
    });
    const [data, setData] = useState([{ name: "", imgUrl: "", desc: "" }]);

    function getNextItem() {
        if (state.currentGroup < info.length - 3) {
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
    function fetchData() {
        const planetList = [];
        for (let i = 0; i < info.length; i++) {
            const planet = {
                name: info[i].name,
                imgUrl: info[i].imgUrl,
                desc: info[i].Desc,
            };
            planetList.push(planet);
        }
        setData(planetList);
    }

    useEffect(() => fetchData(), []);
    return (
        <SolarSystemPresneter
            state={state}
            getNextItem={getNextItem}
            getPrevItem={getPrevItem}
            data={data}
        />
    );
};

export default SolarSystem;
