"use client";

import { useState, useEffect } from "react";
import IntroAnimation from "../IntroAnimation";
import Header from "../Header";
import EpilepsyGate from "../EpilepsyWarning";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <EpilepsyGate>
      {showIntro ? (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </EpilepsyGate>
  );
}
