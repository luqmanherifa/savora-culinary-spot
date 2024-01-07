import React from "react";
import featurePurple from "../../../../public/images/featurepurple.png";
import featureBlue from "../../../../public/images/featureblue.png";
import featureRed from "../../../../public/images/featurered.png";
import featureYellow from "../../../../public/images/featureyellow.png";

const Feature = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto mt-16 max-w-7xl">
                <h3 className="mb-7 flex justify-center text-2xl font-semibold text-gray-800">
                    Why order from Savora?
                </h3>
                <div className="flex max-w-6xl flex-wrap justify-center gap-6">
                    <div className="rounded-2xl bg-purple-200 p-[9px] py-12">
                        <img
                            className="mx-auto w-[14.3rem] rounded-xl object-cover"
                            src={featurePurple}
                            alt=""
                        />
                        <div className="p-3">
                            <p className="w-52 text-2xl font-semibold text-purple-700">
                                Countless reviews to go by
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-blue-200 p-[9px] py-12">
                        <img
                            className="mx-auto w-[14.3rem] rounded-xl object-cover"
                            src={featureBlue}
                            alt=""
                        />
                        <div className="p-3">
                            <p className="w-52 text-2xl font-semibold text-blue-700">
                                Order in or pick up from the resto
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-red-200 p-[9px] py-12">
                        <img
                            className="mx-auto w-[14.3rem] rounded-xl object-cover"
                            src={featureRed}
                            alt=""
                        />
                        <div className="p-3">
                            <p className="w-52 text-2xl font-semibold text-red-700">
                                Big deals on all cuisines
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-yellow-200 p-[9px] py-12">
                        <img
                            className="mx-auto w-[14.3rem] rounded-xl object-cover"
                            src={featureYellow}
                            alt=""
                        />
                        <div className="p-3">
                            <p className="w-52 text-2xl font-semibold text-yellow-700">
                                Quick & safe delivery
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
