import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { NumberTicker } from "@/components/ui/number-ticker";
import scrollDown from "@/assets/icons/scrollDown.svg";
import learnIcon from "@/assets/icons/learnIcon.svg";
import buildIcon from "@/assets/icons/BuildIcon.svg";
import connectIcon from "@/assets/icons/connectIcon.svg";

import ImageCarousel from "@/components/carousel/ImageCarousel";

/*  STATIC DATA  */
const HOMEPAGE_CAROUSEL_IMAGES = [
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/IMG-20250904-WA0006_MfP1yqp.webp?width=1400&quality=80",
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/IMG-20250904-WA0009_EDiLC5B.jpg?width=1400&quality=80",
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/IMG20251001110257-min_SlUJvW2.webp?width=1400&quality=80",
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/IMG_2681_eSUaKbN.jpeg?width=1400&quality=80",
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/WhatsApp%20Image%202025-10-08%20at%2010.06.06%20PM.jpeg?width=1400&quality=80",
];

const HomePageDesktop = () => {
    return (
        <section className="hidden md:flex min-h-screen items-center py-20 lg:py-20">
            <div className="mx-auto w-full max-w-7xl px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-24">

                    {/*  LEFT CONTENT  */}
                    <div className="flex-1 max-w-2xl space-y-10">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-gdg-blue/30 bg-gdg-blue/10 px-4 py-1.5 backdrop-blur-md shadow-(--shadow-gdg-blue-glow) animate-pulse">
                            <div className="flex items-center gap-2 font-semibold">
                                <NumberTicker
                                    value={10}
                                    direction="up"
                                    start={50}
                                    className="text-foreground text-sm tracking-tight "
                                />
                                <span className="text-gdg-blue/90 text-sm tracking-tight">
                                    Active Members
                                </span>
                            </div>

                        </div>

                        {/* Heading */}
                        <div className="space-y-1">
                            <TextAnimate
                                animation="blurIn"
                                as="h1"
                                by="word"
                                once={true}
                                className="text-5xl lg:text-5xl font-bold italic text-foreground tracking-tight"
                            >
                                Where Developers
                            </TextAnimate>

                            <TextAnimate
                                animation="blurIn"
                                as="h2"
                                by="word"
                                delay={0.2}
                                once={true}
                                className="text-5xl lg:text-5xl font-bold text-gdg-blue leading-tight"
                            >
                                Begin To Build:
                            </TextAnimate>

                            <TextAnimate
                                animation="blurIn"
                                as="h3"
                                by="word"
                                delay={0.4}
                                once={true}
                                className="text-5xl lg:text-5xl font-bold italic text-foreground tracking-tight"
                            >
                                GDGC GESCOE
                            </TextAnimate>
                        </div>

                        {/* Description */}
                        <p className="text-[15px] text-foreground/60 leading-relaxed max-w-lg font-medium">
                            Join a student-led developer community exploring real-world tech
                            through events, talks, and collaborative projects.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-6 pt-2">
                            <a
                                href="https://gdg.community.dev/gdg-on-campus-gokhale-education-societys-r-h-sapat-college-of-engineering-management-studies-and-research-nashik-india/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-xl border border-gdg-blue/40 bg-gdg-blue/5 px-8 py-3.5 text-sm font-semibold text-foreground/90 transition-all hover:bg-gdg-blue/10 hover:border-gdg-blue/60 focus:ring-2 focus:ring-gdg-blue/20"
                            >
                                Join Community
                            </a>


                            <a
                                href="/events"
                                className="inline-block rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-foreground/90 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                            >
                                Upcoming Events
                            </a>

                        </div>

                        {/* Stats */}
                        <div className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-6 mt-4 backdrop-blur-sm">
                            <div className="px-8 text-center border-r border-white/10">
                                <NumberTicker value={10} direction="up" start={50} className="text-2xl font-bold text-foreground" />
                                <span className="text-2xl font-bold text-foreground">+</span>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-1">
                                    Events
                                </p>
                            </div>

                            <div className="px-10 text-center border-r border-white/10">
                                <NumberTicker value={50} direction="up" className="text-2xl font-bold text-foreground" />
                                <span className="text-2xl font-bold text-foreground">+</span>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-1">
                                    Members
                                </p>
                            </div>

                            <div className="px-10 text-center">

                                <NumberTicker value={10} direction="up" start={50} className="text-2xl font-bold text-foreground" />
                                <span className="text-2xl font-bold text-foreground">+</span>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-1">
                                    Projects
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  RIGHT CAROUSEL  */}
                    <div className="relative flex-shrink-0 flex items-center justify-center pt-8 lg:pt-0">
                        <ImageCarousel
                            images={HOMEPAGE_CAROUSEL_IMAGES}
                            autoPlay={true}
                            autoPlayDelay={3500}
                        />
                    </div>


                </div>

                {/* scrollDown icon */}
                <div className="flex justify-center mt-16 py-28 relative">
                    {/* Animated glow */}
                    <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-gdg-blue/20 via-gdg-green/20 to-gdg-yellow/20 blur-2xl animate-pulse" />

                    {/* Pulsing ring */}
                    <div className="absolute w-20 h-20 rounded-full border-2 border-foreground/10 animate-ping opacity-20" />

                    {/* Icon */}
                    <img
                        src={scrollDown}
                        alt="Scroll Down"
                        className="relative w-16 h-16 opacity-80 hover:opacity-100 transition-all duration-300 animate-bounce hover:scale-110 cursor-pointer animation-duration-[2s] filter-[drop-shadow(var(--shadow-gdg-blue-soft))]"
                    />
                </div>


                <section className="py-18">
                    <div className="mx-auto w-full max-w-7xl px-8 lg:px-12">

                        {/* Heading */}
                        <div className="text-center mb-20 text-4xl lg:text-5xl font-bold tracking-tight italic">

                            <TextAnimate animation="blurIn" as="span" by="word" once>
                                What We Do
                            </TextAnimate>

                            <TextAnimate animation="blurIn" as="span" by="word" delay={0.2} once className="text-gdg-blue">
                                ?
                            </TextAnimate>

                        </div>


                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">

                            {/* Learn */}
                            <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gdg-green/20 hover:border-gdg-green/40 hover:bg-white/10 overflow-hidden">
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gdg-green/10 via-gdg-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Glassmorphic shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon with animation */}
                                <div className="relative mb-6 w-10 h-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gdg-green/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img src={learnIcon} alt="Learn Icon" className="relative w-10 h-10 drop-shadow-lg" />
                                </div>

                                <h3 className="relative text-2xl font-bold mb-6 tracking-tight text-gdg-green drop-shadow-(--drop-shadow-gdg-green) group-hover:drop-shadow-(--drop-shadow-gdg-green-hover) transition-all duration-300">
                                    Learn
                                </h3>
                                <p className="relative text-sm text-foreground/70 leading-relaxed font-medium group-hover:text-foreground/90 transition-colors duration-300">
                                    Hands-on workshops and expert talks on real-world technologies.
                                    Build strong foundations and explore industry-relevant tools.
                                </p>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gdg-green/20 via-gdg-green/10 to-transparent rounded-bl-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Bottom glow */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gdg-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Build */}
                            <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gdg-yellow/20 hover:border-gdg-yellow/40 hover:bg-white/10 overflow-hidden">
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gdg-yellow/10 via-gdg-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Glassmorphic shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon with animation */}
                                <div className="relative mb-6 w-10 h-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gdg-yellow/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img src={buildIcon} alt="Build Icon" className="relative w-10 h-10 drop-shadow-lg" />
                                </div>

                                <h3 className="relative text-2xl font-bold mb-6 tracking-tight text-gdg-yellow drop-shadow-(--drop-shadow-gdg-yellow) group-hover:drop-shadow-(--drop-shadow-gdg-yellow-hover) transition-all duration-300">
                                    Build
                                </h3>
                                <p className="relative text-sm text-foreground/70 leading-relaxed font-medium group-hover:text-foreground/90 transition-colors duration-300">
                                    Work on projects, join hackathons, and turn ideas into real
                                    solutions. Apply your skills by building products that matter.
                                </p>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gdg-yellow/20 via-gdg-yellow/10 to-transparent rounded-bl-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Bottom glow */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gdg-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Connect */}
                            <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gdg-red/20 hover:border-gdg-red/40 hover:bg-white/10 overflow-hidden">
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gdg-red/10 via-gdg-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Glassmorphic shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon with animation */}
                                <div className="relative mb-6 w-10 h-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gdg-red/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img src={connectIcon} alt="Connect Icon" className="relative w-10 h-10 drop-shadow-lg" />
                                </div>

                                <h3 className="relative text-2xl font-bold mb-6 tracking-tight text-gdg-red drop-shadow-(--drop-shadow-gdg-red) group-hover:drop-shadow-(--drop-shadow-gdg-red-hover) transition-all duration-300">
                                    Connect
                                </h3>
                                <p className="relative text-sm text-foreground/70 leading-relaxed font-medium group-hover:text-foreground/90 transition-colors duration-300">
                                    Collaborate, share knowledge, and grow as a developer community.
                                    Meet peers, mentors, and contributors who support your journey.
                                </p>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gdg-red/20 via-gdg-red/10 to-transparent rounded-bl-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Bottom glow */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gdg-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </section >
    );
};

export default React.memo(HomePageDesktop);
