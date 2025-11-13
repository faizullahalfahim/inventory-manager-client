import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import {
  FaCodeBranch,
  FaMicrochip,
  FaDatabase,
  FaUserAlt,
  FaImage,
  FaBookOpen,
  FaSave,
  FaArrowLeft,
  FaDollarSign,
  FaEdit,
} from "react-icons/fa";

const UpdateModel = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const modelToUpdate = data?.result || data;

  const {
    _id,
    name,
    image,
    framework,
    useCase,
    dataset,
    createdBy,
    description,
    price,
  } = modelToUpdate;
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      image: e.target.image.value,

      description: e.target.description.value,
    };

    fetch(`https://inventory-maneger-server.vercel.app/models/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        e.target.reset();
        navigate('/allmodel');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-400 hover:text-blue-300 mb-6 transition duration-200 text-lg font-medium"
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>

        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-yellow-500/50 overflow-hidden p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-4 border-b border-gray-700 pb-3 flex items-center">
            <FaEdit className="mr-3" /> Update Model: {name}
          </h1>
          <p className="text-gray-400 mb-8">Model ID: {_id}</p>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300 flex items-center">
                    <FaMicrochip className="mr-2" /> Model Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:ring-yellow-500 transition duration-150"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300 flex items-center">
                    <FaCodeBranch className="mr-2" /> Framework
                  </span>
                </label>
                <select
                  name="framework"
                  defaultValue={framework}
                  className="select select-bordered w-full bg-gray-800 border-gray-700 text-white focus:ring-yellow-500 transition duration-150"
                  required
                >
                  <option>TensorFlow</option>
                  <option>PyTorch</option>
                  <option>Keras</option>
                  <option>Scikit-Learn</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300 flex items-center">
                    <FaMicrochip className="mr-2" /> Use Case
                  </span>
                </label>
                <input
                  type="text"
                  name="useCase"
                  defaultValue={useCase}
                  className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:ring-yellow-500 transition duration-150"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300 flex items-center">
                    <FaDatabase className="mr-2" /> Dataset
                  </span>
                </label>
                <input
                  type="text"
                  name="dataset"
                  defaultValue={dataset}
                  className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:ring-yellow-500 transition duration-150"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300 flex items-center">
                    <FaImage className="mr-2" /> Image URL
                  </span>
                </label>
                <input
                  type="url"
                  name="image"
                  defaultValue={image}
                  placeholder="e.g. https://i.ibb.co/..."
                  className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:ring-yellow-500 transition duration-150"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-300 flex items-center">
                    <FaDollarSign className="mr-2" /> Price ($)
                  </span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  defaultValue={price}
                  placeholder="e.g. 49.99"
                  className="input input-bordered w-full bg-gray-800 border-gray-700 text-white focus:ring-yellow-500 transition duration-150"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-300 flex items-center">
                  <FaBookOpen className="mr-2" /> Description
                </span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Write a brief description of the model’s purpose..."
                className="textarea textarea-bordered w-full h-32 bg-gray-800 border-gray-700 text-white focus:ring-yellow-500 transition duration-150"
                required
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-300 flex items-center">
                  <FaUserAlt className="mr-2" /> Created By (Email)
                </span>
              </label>
              <input
                type="email"
                name="createdBy"
                value={createdBy}
                className="input input-bordered w-full bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed"
                readOnly
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="btn bg-yellow-600 text-white font-extrabold hover:bg-yellow-700 border-none transition duration-200 shadow-lg shadow-yellow-500/30"
              >
                <FaSave className="mr-2" /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
