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
                    <h3 className="mb-4 text-3xl font-semibold text-gray-800">
                        Resto
                    </h3>
                    {restoData && (
                        <div>
                            <img src={nullImg} alt="image" className="w-20" />
                            <h1>{restoData.name_resto}</h1>
                            <p>
                                {restoData.cuisine_1_resto}
                                {restoData.cuisine_2_resto
                                    ? `, ${restoData.cuisine_2_resto}`
                                    : null}
                                {restoData.cuisine_3_resto
                                    ? `, ${restoData.cuisine_3_resto}`
                                    : null}
                            </p>
                            <p>{restoData.star_resto}</p>
                            <p>{restoData.regency_resto}</p>
                            <p>{restoData.city_resto}</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RestoDetail;
