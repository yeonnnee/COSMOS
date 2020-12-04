import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import PlanetsPresenter from "./PlanetsPresenter";

export interface IPlanets {
    id: number;
    name: string;
    imgUrl: string;
    desc: string;
}

const Planets: () => JSX.Element = () => {
    const [state, setState] = useState({
        currentGroup: 1,
        left: 0,
        max: false,
        min: true,
    });

    const [planets, setPlanets] = useState<Array<IPlanets>>([
        { id: 0, name: "", imgUrl: "", desc: "" },
    ]);

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

    async function fetchData() {
        try {
            const res = await db.collection("planets").get();
            const data: Array<IPlanets> = [];
            res.forEach((document) =>
                data.push({
                    id: document.data().id,
                    name: document.data().name,
                    desc: document.data().desc,
                    imgUrl: document.data().imgUrl,
                })
            );

            data.sort(function (a, b) {
                const one = a.id;
                const next = b.id;

                return one - next;
            });
            setPlanets(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <PlanetsPresenter
            state={state}
            getNextItem={getNextItem}
            getPrevItem={getPrevItem}
            planets={planets}
        />
    );
};

export default Planets;
