
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import {  useContext} from "react";


const AddModel = () => {
  const {user} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      image: e.target.image.value,
      createdBy: user?.email,
      description: e.target.description.value,
      createdAt: new Date(),
      purchased: 0,
    }
    document.getElementById("addModelModal").close();
    fetch("http://localhost:3000/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
      e.target.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

  return (
    <div className="flex justify-center items-center py-12 px-4 bg-gray-50">
      <button
        className="btn btn-lg bg-blue-600 text-white border-blue-700 hover:bg-blue-700 shadow-xl transition-all duration-300 hover:scale-[1.02]"
        onClick={() => document.getElementById("addModelModal").showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add New AI Model
      </button>

      <dialog id="addModelModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-3xl p-8 bg-white shadow-2xl rounded-xl">
          <h3 className="font-extrabold text-2xl text-center text-gray-800 pb-3 mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              💾 New AI Model Entry
            </span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>{" "}
       
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    Model Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. BERT, ResNet-50"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    Framework <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="framework"
                  className="select select-bordered bg-white w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                  required
                >
                  <option value="" disabled selected>
                    Select Framework
                  </option>
                  <option>TensorFlow</option>
                  <option>PyTorch</option>
                  <option>Keras</option>
                  <option>Scikit-Learn</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    Use Case <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="useCase"
                  placeholder="e.g. NLP, Computer Vision"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    Dataset <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="dataset"
                  placeholder="e.g. ImageNet, Wikipedia"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    Image URL <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Paste ImgBB URL (e.g. https://i.ibb.co/...)"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    Created By (Email) <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  name="createdBy"
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Description <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                name="description"
                placeholder="Write a brief description of the model’s purpose..."
                className="textarea textarea-bordered w-full h-32 focus:ring-2 focus:ring-blue-500 transition duration-150"
                required
              ></textarea>
            </div>

            <div className="modal-action flex justify-end gap-3 pt-6 border-t border-gray-100">
              
              <button
                type="button"
                className="btn btn-ghost border border-gray-300 hover:bg-gray-100 transition duration-150"
                onClick={() => document.getElementById("addModelModal").close()}
              >
                Close
              </button>
              
              <button
                type="submit"
                className="btn bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-150"
              >
                ✨ Save Model
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddModel;