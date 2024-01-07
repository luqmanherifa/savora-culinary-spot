import React from "react";
import bestSellers from "../../../../public/images/inspobestsellers.png";
import budgetMeal from "../../../../public/images/inspobudgetmeal.png";
import healthyFood from "../../../../public/images/inspohealthyfood.png";
import mostLoved from "../../../../public/images/inspomostloved.png";
import nearMe from "../../../../public/images/insponearme.png";
import tfHours from "../../../../public/images/inspotfhours.png";

const Inspo = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-16 max-w-7xl">
                <h3 className="mb-7 flex justify-center text-2xl font-semibold text-gray-800">
                    Looking for inspo? Start here
                </h3>
                <div className="flex max-w-6xl flex-wrap justify-center gap-5">
                    <a
                        href="/nearme"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img className="mx-auto w-28" src={nearMe} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Near Me
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
                            Best Sellers
                        </p>
                    </a>
                    <a
                        href="/budgetmeal"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img className="mx-auto w-28" src={budgetMeal} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Budget Meal
                        </p>
                    </a>
                    <a
                        href="/mostloved"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img className="mx-auto w-28" src={mostLoved} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            Most Loved
                        </p>
                    </a>
                    <a
                        href="/tfHours"
                        className="rounded-2xl border border-gray-300 bg-white p-6 pt-4 hover:bg-lightgreen"
                    >
                        <img className="mx-auto w-28" src={tfHours} alt="" />
                        <p className="flex justify-center text-sm font-medium text-gray-800">
                            24 Hours
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
                            Healthy Food
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Inspo;
