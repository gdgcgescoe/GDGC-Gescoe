import React, { lazy, Suspense } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
const HomePageDesktop = lazy(() => import("./HomePageDesktop"));
const HomePageMobile = lazy(() => import("./HomePageMobile"));

export const HomePage = () => {
    return (
        <div className="min-h-screen text-foreground">
            <Navbar />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <HomePageDesktop />
            </Suspense>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <HomePageMobile />
            </Suspense>
            <Footer/>
        </div>
    );
};
