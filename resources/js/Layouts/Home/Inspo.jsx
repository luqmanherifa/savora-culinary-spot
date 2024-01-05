import React from "react";
import bestSellers from "../../../../public/images/bestsellers.png";
import budgetMeal from "../../../../public/images/budgetmeal.png";
import healthyFood from "../../../../public/images/healthyfood.png";
import mostLoved from "../../../../public/images/mostloved.png";
import nearMe from "../../../../public/images/nearme.png";
import tfHours from "../../../../public/images/tfhours.png";

const Inspo = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-16 max-w-7xl">
                <h3 className="mb-7 flex justify-center text-2xl font-semibold text-gray-800">
                    Looking for inspo? Start here
                </h3>
                <div className="flex max-w-[67rem] flex-wrap gap-5">
                    <a
                        href="/nearme"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img className="mx-auto w-28" src={nearMe} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Near me
                        </p>
                    </a>
                    <a
                        href="/bestsellers"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img
                            className="mx-auto w-28"
                            src={bestSellers}
                            alt=""
                        />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Best sellers
                        </p>
                    </a>
                    <a
                        href="/budgetmeal"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img className="mx-auto w-28" src={budgetMeal} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Budget meal
                        </p>
                    </a>
                    <a
                        href="/mostloved"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img className="mx-auto w-28" src={mostLoved} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Most loved
                        </p>
                    </a>
                    <a
                        href="/tfHours"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img className="mx-auto w-28" src={tfHours} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            24 hours
                        </p>
                    </a>
                    <a
                        href="/healthyfood"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img
                            className="mx-auto w-28"
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

export default Inspo;
