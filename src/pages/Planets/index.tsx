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
    const [planets, setPlanets] = useState<Array<IPlanets>>([
        { id: 0, name: "", imgUrl: "", desc: "" },
    ]);

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
    return <PlanetsPresenter planets={planets} />;
};

export default Planets;
