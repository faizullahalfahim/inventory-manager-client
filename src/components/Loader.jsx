import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      {/* Outer Glowing Circle */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        {/* Spinning Gradient Part */}
        <div className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        {/* Inner AI Style Pulse */}
        <div className="absolute inset-4 bg-primary/10 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
      
      {/* Professional Text */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold tracking-widest text-primary animate-pulse">
          AI <span className="text-base-content font-light">Inventory</span>
        </h2>
        <p className="text-xs text-base-content/50 uppercase tracking-[0.3em] mt-1">
          Loading Resources...
        </p>
      </div>
    </div>
  );
};

export default Loader;