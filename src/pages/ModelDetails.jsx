import React, { use, useContext, useState } from "react";
import { useNavigate, useLoaderData } from "react-router";
import {
  FaCodeBranch,
  FaMicrochip,
  FaDatabase,
  FaUserAlt,
  FaCalendarAlt,
  FaShoppingBag,
  FaDollarSign,
  FaRocket,
  FaArrowLeft,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const ModelDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const modelData = data?.result || data;

  if (!modelData || Object.keys(modelData).length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-base-100">
        <p className="text-xl text-error">Model not found.</p>
      </div>
    );
  }
  const {user} = useContext(AuthContext); 
  
  const {
    _id,
    name,
    image,
    framework,
    useCase,
    dataset,
    createdBy,
    createdAt,
    purchased,
    description,
    price,
  } = modelData;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleEdit = () => {
    navigate(`/models/edit/${_id}`);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://inventory-maneger-server.vercel.app/models/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Success:", data);
            
            Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        navigate('/allmodel')
            
          
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        
      }
    });

  };
  const handlePurchase = () => {
    const finalModel = {
      
      name: modelData.name,
      purchased: modelData.purchased,
      created_by: modelData.created_by,
      description: modelData.description,
      createdAt: new Date(),
      purchase_By: user.email
    }
    fetch(`https://inventory-maneger-server.vercel.app/purchase${modelData._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalModel)
    
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your App has been purchase",
        showConfirmButton: false,
        timer: 1500
      });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary hover:text-primary/80 mb-6 transition duration-200 text-lg font-medium"
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>

        <div className="bg-base-200 rounded-2xl shadow-xl border border-primary/50 overflow-hidden">
          <div className="p-8 border-b border-base-300 flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-wide">
                {name}
              </h1>
              <p className="text-xl text-base-content/70 mt-2 flex items-center">
                <FaMicrochip className="mr-2 text-secondary" />
                Use Case:{" "}
                <span className="font-semibold ml-2 text-base-content">{useCase}</span>
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleEdit}
                title="Edit Model"
                className="btn bg-warning text-warning-content hover:bg-warning/90 border-none transition duration-200 shadow-md flex items-center"
              >
                <FaEdit className="mr-2" /> Edit
              </button>
              <button
                onClick={handleDelete}
                title="Delete Model"
                className="btn bg-error text-error-content hover:bg-error/90 border-none transition duration-200 shadow-md flex items-center"
              >
                <FaTrash className="mr-2" /> Delete
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="rounded-xl overflow-hidden shadow-xl border border-base-300 h-64 lg:h-72 w-full mx-auto">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-base-300 p-5 rounded-xl border border-primary/50 shadow-inner space-y-3">
                <h2 className="text-xl font-bold text-primary border-b border-base-content/20 pb-2 mb-3">
                  Model Statistics
                </h2>

                <p className="flex items-center text-base-content/80">
                  <FaCodeBranch className="mr-3 text-lg text-success" />
                  <span className="font-medium">Framework:</span>{" "}
                  <span className="ml-auto font-bold text-base-content">{framework}</span>
                </p>

                <p className="flex items-center text-base-content/80">
                  <FaDatabase className="mr-3 text-lg text-warning" />
                  <span className="font-medium">Dataset:</span>{" "}
                  <span className="ml-auto font-bold text-base-content">{dataset}</span>
                </p>

                <p className="flex items-center text-base-content/80">
                  <FaUserAlt className="mr-3 text-lg text-secondary" />
                  <span className="font-medium">Created By:</span>{" "}
                  <span className="ml-auto font-bold truncate text-base-content">
                    {createdBy}
                  </span>
                </p>

                <p className="flex items-center text-base-content/80">
                  <FaCalendarAlt className="mr-3 text-lg text-info" />
                  <span className="font-medium">Added On:</span>{" "}
                  <span className="ml-auto font-bold text-base-content">{formattedDate}</span>
                </p>

                <p className="flex items-center text-base-content/80">
                  <FaShoppingBag className="mr-3 text-lg text-error" />
                  <span className="font-medium">Purchased:</span>{" "}
                  <span className="ml-auto font-bold text-base-content">{purchased} times</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-base-300 p-6 rounded-xl border border-base-300 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-3">
                  Detailed Description
                </h2>
                <p className="text-base-content/90 leading-relaxed">{description}</p>
              </div>

              <div className="bg-primary/30 p-6 rounded-xl border-t-4 border-primary shadow-xl flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-base-content/80 text-lg">Acquire Access For</p>
                  <span className="text-4xl font-extrabold text-accent flex items-center justify-center sm:justify-start">
                    <FaDollarSign className="text-3xl mr-1" />
                    {price}
                  </span>
                </div>

                <button 
                  className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-content font-extrabold rounded-lg border-none shadow-2xl shadow-accent/30 hover:bg-accent/90 transition duration-200 transform hover:scale-[1.03]"
                  onClick={handlePurchase}
                >
                  <FaRocket className="text-xl mr-2" /> Purchase Model
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;