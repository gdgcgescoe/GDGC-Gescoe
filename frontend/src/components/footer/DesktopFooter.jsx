import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import FooterLogo from '../../assets/gdg-gescoe-logos/FooterLogo.svg';

const DesktopFooter = () => {
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState('');

    const socialLinks = [
        { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/company/gdg-gescoe', ariaLabel: 'Visit our LinkedIn page' },
        { name: 'GitHub', icon: FaGithub, url: 'https://github.com/gdg-gescoe', ariaLabel: 'Visit our GitHub profile' },
        { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/gdg_gescoe', ariaLabel: 'Visit our Instagram profile' },
        { name: 'X', icon: FaXTwitter, url: 'https://x.com/gdg_gescoe', ariaLabel: 'Visit our X (Twitter) profile' },
        { name: 'Discord', icon: FaDiscord, url: 'https://discord.gg/gdg-gescoe', ariaLabel: 'Join our Discord server' },
        { name: 'Medium', icon: FaMedium, url: 'https://medium.com/@gdg-gescoe', ariaLabel: 'Read our Medium blog' }
    ];

    const quickLinks = [
        { label: 'About GDG-GESCOE', href: '/about' },
        { label: 'Upcoming Events', href: '/events' },
        { label: 'Meet the Team', href: '/team' },
        { label: 'Tech Blogs', href: '/blogs' }
    ];

    const supportLinks = [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' }
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setSubscribeStatus('Please enter a valid email address');
            return;
        }

        setSubscribeStatus('Newsletter signup coming soon!');
        setTimeout(() => setSubscribeStatus(''), 3000);
    };

    return (
        <footer
            className=" text-foreground border-t border-border"
            role="contentinfo"
        >
            <div className="px-10 lg:px-14 xl:px-20 py-10">

                <div className="grid md:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-8">

                    {/* Column 1 */}
                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <img
                                src={FooterLogo}
                                alt="GDG GESCOE Logo"
                                className="h-auto w-auto object-contain"
                            />
                        </div>

                        <p className="text-lg leading-relaxed max-w-xs text-muted-foreground">
                            Empowering developers to build great products together.
                            Join the community at GESCOE.
                        </p>

                        <nav aria-label="Social media links">
                            <h3 className="text-base font-semibold tracking-wide mb-3">
                                STAY CONNECTED
                            </h3>

                            <ul className="flex gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <li key={social.name}>
                                            <a
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                                aria-label={social.ariaLabel}
                                            >
                                                <Icon className="w-6 h-6" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>

                    {/* Column 2 */}
                    <nav aria-label="Quick links">
                        <h3 className="text-base font-semibold tracking-wide mb-3">
                            QUICK LINKS
                        </h3>

                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-base hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Column 3 */}
                    <nav aria-label="Support links">
                        <h3 className="text-base font-semibold tracking-wide mb-3">
                            SUPPORT
                        </h3>

                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-base hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Column 4 */}
                    <div className="border border-border rounded-2xl p-6">
                        <h3 className="text-base font-semibold tracking-wide mb-3">
                            NEWSLETTER
                        </h3>

                        <p className="text-base mb-3 max-w-xs text-muted-foreground">
                            Stay updated with the latest workshops and news.
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-3">

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                required
                                className="w-full bg-transparent border border-border rounded-full px-5 py-3 text-base
                                focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <button
                                type="submit"
                                className="w-full bg-secondary text-secondary-foreground 
                                rounded-full py-3 font-medium text-base
                                hover:bg-secondary/80 transition-all"
                            >
                                SUBSCRIBE
                            </button>

                            {subscribeStatus && (
                                <p
                                    className={`text-base ${subscribeStatus.includes('soon')
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                        }`}
                                >
                                    {subscribeStatus}
                                </p>
                            )}
                        </form>
                    </div>

                </div>

                <div className="mt-6 pt-6 border-border text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} GDG GESCOE. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default DesktopFooter;
