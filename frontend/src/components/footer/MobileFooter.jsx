import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import FooterLogo from '../../assets/gdg-gescoe-logos/FooterLogo.svg';

const MobileFooter = () => {
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

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setSubscribeStatus('Please enter a valid email address');
      return;
    }

    // TODO: Add Formspree integration here
    // Temporary placeholder - remove this when Formspree is integrated
  };

  return (
    <footer className="md:hidden text-foreground border-t border-border" role="contentinfo">
      <div className="px-6 py-8">

        {/* Logo and Description */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={FooterLogo}
              alt="GDG GESCOE Logo"
              className="h-auto w-auto object-contain"
            />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Empowering developers to build great products together.
            Join the community at GESCOE.
          </p>
        </div>

        {/* Social Links */}
        <nav aria-label="Social media links" className="mb-8">
          <h3 className="text-xs font-semibold tracking-wide mb-4 uppercase">
            STAY CONNECTED
          </h3>

          <ul className="flex gap-4 flex-wrap">
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
                    <Icon className="w-5 h-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Links and Support - Side by Side */}
        <div className="grid grid-cols-2 gap-6 mb-8">

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-xs font-semibold tracking-wide mb-3 uppercase">
              QUICK LINKS
            </h3>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support links">
            <h3 className="text-xs font-semibold tracking-wide mb-3 uppercase">
              SUPPORT
            </h3>

            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Newsletter Section with Border */}
        <div className="border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-center mb-3">
            NEWSLETTER
          </h3>

          <p className="text-sm text-center text-muted-foreground mb-5">
            Stay updated with the latest workshops and news.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full bg-muted/30 border border-border rounded-full px-5 py-3 text-sm
                                placeholder:text-muted-foreground
                                focus:outline-none focus:ring-2 focus:ring-primary
                                transition-shadow"
              aria-describedby={subscribeStatus ? "subscribe-status" : undefined}
            />

            <button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground 
                                rounded-full py-3 font-medium text-sm
                                hover:bg-secondary/80 active:scale-95
                                transition-all duration-200
                                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              SUBSCRIBE
            </button>

            {subscribeStatus && (
              <p
                id="subscribe-status"
                className={`text-sm text-center ${subscribeStatus.includes('Thanks')
                  ? 'text-green-600'
                  : 'text-red-600'
                  }`}
                role="status"
                aria-live="polite"
              >
                {subscribeStatus}
              </p>
            )}
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} GDG GESCOE. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default MobileFooter;