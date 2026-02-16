import { useState, useEffect } from 'react';
import AboutDesktop from './AboutDesktop';
import AboutMobile from './AboutMobile';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <AboutMobile /> : <AboutDesktop />;
};

export default About;