import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50">
                <div className="hidden md:block">
                    <DesktopNav />
                </div>
                <div className="block md:hidden">
                    <MobileNav />
                </div>
            </nav>
            {/* Placeholder to take up the space of the fixed navbar */}
            <div className="h-[65px] w-full shrink-0" aria-hidden="true"></div>
        </>
    )
}

export default Navbar