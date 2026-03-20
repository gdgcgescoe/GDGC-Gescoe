import React from 'react';
import DesktopAbout from './DesktopAbout';
import MobileAbout from './MobileAbout';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '@/components/footer/Footer';

const About = () => {
    return (
        <div className="min-h-screen text-foreground flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="hidden md:block">
                    <DesktopAbout />
                </div>
                <div className="block md:hidden">
                    <MobileAbout />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
