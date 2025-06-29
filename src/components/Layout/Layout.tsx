import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../Header";
import IntroAnimation from "../IntroAnimation";

const Layout: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroAnimation onFinish={() => setShowIntro(false)} />
  ) : (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Layout;
