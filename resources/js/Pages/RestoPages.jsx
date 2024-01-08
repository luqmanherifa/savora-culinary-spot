import DataNotFound from "@/Components/DataNotFound";
import PaginationButton from "@/Components/PaginationButton";
import RestoCard from "@/Components/RestoCard";
import Footer from "@/Layouts/Home/Footer";
import Navbar from "@/Layouts/Home/Navbar";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import nullImg from "../../../public/images/null.png";
import restoImg from "../../../public/images/resto.png";

const RestoPages = ({ auth }) => {
    const [resto, setResto] = useState([]);
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
            .get(`/api/resto/all?page=${currentPage}`)
            .then((response) => {
                setResto(response.data.data);
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
            <Head title="Resto" />
            <Navbar auth={auth} restoColor="text-red-600" />
            <img src={restoImg} alt="" />
            <div className="mx-auto mt-8 min-h-screen max-w-xs lg:mt-8 lg:max-w-7xl">
                <div className="mb-3 mt-7">
                    <div className="flex justify-center">
                        <div className="mx-auto max-w-7xl">
                            <h3 className="mb-4 ml-10 text-3xl font-semibold text-gray-800">
                                Resto
                            </h3>
                            <div className="flex max-w-6xl flex-wrap justify-center gap-6">
                                {resto.length > 0 ? (
                                    resto.slice(0, 8).map((item) => (
                                        <div key={item.id}>
                                            <RestoCard
                                                name_resto={item.name_resto}
                                                slug_resto={item.slug_resto}
                                                cuisine_1_resto={
                                                    item.cuisine_1_resto
                                                }
                                                cuisine_2_resto={
                                                    item.cuisine_2_resto
                                                }
                                                cuisine_3_resto={
                                                    item.cuisine_3_resto
                                                }
                                                regency_resto={
                                                    item.regency_resto
                                                }
                                                city_resto={item.city_resto}
                                                star_resto={item.star_resto}
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

export default RestoPages;
