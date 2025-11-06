import HeroSection from "@/components/home/HeroSection";
import InitiativeSection from "@/components/home/InitiativeSection";
import PartnerShipSection from "@/components/home/PartnerShipSection";
import Heading2 from "@/components/UI/Heading2";
import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import Image from "next/image";

export default async function Home() {
  const pageResponse = await deliveryClient
    .item("home_page")
    .depthParameter(3)
    .toPromise();

  const pageData = pageResponse.data.item.elements as any;
  if (!pageData) return null;

  return (
    <div>
      <HeroSection
        bannerheading={pageData.bannerheading.value}
        bannersubheading={pageData.bannersubheading.value}
        bannerimage={pageData.bannerimage.value[0]?.url}
        bannervideosrc={pageData.bannervideolink.value}
        ctabuttons={pageData.bannercta?.linkedItems}
      />

      <Section>
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl text-primary">
            {pageData.aboutheading.value}
          </h2>
          <div
            className="prose max-w-none mt-8"
            dangerouslySetInnerHTML={{ __html: pageData.aboutcontent.value }}
          />
        </div>
      </Section>

      <InitiativeSection
        heading={pageData.initiativesheading.value}
        initiativeItems={pageData.initiativeitems.linkedItems}
      />

      <PartnerShipSection
        heading={pageData.partnershipheading.value}
        subheading={pageData.partnershipsubheading.value}
        items={pageData.partnershipitems.linkedItems}
      />

      <Section className="bg-gradient-2 inline-padding" id="Membership">
        <div className="container mx-auto">
          <Heading2 className="mb-3 text-center text-gradient-1">
            {pageData.membershipcategoryheading.value}
          </Heading2>
          <p className="max-w-3xl prose mx-auto text-center">
            {pageData.membershipcategorysubheading.value}
          </p>

          {pageData.membershipcategoryitems.linkedItems.length > 0 && (
            <div className="mt-8 flex flex-col gap-10">
              {pageData.membershipcategoryitems.linkedItems.map(
                (item: any, index: number) => {
                  const isOdd = index % 2 === 1;
                  return (
                    <div
                      key={item.system.id}
                      className={`sm:flex rounded-3xl overflow-hidden ${
                        isOdd ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`sm:flex-row flex-col    bg-gradient-1 p-5 gap-5 items-start sm:w-1/4  border-4 border-b-8  border-primary ${
                          isOdd ? "rounded-r-3xl" : "rounded-l-3xl"
                        }`}
                      >
                        <img
                          src={item.elements.image.value[0]?.url}
                          alt={item.elements.image.value[0]?.name}
                          className="max-w-[120px] object-contain"
                        />
                        <h4 className="text-white text-2xl font-medium">
                          {item.elements.name.value}
                        </h4>
                      </div>

                      {/* Content Box */}
                      <div
                        className={`p-5 bg-white md:w-1/2 border border-primary ${
                          isOdd ? "rounded-l-3xl" : "rounded-r-3xl"
                        }`}
                      >
                        <div
                          className="prose max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: item.elements.content.value,
                          }}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

export const revalidate = 0;
