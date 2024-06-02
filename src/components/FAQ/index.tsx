"use client";
import React from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className="max-w-[85rem] px-8 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">
          Suas perguntas, respondidas
        </h2>
        <p className="mt-1 text-gray-600">
          Respostas às perguntas mais frequentes.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 ${
                index === 0 ? "active" : ""
              }`}
              id={`hs-basic-with-title-and-arrow-stretched-heading-${item.id}`}
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${item.id}`}
              >
                {item.question}
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id={`hs-basic-with-title-and-arrow-stretched-collapse-${item.id}`}
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  index === 0 ? "block" : "hidden"
                }`}
                aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${item.id}`}
              >
                <p className="text-gray-800">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
