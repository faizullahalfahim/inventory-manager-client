import React, {  useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router"; 
import { AuthContext } from "../contexts/AuthContext";
import { toast , ToastContainer } from "react-toastify";

const Login = () => {
   
    const [error, setError] = useState('');
    const emailRef = useRef(null)
    const {
        signInWithEmailAndPasswordFunc,
        signInWithPopupFunc,
       
        sentPasswordResetEmailFunc,
      
        setUser
    } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state || '/';
    
    console.log (location); 
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login form submitted");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInWithEmailAndPasswordFunc(email, password)
        .then (result => {
            const user = result.user;
            console.log(user);
            setUser(user);
            toast.success("User logged in successfully");
            navigate(from);

            setError('null');
            form.reset();
        })
        .catch (error => {
            console.log(error);
            setError(error.message); 
            toast.error(error.message);
        })
        

    }
    const handleGoogleSignIn = () => {
        signInWithPopupFunc()
        .then (result => {
            const user = result.user;
            console.log(user);
            setUser(user);
            toast.success("User logged in with Google successfully");
             navigate(from);

            setError('null');
        })
        .catch (error => {
            console.log(error);
            toast.error(error.message);
        })
    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error ('Please enter your email address to reset your password.');
            return;
        }
        sentPasswordResetEmailFunc(email)
        .then ( () => {
            toast.success ('Password reset email sent. Please check your inbox.');
        })
        .catch ( error => {
            console.log (error);
            toast.error(error.message);
        })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-800/50">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-blue-400">
          Login to AI Inventory
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Sign in to continue to{" "}
          <span className="font-semibold text-blue-300">
            AI Model Inventory Manager
          </span>
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
                ref={emailRef}
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
          </div>

          <div className="text-right">
            <button onClick={handleForgetPassword}
              to="/forget-password"
              className="text-sm text-blue-400 hover:underline hover:text-blue-300"
            >
              Forgot password?
            </button>
          </div>
          {
            error && <p className="text-red-500 text-sm mt-1">{error}</p>
          }

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide transition shadow-lg shadow-blue-500/30"
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-2 my-6">
          <div className="h-px bg-gray-700 flex-1"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="h-px bg-gray-700 flex-1"></div>
        </div>

        <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 py-2 border border-blue-600 rounded-lg text-gray-200 hover:bg-blue-900/40 transition duration-200">
          <FaGoogle className="text-red-500 text-lg" /> Continue with Google
        </button>

        <p className="text-center text-gray-400 mt-8 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:underline font-semibold hover:text-blue-300"
          >
            Register Now
          </Link>
        </p>
      </div>
      <ToastContainer> </ToastContainer>
    </div>
  );
};

export default Login;
