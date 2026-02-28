import React from 'react';
import DesktopTeam from './DesktopTeam';
import MobileTeam from './MobileTeam';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

const TeamPage = () => {
    return (
        <div className="min-h-screen text-foreground flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="hidden md:block">
                    <DesktopTeam />
                </div>
                <div className="block md:hidden">
                    <MobileTeam />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TeamPage;