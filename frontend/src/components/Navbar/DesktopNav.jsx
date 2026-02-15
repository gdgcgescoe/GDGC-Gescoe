import React from 'react'
import mainLogo from '../../assets/gdg-gescoe-logos/short-dark-.png'

const DesktopNav = () => {
    return (
        <div className="sticky top-0 z-50">
            {/* Glassmorphism container with enhanced glass effect */}
            <div className="backdrop-blur-lg backdrop-saturate-150 bg-background/40 border-b border-white/10 shadow-lg shadow-black/5">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Left section - Logo */}
                        <div className="flex items-center gap-2.5 cursor-pointer group">
                            <div className="relative">
                                <img
                                    src={mainLogo}
                                    alt="GDG GESCOE Logo"
                                    className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(66,133,244,0.5)]"
                                />
                            </div>
                            <span className="text-foreground text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                                GDG-GESCOE
                            </span>
                        </div>

                        {/* Right section - Navigation */}
                        <div className="flex items-center gap-8 lg:gap-10">
                            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                                <a 
                                    href="#" 
                                    className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm font-medium group"
                                >
                                    Home
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                                </a>
                                <a 
                                    href="#" 
                                    className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm font-medium group"
                                >
                                    About
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                                </a>
                                <a 
                                    href="#" 
                                    className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm font-medium group"
                                >
                                    Events
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                                </a>
                                <a 
                                    href="#" 
                                    className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm font-medium group"
                                >
                                    Blogs
                                    <span className="absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" style={{width: 0}}></span>
                                </a>
                                <a 
                                    href="#" 
                                    className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm font-medium group"
                                >
                                    Team
                                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                                </a>
                            </nav>

                            {/* CTA Button */}
                            <button
                                className="relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(66,133,244,0.4)] hover:scale-105 active:scale-95"
                                style={{ backgroundColor: 'var(--color-primary)' }}
                            >
                                <span className="relative z-10">Join Us</span>
                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopNav