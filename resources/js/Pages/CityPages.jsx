import CityCard from "@/Components/CityCard";
import DataNotFound from "@/Components/DataNotFound";
import PaginationButton from "@/Components/PaginationButton";
import Footer from "@/Layouts/Home/Footer";
import Navbar from "@/Layouts/Home/Navbar";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import nullImg from "../../../public/images/null.png";
import cityImg from "../../../public/images/pagescity.png";

const CityPages = ({ auth }) => {
    const [city, setCity] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === lastPage;

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < lastPage) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
        }
    };

    const handleFirstPage = () => {
        if (currentPage > 1) {
            setCurrentPage(1);
        }
    };

    const handleLastPage = () => {
        if (lastPage > 1) {
            setCurrentPage(lastPage);
        }
    };

    const fetchData = () => {
        axios
            .get(`/api/city/all?page=${currentPage}`)
            .then((response) => {
                setCity(response.data.data);
                setLastPage(response.data.last_page);
            })
            .catch((error) => {
                toast(`Terjadi kesalahan: ${error}`, {
                    type: "error",
                    theme: "light",
                });
            });
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    return (
        <div>
            <Head title="City" />
            <Navbar auth={auth} cityColor="text-red-600" />
            <img src={cityImg} alt="image" className="w-full" />
            <div className="mx-auto mt-8 min-h-screen max-w-7xl">
                <div className="mb-3 mt-7">
                    <div className="flex justify-center">
                        <div className="mx-auto max-w-7xl">
                            <h3 className="mb-4 ml-10 text-3xl font-semibold text-gray-800">
                                City
                            </h3>
                            <div className="flex max-w-6xl flex-wrap justify-center gap-6">
                                {city.length > 0 ? (
                                    city.map((item) => (
                                        <div key={item.id}>
                                            <CityCard
                                                name_city={item.name_city}
                                                slug_city={item.slug_city}
                                                cuisine_1_city={
                                                    item.cuisine_1_city
                                                }
                                                cuisine_2_city={
                                                    item.cuisine_2_city
                                                }
                                                cuisine_3_city={
                                                    item.cuisine_3_city
                                                }
                                                regency_city={item.regency_city}
                                                city_city={item.city_city}
                                                star_city={item.star_city}
                                                nullImg={nullImg}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <DataNotFound />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <PaginationButton
                        currentPage={currentPage}
                        lastPage={lastPage}
                        isFirstPage={isFirstPage}
                        isLastPage={isLastPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        handleFirstPage={handleFirstPage}
                        handleLastPage={handleLastPage}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CityPages;
