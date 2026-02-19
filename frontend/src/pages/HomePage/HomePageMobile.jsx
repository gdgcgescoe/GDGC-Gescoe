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
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/IMG-20250904-WA0006_MfP1yqp.webp?width=500&quality=75",
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/IMG-20250904-WA0009_EDiLC5B.jpg?width=500&quality=75",
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/IMG20251001110257-min_SlUJvW2.webp?width=500&quality=75",
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/IMG_2681_eSUaKbN.jpeg?width=500&quality=75",
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/WhatsApp%20Image%202025-10-08%20at%2010.06.06%20PM.jpeg?width=500&quality=75",
];

/*  COMPONENT  */

const StatItem = ({ value, label }) => (
    <div className="flex-1 text-center border-r last:border-r-0 border-white/10">
        <div className="flex items-center justify-center">
            <NumberTicker
                value={value}
                direction="up"
                className="text-xl font-bold text-foreground"
            />
            <span className="text-xl font-bold text-foreground">+</span>
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground/40 mt-0.5">
            {label}
        </p>
    </div>
);

const InfoCard = ({ icon, title, color, description }) => (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 active:scale-[0.98] transition-all duration-300 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 via-transparent`} />

        <div className="relative mb-4 w-10 h-10">
            <img src={icon} alt={`${title} Icon`} className="w-10 h-10" />
        </div>

        <h3 className={`relative text-xl font-bold mb-3 tracking-tight text-${color}`}>
            {title}
        </h3>

        <p className="relative text-sm text-foreground/70 leading-relaxed font-medium">
            {description}
        </p>
    </div>
);

const HomePageMobile = () => {
    return (
        <div className="md:hidden">
            <link
                rel="preload"
                as="image"
                href={HOMEPAGE_CAROUSEL_IMAGES[0]}
                fetchpriority="high"
            />
            {/*  HERO SECTION  */}
            <section className="flex flex-col py-12 px-6">
                <div className="mx-auto w-full max-w-md space-y-8">

                    {/* Badge */}
                    <div className="flex justify-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-gdg-blue/30 bg-gdg-blue/10 px-4 py-1.5 shadow-[0_0_10px_rgba(66,133,244,0.4)] ">
                            <NumberTicker
                                value={30}
                                direction="up"
                                className="text-xs font-semibold text-foreground"
                            />
                            <span className="text-gdg-blue/90 text-xs font-semibold">
                                Active Members
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col items-center justify-center space-y-3 text-center">
                        <TextAnimate
                            animation="blurIn"
                            as="h1"
                            by="word"
                            once
                            className="text-4xl font-bold italic tracking-tight"
                        >
                            Where Developers
                        </TextAnimate>

                        <TextAnimate
                            animation="blurIn"
                            as="h2"
                            by="word"
                            delay={0.2}
                            once
                            className="text-4xl font-bold text-gdg-blue"
                        >
                            Begin To Build:
                        </TextAnimate>

                        <TextAnimate
                            animation="blurIn"
                            as="h3"
                            by="word"
                            delay={0.4}
                            once
                            className="text-4xl font-bold italic tracking-tight"
                        >
                            GDG-GESCOE
                        </TextAnimate>
                    </div>


                    {/* Description */}
                    <p className="text-sm text-foreground/60 leading-relaxed font-medium text-center">
                        Join a student-led developer community exploring real-world tech
                        through events, talks, and collaborative projects.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col gap-3">
                        <button className="rounded-xl border border-gdg-blue/40 bg-gdg-blue/10 px-6 py-3 text-sm font-semibold transition-all active:scale-95 active:bg-gdg-blue/20">
                            Join Community
                        </button>

                        <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all active:scale-95 active:bg-white/10">
                            Upcoming Events
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm">
                        <StatItem value={10} label="Events" />
                        <StatItem value={50} label="Members" />
                        <StatItem value={10} label="Projects" />
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative flex justify-center mt-12 -mx-6">
                    <div className="scale-[0.9] origin-center">
                        <ImageCarousel
                            images={HOMEPAGE_CAROUSEL_IMAGES}
                            autoPlay
                            autoPlayDelay={3500}
                        />
                    </div>
                </div>

                {/* Scroll Down */}
                <div className="flex justify-center mt-16">
                    <img
                        src={scrollDown}
                        alt="Scroll Down"
                        className="w-12 h-12 opacity-70 animate-bounce"
                        style={{ animationDuration: "2s" }}
                    />
                </div>
            </section>

            {/*  WHAT WE DO  */}
            <section className="px-6 pb-20">
                <div className="mx-auto w-full max-w-md">
                    <div className="text-center mb-12">
                        <TextAnimate
                            animation="blurIn"
                            as="h2"
                            by="word"
                            once
                            className="text-3xl font-bold italic inline"
                        >
                            What We Do
                        </TextAnimate>
                        <span className="text-3xl font-bold text-gdg-blue">?</span>
                    </div>

                    <div className="flex flex-col gap-6">
                        <InfoCard
                            icon={learnIcon}
                            title="Learn"
                            color="gdg-green"
                            description="Hands-on workshops and expert talks on real-world technologies. Build strong foundations and explore industry-relevant tools."
                        />

                        <InfoCard
                            icon={buildIcon}
                            title="Build"
                            color="gdg-yellow"
                            description="Work on projects, join hackathons, and turn ideas into real solutions."
                        />

                        <InfoCard
                            icon={connectIcon}
                            title="Connect"
                            color="gdg-red"
                            description="Collaborate, share knowledge, and grow as a developer community."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default React.memo(HomePageMobile);
