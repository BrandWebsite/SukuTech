import React from "react";
import { Outlet } from "react-router-dom";
import LocationBanner from "../components/LocationBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <LocationBanner />

      {/* Sticky NavBar handled inside Navbar component */}
      <NavBar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
