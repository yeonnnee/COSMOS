import React, { useEffect, useState } from "react";
import { nasaApi } from "../../api";

import GalleryPresenter from "./GalleryPresenter";

export interface Iapod {
    date: string;
    explanation: string;
    hdurl: string;
    title: string;
}

const Gallery: () => JSX.Element = () => {
    const [apod, setApod] = useState<Iapod>({
        date: "",
        explanation: "",
        hdurl: "",
        title: "",
    });
    const [pictures, setPictures] = useState<Array<Iapod>>([]);

    async function FetchData() {
        try {
            const res = await nasaApi.apod();
            const today = new Date();
            const date = today.getDate();
            const pictures = [];
            for (let i = 20; i < 30; i++) {
                if (i < 10) {
                    const res = await nasaApi.pic(`2020-11-0${i}`);
                    const pic = {
                        date: res.data.date,
                        explanation: res.data.explanation,
                        hdurl: res.data.hdurl,
                        title: res.data.title,
                    };
                    pictures.push(pic);
                } else {
                    const res = await nasaApi.pic(`2020-11-${i}`);
                    const pic = {
                        date: res.data.date,
                        explanation: res.data.explanation,
                        hdurl: res.data.hdurl,
                        title: res.data.title,
                    };
                    pictures.push(pic);
                }
            }

            setPictures(pictures);
            console.log(pictures);
            setApod({
                date: res.data.date,
                explanation: res.data.explanation,
                hdurl: res.data.hdurl,
                title: res.data.title,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);
    return <GalleryPresenter apod={apod} pictures={pictures} />;
};

export default Gallery;
