import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ResentModels from "../pages/ResentModels";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-grow">
        <Banner />

        <section id="recent-models">
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