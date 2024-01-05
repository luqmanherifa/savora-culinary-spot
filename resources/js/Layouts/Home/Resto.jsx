import React from "react";
import bestSellers from "../../../../public/images/bestsellers.png";
import budgetMeal from "../../../../public/images/budgetmeal.png";
import healthyFood from "../../../../public/images/healthyfood.png";
import mostLoved from "../../../../public/images/mostloved.png";
import nearMe from "../../../../public/images/nearme.png";
import tfHours from "../../../../public/images/tfhours.png";

const Resto = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-12 max-w-7xl">
                <h3 className="mb-3 flex justify-center text-2xl font-semibold text-gray-800">
                    What’s good to eat around here?
                </h3>
                <p className="mx-auto mb-7 flex max-w-md justify-center text-center text-base font-normal text-gray-800">
                    Discover our collection of popular dishes, local favorites,
                    and best deals in your neighborhood.
                </p>
                <div className="flex gap-5">
                    <a
                        href="/"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img
                            className="mx-auto w-52"
                            src="https://picsum.photos/200/200"
                            alt=""
                        />
                        <p>Nasi Pecel Bu Hanni</p>
                        <p>Beverages, Sweets, Snacks</p>
                        <div className="flex gap-2">
                            <p>4.6</p>
                            <p>•</p>
                            <p>Yongsan, Seoul</p>
                        </div>
                    </a>
                    <a
                        href="/"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img
                            className="mx-auto w-52"
                            src="https://picsum.photos/200/200"
                            alt=""
                        />
                        <p>Nasi Pecel Bu Hanni</p>
                        <p>Beverages, Sweets, Snacks</p>
                        <div className="flex gap-2">
                            <p>4.6</p>
                            <p>•</p>
                            <p>Yongsan, Seoul</p>
                        </div>
                    </a>
                    <a
                        href="/"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img
                            className="mx-auto w-52"
                            src="https://picsum.photos/200/200"
                            alt=""
                        />
                        <p>Nasi Pecel Bu Hanni</p>
                        <p>Beverages, Sweets, Snacks</p>
                        <div className="flex gap-2">
                            <p>4.6</p>
                            <p>•</p>
                            <p>Yongsan, Seoul</p>
                        </div>
                    </a>
                    <a
                        href="/"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img
                            className="mx-auto w-52"
                            src="https://picsum.photos/200/200"
                            alt=""
                        />
                        <p>Nasi Pecel Bu Hanni</p>
                        <p>Beverages, Sweets, Snacks</p>
                        <div className="flex gap-2">
                            <p>4.6</p>
                            <p>•</p>
                            <p>Yongsan, Seoul</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resto;
