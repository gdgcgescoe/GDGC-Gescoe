import React, { useState } from "react";
import Loader from "./components/Loader";
import { BeamsBackground } from "./components/ui/beams-background";
import { HomePage } from "./pages/HomePage/HomePage";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background */}
      <BeamsBackground className="fixed inset-0 -z-10" />

      {/* Show Homepage ONLY after loading */}
      {!loading && (
        <div className="relative z-10 animate-fade-in">
          <HomePage />
        </div>
      )}

      {/* Loader */}
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}
    </div>
  );
};

export default App;
