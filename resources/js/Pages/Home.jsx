import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <div className="underline text-blue-600">Home</div>
        </>
    );
};

export default Home;
