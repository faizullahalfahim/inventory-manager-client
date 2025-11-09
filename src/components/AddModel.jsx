// src/pages/AddModel.jsx
import React from "react";
// react-icons বা অন্য কোনো লাইব্রেরি থেকে আইকন ইম্পোর্ট করতে পারেন, যেমন:
// import { FaPlus } from 'react-icons/fa';

const AddModel = () => {
  return (
    <div className="flex justify-center items-center py-12 px-4 bg-gray-50">
      
      {/* Button to open modal - প্রজেক্ট থিম অনুযায়ী নীল রং (Blue/Primary Color) ব্যবহার করা হয়েছে */}
      <button
        className="btn btn-lg bg-blue-600 text-white border-blue-700 hover:bg-blue-700 shadow-xl transition-all duration-300 hover:scale-[1.02]"
        onClick={() => document.getElementById("addModelModal").showModal()}
      >
        {/* আইকনের জন্য SVG (বা FaPlus আইকন ব্যবহার করতে পারেন) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        Add New AI Model
      </button>

      {/* Modal */}
      <dialog id="addModelModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-3xl p-8 bg-white shadow-2xl rounded-xl">
          
          {/* Modal Header - টেকনোলজি থিম অনুযায়ী হেডিং */}
          <h3 className="font-extrabold text-2xl text-center text-gray-800 pb-3 mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                💾 New AI Model Entry
            </span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div> {/* আন্ডারলাইন এফেক্ট */}
          </h3>

          {/* FORM */}
          <form className="space-y-5">
            
            {/* Row 1: Name and Framework */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 1. Model Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Model Name <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. BERT, ResNet-50"
                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                    required
                  />
                </div>

                {/* 2. Framework */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Framework <span className="text-red-500">*</span></span>
                  </label>
                  <select name="framework" className="select select-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150" required>
                    <option value="" disabled selected>Select Framework</option>
                    <option>TensorFlow</option>
                    <option>PyTorch</option>
                    <option>Keras</option>
                    <option>Scikit-Learn</option>
                    <option>Other</option>
                  </select>
                </div>
            </div>

            {/* Row 2: Use Case and Dataset */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 3. Use Case */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Use Case <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    name="useCase"
                    placeholder="e.g. NLP, Computer Vision"
                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                    required
                  />
                </div>

                {/* 4. Dataset */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Dataset <span className="text-red-500">*</span></span>
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
            
            {/* Row 3: Image URL and Created By */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 5. Image URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Image URL <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    placeholder="Paste ImgBB URL (e.g. https://i.ibb.co/...)"
                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 transition duration-150"
                    required
                  />
                </div>
                
                {/* 6. Created By (Email) */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Created By (Email) <span className="text-red-500">*</span></span>
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

            {/* Row 4: Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Description <span className="text-red-500">*</span></span>
              </label>
              <textarea
                name="description"
                placeholder="Write a brief description of the model’s purpose..."
                className="textarea textarea-bordered w-full h-32 focus:ring-2 focus:ring-blue-500 transition duration-150"
                required
              ></textarea>
            </div>


            {/* Buttons - বাটনের স্টাইল সামঞ্জস্যপূর্ণ রাখা হয়েছে */}
            <div className="modal-action flex justify-end gap-3 pt-6 border-t border-gray-100"> 
              <form method="dialog">
                {/* Close Button */}
                <button className="btn btn-ghost border border-gray-300 hover:bg-gray-100 transition duration-150">
                    Close
                </button>
              </form>
              {/* Submit Button - থিম অনুযায়ী প্রধান রং */}
              <button type="submit" className="btn bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-150">
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