import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast , ToastContainer } from "react-toastify";



const Register = () => {
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
     const {createUserWithEmailAndPasswordFunc,
       updateUserProfileFunc,
       signInWithPopupFunc
       } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register form submitted");
        const form =e.target;
        const name = form.name.value;
        if (name.length < 6) {
            setNameError('Name must be at least 6 characters long');
            return;
        } else {
            setNameError('');
        }
        const email = form.email.value;
        const password = form.password.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]).{6,}$/;
        if ( !passwordPattern.test(password)) {
            setPasswordError('Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.');
            return;
        } else {
            setPasswordError('');
        }
        console.log(name, email, password);
         createUserWithEmailAndPasswordFunc (email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("User registered successfully");
        form.reset();
        updateUserProfileFunc ({displayName: name})
        .then ( () => {
            console.log ('User profile updated successfully');
            console.log(user);
            toast.success("User profile updated successfully");
        })
        .catch (error => {
            console.log (error);
            toast.warning(error.message);
        })
    })
    .catch (error => {
        console.log(error);
        toast.error(error.message);
    })
   }
   const handleGoogleSignIn = () => {
    signInWithPopupFunc()
    .then (result => {
        const user = result.user;
        console.log(user);
        toast.success("User registered with Google successfully");
       
    })
    .catch (error => {
        console.log(error);
        toast.error(error.message);
    })
   }
     
   
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-800/50">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-blue-400">
          Create AI Account 🤖
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Join{" "}
          <span className="font-semibold text-blue-300">
            AI Inventory Manager
          </span>{" "}
          today
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Username</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
            {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide transition shadow-lg shadow-blue-500/30"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-2 my-6">
          <div className="h-px bg-gray-700 flex-1"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="h-px bg-gray-700 flex-1"></div>
        </div>

        <button onClick={handleGoogleSignIn}
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2 border border-blue-600 rounded-lg text-gray-200 hover:bg-blue-900/40 transition duration-200"
        >
          <FaGoogle  className="text-red-500 text-lg" /> Continue with Google
        </button>

        <p className="text-center text-gray-400 mt-8 text-sm">
          Already have an account?{" "}
          <Link
            to="/auth/login" 
            className="text-blue-400 hover:underline font-semibold hover:text-blue-300"
          >
            Login Now
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
