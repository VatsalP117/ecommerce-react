import React from "react";
import Navbar from "./Navbar.jsx";
import WelcomePage from "./WelcomePage.jsx";
export default function Home() {
  return (
    <div className="home-page w-full h-full flex flex-col">
      <Navbar />
      <WelcomePage />
    </div>
  );
}
