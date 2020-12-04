import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";

import { db } from "../../firebase";

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

    const getPlanet = async () => {
        try {
            const target = location.pathname.toString().split("/")[3];

            const palnetRef = db.collection("planets").doc(`${target}`);
            const doc = await palnetRef.get();

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
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPlanet();
    }, []);

    return <DetailPresenter planet={planet} />;
};
export default Detail;
