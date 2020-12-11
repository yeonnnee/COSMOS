import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";

import { db } from "../../firebase";

export interface IPlanets {
    id: number;
    name: string;
    imgUrl: string;
}
export interface IDiameter {
    equatorialDiameter: string;
    polarDiameter: string;
}
export interface IPlanet {
    name?: string;
    imgUrl?: string;
    desc?: string;
    detail?: string;
    mass?: string;
    diameter?: string | IDiameter;
    orbitPeriod?: string;
    lengthOfDay?: string;
    rotationPeriod?: string;
    gravity?: string;
    surfaceTemperature?: string;
}

const Detail: () => JSX.Element = () => {
    const [planet, setPlanet] = useState<IPlanet>();
    const [planets, setPlanets] = useState<Array<IPlanets>>([]);
    const [selected, setSelected] = useState<string>("");

    function updatePlanet(e: React.MouseEvent) {
        setSelected(e.currentTarget?.id);
    }

    async function getPlanet() {
        try {
            const target = location.pathname.toString().split("/")[3];

            const collection = db.collection("planets");
            const palnetRef = collection.doc(`${target}`);

            const res = await collection.get();
            const doc = await palnetRef.get();

            // 선택된 행성
            const result = doc?.data();
            if (result) {
                setPlanet({
                    name: result.name,
                    detail: result.detail,
                    imgUrl: result.imgUrl,
                    orbitPeriod: result.orbitPeriod,
                    lengthOfDay: result.lengthOfDay,
                    rotationPeriod: result.rotationPeriod,
                    surfaceTemperature: result.surfaceTemperature,
                    gravity: result.gravity,
                });
                setSelected(result.name);
            }

            // 전체 행성
            const planets: Array<IPlanets> = [];

            res.forEach((document) => {
                if (document.data().name !== selected) {
                    planets.push({
                        id: document.data().id,
                        name: document.data().name,
                        imgUrl: document.data().imgUrl,
                    });
                }
            });

            planets.sort(function (a, b) {
                const one = a.id;
                const next = b.id;

                return one - next;
            });
            setPlanets(planets);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPlanet();
    }, [selected]);

    return (
        <DetailPresenter
            planet={planet}
            planets={planets}
            updatePlanet={updatePlanet}
        />
    );
};
export default Detail;
