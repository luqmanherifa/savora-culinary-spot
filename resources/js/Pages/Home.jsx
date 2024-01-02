import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({ auth }) => {
    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <div className="underline text-blue-600">Home</div>
        </>
    );
};

export default Home;
