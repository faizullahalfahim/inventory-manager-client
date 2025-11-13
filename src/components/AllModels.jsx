import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../pages/ModelCard";
import { FaBoxes, FaSearch } from "react-icons/fa";

const AllModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data || []);
  const [selectedFramework, setSelectFramework] = useState("All");
  
  useEffect(() => {
    setModels(data || []);
  }, [data]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    fetch(
      `https://inventory-maneger-server.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((Search_data) => {
        console.log(Search_data);
        setModels(Search_data);
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

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-base-content inline-block border-b-4 border-primary pb-2">
            Complete Model Inventory
          </h1>
          <p className="mt-4 text-xl text-base-content/70">
            Explore all {models.length} machine learning models available in our
            comprehensive catalog.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <form className="w-full md:w-2/3" onSubmit={handleSearch}>
            <div className="form-control w-full">
              <div className="input-group flex shadow-2xl rounded-xl overflow-hidden border border-primary/50 transition-all duration-300 hover:shadow-primary/20">
                <input
                  type="text"
                  placeholder="Search models by name, use case, framework or dataset..."
                  name="search"
                  className="input input-lg w-full bg-base-200 text-base-content border-none focus:outline-none placeholder-base-content/50 pl-6"
                />
                <button
                  type="submit"
                  className="btn btn-lg bg-primary text-primary-content hover:bg-primary/90 border-none px-6 transition duration-200"
                >
                  <FaSearch className="text-xl" />
                </button>
              </div>
            </div>
          </form>

          <div className="relative w-full md:w-1/3 md:max-w-[250px]">
            <select
              className="select select-bordered w-full bg-base-200 border-primary text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-3 appearance-none pr-10"
              onChange={handleFrameworkChange}
              value={selectedFramework}
            >
              <option value="All">Filter by Framework (All)</option>
              <option value="PyTorch">PyTorch</option>
              <option value="TensorFlow">TensorFlow</option>
              <option value="Keras">Keras</option>
              <option value="Scikit-learn">Scikit-learn</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-base-content/70">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllModels;