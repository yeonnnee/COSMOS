import React, { useEffect, useState } from "react";
import { nasaApi } from "../../api";

import GalleryPresenter from "./GalleryPresenter";

interface Pic {
    date: string;
    explanation: string;
    hdurl: string;
    title: string;
}
export interface Iapod {
    loading: boolean;
    selected: Pic;
    pictures: Array<Pic>;
}

const Gallery: () => JSX.Element = () => {
    const [apod, setApod] = useState<Iapod>({
        loading: true,
        selected: { date: "", explanation: "", hdurl: "", title: "" },
        pictures: [],
    });

    async function FetchData() {
        try {
            const res = await nasaApi.apod();
            const pictures = [];
            for (let i = 20; i < 30; i++) {
                if (i < 10) {
                    const result = await nasaApi.pic(`2020-11-0${i}`);
                    const pic = {
                        date: result.data.date,
                        explanation: result.data.explanation,
                        hdurl: result.data.hdurl,
                        title: result.data.title,
                    };
                    pictures.push(pic);
                } else {
                    const result = await nasaApi.pic(`2020-11-${i}`);
                    const pic = {
                        date: result.data.date,
                        explanation: result.data.explanation,
                        hdurl: result.data.hdurl,
                        title: result.data.title,
                    };
                    pictures.push(pic);
                }
            }

            setApod({
                loading: false,
                selected: {
                    date: res.data.date,
                    explanation: res.data.explanation,
                    hdurl: res.data.hdurl,
                    title: res.data.title,
                },
                pictures: pictures,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);
    return <GalleryPresenter apod={apod} />;
};

export default Gallery;
