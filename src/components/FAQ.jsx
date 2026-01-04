import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How do I add a new AI model to the inventory?",
      answer:
        "Once you are logged in, navigate to the 'Add Model' page from the navbar. Fill out the required details like name, framework, and image URL, then click 'Save Model'. Your model will be instantly added to our global database.",
    },
    {
      id: 2,
      question: "Is this platform free for open-source researchers?",
      answer:
        "Absolutely! AI Inventory is designed to support the research community. You can browse, search, and manage open-source models without any subscription fees.",
    },
    {
      id: 3,
      question: "What frameworks are currently supported?",
      answer:
        "We support all major machine learning frameworks including PyTorch, TensorFlow, Keras, and Scikit-learn. You can also categorize models under 'Other' if they use specialized libraries.",
    },
    {
      id: 4,
      question: "How can I update or delete my submitted models?",
      answer:
        "You can manage your models through your personal Dashboard. From there, you will have options to edit the model details or remove them from the inventory entirely.",
    },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Title & Info */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary text-3xl mb-6">
              <FaQuestionCircle />
            </div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Support Center
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-base-content leading-tight mb-6">
              Common <br /> <span className="text-primary">Questions</span>
            </h1>
            <p className="text-base-content/60 leading-relaxed mb-8">
              Everything you need to know about the AI Model Inventory. Can't
              find the answer you're looking for? Reach out to our support team.
            </p>
            <Link to="/contact">
              <button className="btn btn-primary btn-outline rounded-full px-8 hover:scale-105 transition-transform">
                Contact Support
              </button>
            </Link>
          </div>

          {/* Right Side: Accordions */}
          <div className="lg:w-2/3 space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="collapse collapse-plus bg-base-200 rounded-[1.5rem] border border-base-300 transition-all duration-300 hover:border-primary/30"
              >
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold text-base-content py-5">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70 leading-relaxed pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
