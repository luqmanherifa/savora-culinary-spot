import React from "react";
import hero from "../../../../public/images/hero.jpg";

const Hero = () => {
    return (
        <div className="relative mx-auto mt-3 max-w-7xl">
            <img src={hero} alt="" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
                <div className="mb-3 flex justify-center">
                    <div className="rounded-full bg-white p-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="50"
                            width="50"
                            viewBox="0 0 448 512"
                            fill="#E52535"
                        >
                            <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                        </svg>
                    </div>
                </div>
                <h3 className="mb-3 text-3xl font-semibold text-white">
                    Hungry? Just{" "}
                    <span className="cursor-pointer decoration-darkgreen hover:underline">
                        <a href="/">Savora</a>
                    </span>{" "}
                    it!
                </h3>
                <p className="mb-6 w-[30rem] text-base font-light text-white">
                    Order your favorite meals here, on our web. As smooth as in
                    the app. Same fast delivery. Countless restos to try.
                </p>
                <div className="rounded-2xl bg-white p-5">
                    <div className="mb-2 flex justify-start">
                        <p className="text-sm font-medium text-gray-800">
                            Your location
                        </p>
                    </div>
                    <div>
                        <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <svg
                                        className="h-4 w-4 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        width="10"
                                        viewBox="0 0 320 512"
                                        fill="currentColor"
                                    >
                                        <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="voice-search"
                                    className="block w-full rounded-full border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900"
                                    placeholder="Search location..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="ms-2 inline-flex items-center rounded-full bg-darkgreen px-4 py-2.5 text-sm font-medium text-white hover:bg-darkgreenhover"
                            >
                                Explore
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
