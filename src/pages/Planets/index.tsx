import React, { useEffect, useState } from "react";
import PlanetsPresenter from "./PlanetsPresenter";
import info from "../../data/planets.json";

const Planets: () => JSX.Element = () => {
    const [state, setState] = useState({
        currentGroup: 1,
        left: 0,
        max: false,
        min: true,
    });
    const [data, setData] = useState([{ name: "", imgUrl: "", desc: "" }]);

    function getNextItem() {
        if (state.currentGroup === 1) {
            setState({
                currentGroup: state.currentGroup + 1,
                left: -state.currentGroup * 350 * 4 + -60,
                max: false,
                min: false,
            });
        } else if (state.currentGroup === 2) {
            setState({
                currentGroup: state.currentGroup + 1,
                left: state.left - 370,
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
        } else if (state.currentGroup === 2) {
            setState({
                currentGroup: state.currentGroup - 1,
                left: state.left + 370 * 4,
                max: true,
                min: false,
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
        <PlanetsPresenter
            state={state}
            getNextItem={getNextItem}
            getPrevItem={getPrevItem}
            data={data}
        />
    );
};

export default Planets;
