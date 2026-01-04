import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-5 border border-base-300 rounded-3xl bg-base-100 shadow-sm overflow-hidden relative">
      {/* Image Skeleton with Shimmer Effect */}
      <div className="skeleton h-48 w-full rounded-2xl bg-base-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
      </div>
      
      <div className="space-y-3">
        {/* Title Skeleton */}
        <div className="skeleton h-6 w-3/4 bg-base-300"></div>
        
        {/* Short Description Skeleton */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full bg-base-200"></div>
          <div className="skeleton h-4 w-5/6 bg-base-200"></div>
        </div>
        
        {/* Meta Info Skeleton (Price/Framework) */}
        <div className="flex justify-between items-center mt-4">
          <div className="skeleton h-5 w-20 bg-base-300 rounded-full"></div>
          <div className="skeleton h-5 w-16 bg-base-300 rounded-full"></div>
        </div>
        
        {/* Button Skeleton */}
        <div className="skeleton h-12 w-full mt-2 bg-primary/20 rounded-xl"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;