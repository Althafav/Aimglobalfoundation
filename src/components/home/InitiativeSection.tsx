"use client";
import React, { useState } from "react";
import Section from "../UI/Section";
import Heading2 from "../UI/Heading2";

export default function InitiativeSection({
  heading,
  subheading,
  initiativeItems,
}: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section className="py-12 sm:py-16 bg-gradient-1" id="Initiatives">
      <div className="container mx-auto">
        {/* Section Heading */}
        <Heading2 className=" text-gradient-2 mb-10 text-center ">
          {heading}
        </Heading2>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {initiativeItems.map((item: any, index: number) => (
            <button
              key={item.system.id}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary text-white font-semibold shadow-md"
                  : "bg-white text-blue-700 font-semibold shadow-md"
              }`}
            >
              {item.elements.heading.value}
            </button>
          ))}
        </div>

        {initiativeItems.map((item: any, index: number) => (
          <div
            key={item.system.id}
            className={`transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="">
              <h3 className="text-3xl font-semibold mb-3 text-primary text-center">
                {item.elements.heading.value}
              </h3>
              <p className="text-white mb-6 text-center max-w-3xl mx-auto">
                {item.elements.subheading.value}
              </p>

              {/* Features Grid */}
              <div className="">
                {item.elements.featureitems?.linkedItems?.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {item.elements.featureitems.linkedItems.map(
                      (featureItem: any) => (
                        <div
                          key={featureItem.system.id}
                          className="p-4 w-full bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all"
                        >
                          <h4 className="text-lg font-medium mb-2 text-gradient-1">
                            {featureItem.elements.name.value}
                          </h4>
                          <div
                            className="text-gray-600 text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: featureItem.elements.content.value,
                            }}
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
