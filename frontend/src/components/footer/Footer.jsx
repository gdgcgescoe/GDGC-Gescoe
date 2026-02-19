import React from 'react'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

const Footer = () => {
    return (
        <footer>
            <div className=' hidden md:block'>
                <DesktopFooter />
            </div>
            <div className=' md:hidden'>
                <MobileFooter />
            </div>
        </footer>
    )
}

export default Footer