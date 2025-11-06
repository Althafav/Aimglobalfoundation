"use client";
import React, { useCallback, useEffect, useState } from "react";
import Section from "../UI/Section";
import Heading2 from "../UI/Heading2";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";

export default function PartnerShipSection({
  heading,
  subheading,
  items,
}: any) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []); // wait for client render

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 3000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // 👇 Prevent SSR/CSR mismatch
  if (!isClient) {
    return (
      <Section>
        <div className="container mx-auto">
          <Heading2 className="mb-3 text-center text-primary">
            {heading}
          </Heading2>
          <p className="max-w-4xl prose mx-auto text-center">{subheading}</p>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="container mx-auto relative">
        <Heading2 className="mb-3 text-center text-primary">{heading}</Heading2>
        <p className="max-w-4xl prose mx-auto text-center">{subheading}</p>

        <div className="overflow-hidden mt-8" ref={emblaRef}>
          <div className="flex -mx-2">
            {items?.length > 0 &&
              items.map((item: any) => (
                <div
                  key={item.system.id}
                  className="bg-[#F8F8F8] p-5 rounded-2xl shrink-0 mx-2  hover-lift-with-shadow-lg
                    flex-[0_0_calc(100%)] sm:flex-[0_0_calc(100%/3)] "
                >
                  <h4 className="mb-3 text-gradient-1 text-xl font-medium">
                    {item.elements.name.value}
                  </h4>
                  <div
                    className="prose max-w-none text-primary"
                    dangerouslySetInnerHTML={{
                      __html: item.elements.content.value,
                    }}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <div className="hidden md:flex items-center gap-3 ">
            <button
              onClick={scrollPrev}
              className="bg-white shadow-md hover:bg-primary hover:text-white rounded-full p-3 transition-colors ml-2"
              aria-label="Previous slide"
            >
              <MoveLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white shadow-md hover:bg-primary hover:text-white rounded-full p-3 transition-colors mr-2"
              aria-label="Next slide"
            >
              <MoveRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
