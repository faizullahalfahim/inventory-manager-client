import React, { useEffect, useState } from "react";
import { FaFire, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import RecentCard from "./ResentCard";

const ResentModels = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://inventory-maneger-server.vercel.app/latest-models")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch latest models");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.slice(0, 6));
      })
      .catch((error) => {
        console.error("Fetching error:", error);
      });
  }, []);

  if (data.length === 0) {
    return (
      <div className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="card bg-base-200 border border-base-300 shadow-xl p-12 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="mx-auto mb-4 h-10 w-10 text-primary animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <p className="text-base-content/80">Loading recent models or no models available...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/20">
            <FaFire className="text-primary" />
            <span className="text-sm font-semibold text-primary">Trending Now</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-base-content">
            Latest Additions to Our Inventory
          </h2>

          <p className="mt-4 text-md md:text-lg text-base-content/70 max-w-2xl mx-auto">
            Check out the most recently added and high-performing AI models across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((model) => (
            <RecentCard key={model._id} model={model} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/allmodel")}
            className="btn btn-lg btn-primary shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 transition duration-300 transform hover:-translate-y-0.5"
            aria-label="View all models"
          >
            View All Models
            <FaArrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResentModels;