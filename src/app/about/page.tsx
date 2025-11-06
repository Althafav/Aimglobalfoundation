import Heading2 from "@/components/UI/Heading2";
import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import Image from "next/image";
import React from "react";

export default async function page() {
  const pageResponse = await deliveryClient
    .item("about_page_2026")
    .depthParameter(4)
    .toPromise();

  const pageData = pageResponse.data.item.elements as any;
  if (!pageData) return null;
  return (
    <div className="bg-gradient-2 inline-padding">
      <div className="container mx-auto">
        <Heading2 className="text-gradient-1 text-center">
          {pageData.aboutheading.value}
        </Heading2>

        {pageData.missionvisionitems.linkedItems.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-10 mt-8">
            {pageData.missionvisionitems.linkedItems.map((item: any) => {
              return (
                <div
                  key={item.system.id}
                  className="relative rounded-3xl w-full h-[350px] p-10 overflow-hidden flex items-end"
                >
                  <Image
                    width={600}
                    height={400}
                    src={item.elements.image.value[0]?.url}
                    alt={item.elements.image.value[0]?.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative">
                    <h4 className="text-white mb-3 text-3xl font-bold">
                      {item.elements.name.value}
                    </h4>
                    <div
                      className="prose max-w-none text-white"
                      dangerouslySetInnerHTML={{
                        __html: item.elements.content.value,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Section>
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-medium text-gradient-1 text-center">
            {pageData.objectivesheading.value}
          </h3>

          {pageData.objectivesitems.linkedItems.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-10 mt-8">
              {pageData.objectivesitems.linkedItems.map((item: any) => {
                return (
                  <div
                    key={item.system.id}
                    className=" rounded-3xl w-full h-full overflow-hidden "
                  >
                    <div className="p-5 bg-[#F8F8F8] h-[200px] flex flex-col items-center justify-start">
                      <h4 className="text-primary mb-3 text-xl font-bold text-center uppercase">
                        {item.elements.name.value}
                      </h4>
                      <div
                        className="prose max-w-none leading-tight text-[#1B3966] text-center"
                        dangerouslySetInnerHTML={{
                          __html: item.elements.content.value,
                        }}
                      />
                    </div>

                    <Image
                      width={600}
                      height={400}
                      src={item.elements.image.value[0]?.url}
                      alt={item.elements.image.value[0]?.name}
                      className="aspect-video"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}


export const revalidate = 0;