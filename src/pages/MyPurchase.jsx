import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ModelCard from "./ModelCard";

const MyPurchase = () => {
  const { user } = useContext(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || !user.email) {
      if (user === null) {
        setLoading(false);
        setError("Please log in to view your purchased models.");
      }
      return;
    }

    setLoading(true);
    setError(null);

    fetch(
      `https://inventory-maneger-server.vercel.app/my-purchase?email=${user.email}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data.");
        }
        return res.json();
      })
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError(
          "Failed to load your models. Please check server status and API route."
        );
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-dashed rounded-full animate-spin border-t-transparent"></div>
          <p className="mt-4 text-lg font-semibold text-base-content/70">
            Loading Purchased Model...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 p-8">
        <div className="alert alert-error max-w-lg shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (models.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-base-content mb-4">
            No Purchased Models Found
          </h2>
          <p className="text-base-content/70">
            It looks like you haven't purchased any models yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-primary mb-10 border-b-2 border-primary pb-2">
          My Purchased AI Models ({models.length})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPurchase;
