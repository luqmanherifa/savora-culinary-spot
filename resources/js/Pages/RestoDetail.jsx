import Footer from "@/Layouts/Home/Footer";
import Navbar from "@/Layouts/Home/Navbar";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import nullImg from "../../../public/images/null.png";

const RestoDetail = ({ auth, resto, slug_resto }) => {
    const [restoData, setRestoData] = useState(resto);

    useEffect(() => {
        axios
            .get(`/api/resto/${slug_resto}`)
            .then((response) => {
                setRestoData(response.data.data);
            })
            .catch((error) => {
                toast(`Terjadi kesalahan: ${error}`, {
                    type: "error",
                    theme: "light",
                });
            });
    }, [slug_resto]);

    return (
        <div>
            <Head title="Resto" />
            <Navbar auth={auth} restoColor="text-red-600" />
            <div className="mx-auto mt-8 min-h-screen max-w-7xl">
                <div className="mx-auto max-w-6xl">
                    {restoData && (
                        <div>
                            <div>
                                <div className="flex gap-4">
                                    <img
                                        src={nullImg}
                                        alt="image"
                                        className="w-28 rounded-xl object-cover"
                                    />
                                    <div className="w-[27rem]">
                                        <h1 className="line-clamp-2 h-[4.5rem] text-3xl font-semibold text-gray-800">
                                            {restoData.name_resto}
                                        </h1>
                                        <div className="flex gap-2">
                                            <svg
                                                className="w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                                fill="currentColor"
                                            >
                                                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                                            </svg>
                                            <p className="mt-1 text-lg text-gray-400">
                                                {restoData.cuisine_1_resto}
                                                {restoData.cuisine_2_resto
                                                    ? `, ${restoData.cuisine_2_resto}`
                                                    : null}
                                                {restoData.cuisine_3_resto
                                                    ? `, ${restoData.cuisine_3_resto}`
                                                    : null}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex gap-4 rounded-lg bg-gray-50 px-6 py-5 text-lg">
                                <div className="flex gap-2">
                                    <svg
                                        className="w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        fill="currentColor"
                                    >
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                    </svg>
                                    <p>{restoData.star_resto}</p>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        className="w-4 text-red-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        fill="currentColor"
                                    >
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                    <p>
                                        {restoData.regency_resto},{" "}
                                        {restoData.city_resto}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        className="w-5 text-green-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        fill="currentColor"
                                    >
                                        <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                                    </svg>
                                    <p>$$$$</p>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        className="w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                    >
                                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                    </svg>
                                    <p>+628123456789</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RestoDetail;
