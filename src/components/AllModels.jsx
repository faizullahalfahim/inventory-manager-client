import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import ModelCard from "../pages/ModelCard";
import SkeletonCard from "../components/SkeletonCard"; 
import { FaBoxes, FaSearch } from "react-icons/fa";

const AllModels = () => {
  const data = useLoaderData();
  const navigation = useNavigation(); 
  const [models, setModels] = useState(data || []);
  const [selectedFramework, setSelectFramework] = useState("All");
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setModels(data || []);
  }, [data]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    
    setLoading(true); 
    fetch(
      `https://inventory-maneger-server.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((Search_data) => {
        setModels(Search_data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleFrameworkChange = (e) => {
    const framework = e.target.value;
    setSelectFramework(framework);
    if (framework === "All") {
      setModels(data || []);
    } else {
      const filtered = data.filter((model) => model.framework === framework);
      setModels(filtered);
    }
  };

 
  const isPageLoading = navigation.state === "loading" || loading;

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-12 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-base-content inline-block border-b-4 border-primary pb-2">
            Complete Model Inventory
          </h1>
          <p className="mt-4 text-xl text-base-content/70">
            Explore all {isPageLoading ? "..." : models.length} machine learning models available.
          </p>
        </header>

 
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <form className="w-full md:w-2/3" onSubmit={handleSearch}>
            <div className="form-control w-full">
              <div className="input-group flex shadow-2xl rounded-xl overflow-hidden border border-primary/50 transition-all duration-300 hover:shadow-primary/30">
                <input
                  type="text"
                  placeholder="Search models by name, framework..."
                  name="search"
                  className="input input-lg w-full bg-base-200 text-base-content border-none focus:outline-none pl-6"
                />
                <button
                  type="submit"
                  className="btn btn-lg bg-primary text-primary-content hover:bg-primary/90 border-none px-6"
                >
                  {loading ? <span className="loading loading-spinner"></span> : <FaSearch className="text-xl" />}
                </button>
              </div>
            </div>
          </form>

          {/* ফিল্টার অপশন */}
          <div className="relative w-full md:w-1/3 md:max-w-[250px]">
            <select
              className="select select-bordered select-lg w-full bg-base-200 border-primary text-base-content focus:ring-2 focus:ring-primary rounded-xl appearance-none"
              onChange={handleFrameworkChange}
              value={selectedFramework}
            >
              <option value="All">Filter by Framework (All)</option>
              <option value="PyTorch">PyTorch</option>
              <option value="TensorFlow">TensorFlow</option>
              <option value="Keras">Keras</option>
              <option value="Scikit-learn">Scikit-learn</option>
            </select>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isPageLoading ? (
         
            [...Array(8)].map((_, idx) => <SkeletonCard key={idx} />)
          ) : models.length > 0 ? (
           
            models.map((model) => (
              <ModelCard key={model._id} model={model} />
            ))
          ) : (
     
            <div className="col-span-full text-center py-20">
              <FaBoxes className="text-6xl text-base-content/20 mx-auto mb-4" />
              <h2 className="text-2xl font-bold opacity-50">No Models Found</h2>
              <p className="text-base-content/50">Try searching with a different keyword.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllModels;