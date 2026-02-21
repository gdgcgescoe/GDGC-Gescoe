import React, { lazy, Suspense } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";


const DesktopEvents = lazy(() => import("./DesktopEvents"));
const MobileEvents = lazy(() => import("./MobileEvent"));

const Event = () => {
    return (
        <div className="min-h-screen text-foreground">
            <Navbar />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <DesktopEvents />
            </Suspense>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <MobileEvents />
            </Suspense>
            <Footer />
        </div>
    );
}
export default Event;
