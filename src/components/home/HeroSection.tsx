"use client";

import ButtonComponent from "../UI/ButtonComponent";

export default function HeroSection({
  bannerheading,
  bannersubheading,
  datevenue,
  ctabuttons,
  bannerimage,
  bannervideosrc,
}: any) {
  return (
    <div className=" relative py-20 sm:py-20  flex items-center hero-section-wrapper">
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,1)_31.08%,rgba(255,255,255,0)_100.04%)]"></div> */}
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gradient-1 mb-3">
              {bannerheading}
            </h1>
            <p className="text-lg max-w-lg">{bannersubheading}</p>

            {ctabuttons && (
              <div className="text-white mt-5">
                {ctabuttons.map((item: any) => {
                  return (
                    <ButtonComponent
                      variant="primary"
                      key={item.system.id}
                      name={item.elements.name.value}
                      link={item.elements.link.value}
                    />
                  );
                })}
              </div>
            )}
          </div>

          <div className="rounded-3xl overflow-hidden">
            <video
              width="100%"
              autoPlay
              loop
              className="brightness-50 h-full w-full object-cover object-top"
              playsInline
              muted
              poster={bannerimage}
              controls={false}
              preload="auto"
            >
              <source
                src={bannervideosrc}
                type="video/mp4"
                className=""
                width="100%"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
