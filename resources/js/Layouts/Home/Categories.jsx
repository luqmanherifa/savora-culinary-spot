import React from "react";
import bestSellers from "../../../../public/images/bestsellers.png";
import budgetMeal from "../../../../public/images/budgetmeal.png";
import healthyFood from "../../../../public/images/healthyfood.png";
import mostLoved from "../../../../public/images/mostloved.png";
import nearMe from "../../../../public/images/nearme.png";
import tfHours from "../../../../public/images/tfhours.png";

const Categories = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-7xl mx-auto mt-10">
                <h3 className="flex justify-center mb-4 text-2xl font-semibold text-gray-800">
                    Looking for inspo? Start here
                </h3>
                <div className="flex gap-5">
                    <a
                        href="/nearme"
                        className="p-6 pt-4 bg-white border border-gray-300 rounded-2xl hover:bg-lightgreen"
                    >
                        <img className="w-28 mx-auto" src={nearMe} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Near me
                        </p>
                    </a>
                    <a
                        href="/bestsellers"
                        className="p-6 pt-4 bg-white border border-gray-300 rounded-2xl hover:bg-lightgreen"
                    >
                        <img
                            className="w-28 mx-auto"
                            src={bestSellers}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Best sellers
                        </p>
                    </a>
                    <a
                        href="/budgetmeal"
                        className="p-6 pt-4 bg-white border border-gray-300 rounded-2xl hover:bg-lightgreen"
                    >
                        <img className="w-28 mx-auto" src={budgetMeal} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Budget meal
                        </p>
                    </a>
                    <a
                        href="/mostloved"
                        className="p-6 pt-4 bg-white border border-gray-300 rounded-2xl hover:bg-lightgreen"
                    >
                        <img className="w-28 mx-auto" src={mostLoved} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Most loved
                        </p>
                    </a>
                    <a
                        href="/tfHours"
                        className="p-6 pt-4 bg-white border border-gray-300 rounded-2xl hover:bg-lightgreen"
                    >
                        <img className="w-28 mx-auto" src={tfHours} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            24 hours
                        </p>
                    </a>
                    <a
                        href="/healthyfood"
                        className="p-6 pt-4 bg-white border border-gray-300 rounded-2xl hover:bg-lightgreen"
                    >
                        <img
                            className="w-28 mx-auto"
                            src={healthyFood}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Healthy food
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Categories;
