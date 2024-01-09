import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CityDetail = ({ auth, city, slug_city }) => {
    const [cityData, setCityData] = useState(city);

    useEffect(() => {
        axios
            .get(`/api/city/${slug_city}`)
            .then((response) => {
                setCityData(response.data.data);
            })
            .catch((error) => {
                toast(`Terjadi kesalahan: ${error}`, {
                    type: "error",
                    theme: "light",
                });
            });
    }, [slug_city]);

    return (
        <div>
            <Head title="City" />
            <h1>City</h1>
        </div>
    );
};

export default CityDetail;
