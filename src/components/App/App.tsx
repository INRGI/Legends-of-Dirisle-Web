// App.tsx
import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import NotFound from "../../pages/NotFound";
import Layout from "../Layout";
import EpilepsyWarning from "../EpilepsyWarning";

const Home = lazy(() => import("../../pages/Home/Home"));
const RulesPage = lazy(() => import("../../pages/RulesPage/RulesPage"));

const STORAGE_KEY = "epilepsyWarningAccepted";

export function App() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setAccepted(saved === "true");
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setAccepted(true);
  };

  if (accepted === null) {
    return null;
  }

  if (!accepted) {
    return <EpilepsyWarning onAccept={handleAccept} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/shop" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/rules" element={<RulesPage />} />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
