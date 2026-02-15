import React, { useState, useEffect, useRef, useCallback } from 'react'
import mainLogo from '../../assets/gdg-gescoe-logos/short-dark-.png'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const drawerRef = useRef(null)

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    const closeMenu = useCallback(() => {
        setIsOpen(false)
    }, [])

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeMenu()
        }

        if (isOpen) {
            window.addEventListener('keydown', handleEsc)
        }

        return () => window.removeEventListener('keydown', handleEsc)
    }, [isOpen, closeMenu])

    // Focus trap
    useEffect(() => {
        if (!isOpen) return

        const focusableElements = drawerRef.current.querySelectorAll(
            'a, button:not([disabled]), [tabindex="0"]'
        )

        const first = focusableElements[0]
        const last = focusableElements[focusableElements.length - 1]

        const handleTab = (e) => {
            if (e.key !== 'Tab') return

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault()
                    last.focus()
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault()
                    first.focus()
                }
            }
        }

        drawerRef.current.addEventListener('keydown', handleTab)

        first?.focus()

        return () => {
            drawerRef.current?.removeEventListener('keydown', handleTab)
        }
    }, [isOpen])

    const navItems = [
        { label: 'Home', href: '#home', isReady: true },
        { label: 'About', isReady: false },
        { label: 'Events', isReady: false },
        { label: 'Team', isReady: false },
        { label: 'Blogs', isReady: false },
        { label: 'Contact', isReady: false },
    ]

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 md:hidden bg-background/80 backdrop-blur-lg border-b border-border">
                <div className="px-4 flex items-center justify-between h-16">
                    <img
                        src={mainLogo}
                        alt="GDG GESCOE Logo"
                        className="h-10 w-auto object-contain"
                    />

                    <button
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle menu"
                        className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </header>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Drawer */}
            <aside
                ref={drawerRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] z-[60] bg-background border-r border-border transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-16 flex items-center px-4 border-b border-border">
                    <img
                        src={mainLogo}
                        alt="GDG GESCOE Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                <nav className="flex flex-col pt-2">
                    {navItems.map((item, index) => (
                        <div key={item.label}>
                            {item.isReady ? (
                                <a
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block px-6 py-5 font-semibold text-base text-foreground hover:bg-muted hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <button
                                    disabled
                                    className="block w-full text-left px-6 py-5 font-semibold text-base text-muted-foreground cursor-not-allowed"
                                >
                                    {item.label}
                                </button>
                            )}

                            {index < navItems.length - 1 && (
                                <div className="border-b border-border mx-6" />
                            )}
                        </div>
                    ))}

                    <div className="px-6 pt-4 pb-6">
                        <button
                            onClick={closeMenu}
                            className="w-full py-4 text-base font-semibold text-white bg-primary hover:opacity-90 active:scale-[0.98] transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            Join Us
                        </button>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default MobileNav
