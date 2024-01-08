import City from "@/Layouts/Home/City";
import Cuisine from "@/Layouts/Home/Cuisine";
import Feature from "@/Layouts/Home/Feature";
import Footer from "@/Layouts/Home/Footer";
import Hero from "@/Layouts/Home/Hero";
import Inspo from "@/Layouts/Home/Inspo";
import Navbar from "@/Layouts/Home/Navbar";
import Resto from "@/Layouts/Home/Resto";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = ({ auth }) => {
    return (
        <div>
            <Head title="Home" />
            <Navbar auth={auth} homeColor="text-red-600" />
            <Hero />
            <Inspo />
            <Cuisine />
            <Resto />
            <Feature />
            <City />
            <Footer />
        </div>
    );
};

export default Home;
