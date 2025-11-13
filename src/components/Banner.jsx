import React from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Manage Your AI Models Smartly",
      tagline: "Efficient • Organized • Insightful",
      text: "Keep all your AI models in one place — track frameworks, datasets, and performance metrics effortlessly.",
      ctaText: "Explore All Models",
      ctaLink: "/allmodel",
      gradient: "from-primary/80 via-secondary/80 to-accent/80",
    },
    {
      id: 2,
      title: "Your Personal AI Model Inventory",
      tagline: "Built for Developers, Designed for Clarity",
      text: "Experience a seamless way to catalog and manage AI models — optimized for modern workflows.",
      ctaText: "Add New Model",
      ctaLink: "/addmodel",
      gradient: "from-accent/80 via-info/80 to-success/80",
    },
    {
      id: 3,
      title: "Collaborate. Share. Scale.",
      tagline: "Empowering AI Teams Globally",
      text: "Join a growing AI community where developers collaborate and innovate on model management.",
      ctaText: "Get Started Now",
      ctaLink: "/auth/register",
      gradient: "from-secondary/80 via-warning/80 to-error/80",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="carousel w-full h-[80vh] md:h-[85vh] lg:h-[90vh] bg-base-100">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className={`carousel-item relative w-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center transition-all duration-700`}
          >
            <div className="text-center text-base-content p-8 md:p-16 relative z-10">
              <p className="text-sm md:text-lg uppercase tracking-widest font-semibold mb-4 text-base-content/90">
                {slide.tagline}
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-6 text-base-content">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-base-content/90 max-w-2xl mx-auto mb-8">
                {slide.text}
              </p>
              <button
                onClick={() => navigate(slide.ctaLink)}
                className="btn btn-lg btn-accent text-accent-content px-8 py-3 rounded-full font-semibold shadow-2xl shadow-accent/40 hover:scale-[1.03] transition-transform duration-300"
              >
                {slide.ctaText}
              </button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-6 right-6 top-1/2 z-20">
              <a
                href={`#slide${index === 0 ? slides.length : index}`}
                className="btn btn-circle bg-base-100/30 hover:bg-base-100/50 text-base-content border-none backdrop-blur-sm shadow-md"
              >
                ❮
              </a>
              <a
                href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle bg-base-100/30 hover:bg-base-100/50 text-base-content border-none backdrop-blur-sm shadow-md"
              >
                ❯
              </a>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              {slides.map((s, i) => (
                <a
                  key={s.id}
                  href={`#slide${s.id}`}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === index
                      ? "bg-base-content scale-125 shadow-md"
                      : "bg-base-content/50 hover:bg-base-content/70"
                  }`}
                ></a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
