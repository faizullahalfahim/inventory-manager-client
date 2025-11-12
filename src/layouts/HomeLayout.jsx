import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ResentModels from "../pages/ResentModels";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-grow">
        <Banner />

        <section id="recent-models" className="py-16 md:py-24">
          <ResentModels />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
