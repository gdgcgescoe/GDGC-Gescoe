import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { BeamsBackground } from "./components/ui/beams-background";
import { HomePage } from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage/About";
import Event from "./pages/EventPage/Event"

// Session key to track if homepage loader was already shown
const HOMEPAGE_LOADER_KEY = "homepageLoaderShown";

const App = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  // Show loader only once per session on homepage
  const loaderAlreadyShown =
    typeof window !== "undefined" &&
    sessionStorage.getItem(HOMEPAGE_LOADER_KEY) === "true";

  const shouldShowLoader = isHomepage && !loaderAlreadyShown;
  const [loading, setLoading] = useState(shouldShowLoader);

  useEffect(() => {
    if (!shouldShowLoader) setLoading(false);
  }, [shouldShowLoader]);

  useEffect(() => {
    if (shouldShowLoader) {
      sessionStorage.setItem(HOMEPAGE_LOADER_KEY, "true");
    }
  }, [shouldShowLoader]);

  const handleLoaderComplete = () => setLoading(false);
  const showLoader = shouldShowLoader && loading;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background */}
      <BeamsBackground className="fixed inset-0 -z-10" />

      {/* App routes */}
      {!showLoader && (
        <div className="relative z-10 animate-fade-in">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Event />} />
          </Routes>
        </div>
      )}

      {/* Loader overlay (homepage only, first visit per session) */}
      {showLoader && <Loader onComplete={handleLoaderComplete} />}
    </div>
  );
};

export default App;
