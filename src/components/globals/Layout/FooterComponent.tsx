"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import NewsLetterForm from "../NewsLetterComponent";
import Section from "@/components/UI/Section";

export default function FooterComponent() {
  const [pageData, setPageData] = useState<any | null>(null);
  useEffect(() => {
    fetch("/api/global", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch global data");
        return res.json();
      })
      .then(setPageData)
      .catch(console.error);
  }, []);

  if (!pageData) return null;
  return (
    <div>
      <Section className="container mx-auto">
        <NewsLetterForm />
      </Section>
      <div className=" bg-gradient-1 py-8 relative">
        {/* <img
          className="absolute bottom-0 left-0 h-full object-contain hidden sm:block"
          src="/assets/imgs/aimlogowatermark.png"
          alt="aimlogo water mark"
        />
        <img
          className="absolute top-0 right-0  h-full object-cover"
          src="/assets/imgs/aimlogowatermark2.png"
          alt="aimlogo water mark"
        /> */}
        <div className="container mx-auto">
          <div className="flex justify-between sm:flex-row flex-col gap-5">
            <div>
              <img
                src={pageData.brandlogowhite.value[0]?.url}
                alt={pageData.brandlogowhite.value[0]?.name}
                className="w-42 object-contain"
              />

              <div className="mt-4">
                <span className="text-white font-medium border-b-2">
                  Follow Us On{" "}
                </span>
                <div className="flex space-x-4 mt-4 justify-start lg:justify-start">
                  <Link
                    href="https://www.facebook.com/AIMCongress"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1427_1507)">
                        <path
                          d="M34.4344 17.2174C34.4344 7.70865 26.726 0.000244141 17.2172 0.000244141C7.70844 0.000244141 3.05176e-05 7.70865 3.05176e-05 17.2174C3.05176e-05 25.811 6.29611 32.9339 14.527 34.2254V22.1943H10.1555V17.2174H14.527V13.4243C14.527 9.10921 17.0975 6.72571 21.0302 6.72571C22.914 6.72571 24.8843 7.06199 24.8843 7.06199V11.299H22.7132C20.5744 11.299 19.9074 12.6262 19.9074 13.9878V17.2174H24.6825L23.9192 22.1943H19.9074V34.2254C28.1384 32.9339 34.4344 25.811 34.4344 17.2174Z"
                          fill="white"
                        />
                        <path
                          d="M23.9191 22.1942L24.6825 17.2173H19.9074V13.9877C19.9074 12.6261 20.5744 11.2989 22.7132 11.2989H24.8842V7.06186C24.8842 7.06186 22.9139 6.72559 21.0302 6.72559C17.0974 6.72559 14.527 9.10909 14.527 13.4242V17.2173H10.1555V22.1942H14.527V34.2253C16.3096 34.5043 18.1248 34.5043 19.9074 34.2253V22.1942H23.9191Z"
                          fill="url(#paint0_linear_1427_1507)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1427_1507"
                          x1="24.8842"
                          y1="6.72559"
                          x2="8.41477"
                          y2="33.3581"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#081A2E" />
                          <stop offset="1" stopColor="#099FFC" />
                        </linearGradient>
                        <clipPath id="clip0_1427_1507">
                          <rect width="34.4344" height="34.4344" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/aim-congress/?viewAsMember=true"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1427_1517)">
                        <path
                          d="M17.2172 34.4342C26.726 34.4342 34.4344 26.7258 34.4344 17.217C34.4344 7.70816 26.726 -0.000244141 17.2172 -0.000244141C7.7084 -0.000244141 0 7.70816 0 17.217C0 26.7258 7.7084 34.4342 17.2172 34.4342Z"
                          fill="white"
                        />
                        <path
                          d="M27.5043 18.6023V25.7006H23.3889V19.0781C23.3889 17.4152 22.7947 16.2796 21.3047 16.2796C20.1676 16.2796 19.492 17.0442 19.1937 17.7844C19.0854 18.049 19.0575 18.4164 19.0575 18.7874V25.7003H14.9417C14.9417 25.7003 14.997 14.4839 14.9417 13.3228H19.0578V15.0768C19.0495 15.0907 19.0378 15.1042 19.0304 15.1174H19.0578V15.0768C19.6047 14.2353 20.58 13.0322 22.7668 13.0322C25.4744 13.0322 27.5043 14.8012 27.5043 18.6023ZM10.6364 7.35645C9.22856 7.35645 8.30752 8.28056 8.30752 9.49471C8.30752 10.6831 9.20186 11.6339 10.5824 11.6339H10.6091C12.0445 11.6339 12.937 10.6831 12.937 9.49471C12.9097 8.28056 12.0445 7.35645 10.6364 7.35645ZM8.55213 25.7006H12.6663V13.3228H8.55213V25.7006Z"
                          fill="url(#paint0_linear_1427_1517)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1427_1517"
                          x1="27.5043"
                          y1="7.35645"
                          x2="20.5357"
                          y2="29.5416"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#081A2E" />
                          <stop offset="1" stopColor="#099FFC" />
                        </linearGradient>
                        <clipPath id="clip0_1427_1517">
                          <rect width="34.4344" height="34.4344" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/aimcongress/?hl=en"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1427_1520)">
                        <path
                          d="M34.4344 17.2172C34.4344 7.7084 26.726 0 17.2172 0C7.70839 0 -1.52588e-05 7.7084 -1.52588e-05 17.2172C-1.52588e-05 26.726 7.70839 34.4344 17.2172 34.4344C26.726 34.4344 34.4344 26.726 34.4344 17.2172Z"
                          fill="white"
                        />
                        <path
                          d="M13.6313 17.2173C13.6313 15.2364 15.2367 13.6301 17.2176 13.6301C19.1985 13.6301 20.8048 15.2364 20.8048 17.2173C20.8048 19.1982 19.1985 20.8045 17.2176 20.8045C15.2367 20.8045 13.6313 19.1982 13.6313 17.2173ZM11.6921 17.2173C11.6921 20.269 14.1659 22.7428 17.2176 22.7428C20.2694 22.7428 22.7431 20.269 22.7431 17.2173C22.7431 14.1655 20.2694 11.6918 17.2176 11.6918C14.1659 11.6918 11.6921 14.1655 11.6921 17.2173ZM21.6706 11.4727C21.6705 11.7281 21.7461 11.9777 21.8879 12.1902C22.0298 12.4026 22.2314 12.5681 22.4672 12.666C22.7032 12.7639 22.9628 12.7895 23.2133 12.7398C23.4638 12.69 23.694 12.5671 23.8746 12.3866C24.0553 12.2062 24.1783 11.9761 24.2283 11.7257C24.2782 11.4751 24.2527 11.2155 24.1551 10.9795C24.0575 10.7436 23.892 10.5418 23.6798 10.3999C23.4674 10.2579 23.2178 10.182 22.9624 10.1819C22.6201 10.1821 22.2913 10.3181 22.0491 10.5601C21.807 10.8022 21.6709 11.1304 21.6706 11.4727ZM12.8703 25.9763C11.8212 25.9285 11.2509 25.7537 10.8719 25.6061C10.3696 25.4105 10.0111 25.1776 9.63424 24.8012C9.25733 24.4248 9.02404 24.0667 8.82934 23.5643C8.68163 23.1856 8.50687 22.6152 8.45917 21.566C8.40701 20.4317 8.39654 20.091 8.39654 17.2174C8.39654 14.3437 8.40788 14.004 8.45917 12.8687C8.50695 11.8196 8.68299 11.2503 8.82934 10.8705C9.0249 10.368 9.25783 10.0096 9.63424 9.63269C10.0106 9.25577 10.3687 9.02248 10.8719 8.82778C11.2507 8.68007 11.8212 8.50532 12.8703 8.45761C14.0045 8.40546 14.3453 8.39506 17.2176 8.39506C20.09 8.39506 20.4311 8.40632 21.5663 8.45761C22.6154 8.50539 23.1847 8.68144 23.5646 8.82778C24.067 9.02248 24.4255 9.25635 24.8023 9.63269C25.1792 10.009 25.4117 10.368 25.6072 10.8705C25.7549 11.2492 25.9297 11.8196 25.9774 12.8687C26.0295 14.004 26.04 14.3437 26.04 17.2174C26.04 20.091 26.0295 20.4308 25.9774 21.566C25.9296 22.6152 25.754 23.1854 25.6072 23.5643C25.4117 24.0667 25.1787 24.4252 24.8023 24.8012C24.426 25.1772 24.067 25.4105 23.5646 25.6061C23.1858 25.7539 22.6154 25.9286 21.5663 25.9763C20.432 26.0285 20.0913 26.0389 17.2176 26.0389C14.344 26.0389 14.0042 26.0285 12.8703 25.9763ZM12.7812 6.52171C11.6357 6.57388 10.8529 6.75552 10.1693 7.02153C9.46128 7.29624 8.86198 7.66476 8.26304 8.2627C7.66416 8.86064 7.29658 9.46094 7.02186 10.1689C6.75586 10.853 6.57421 11.6353 6.52205 12.7809C6.46902 13.9282 6.45688 14.295 6.45688 17.2173C6.45688 20.1396 6.46902 20.5064 6.52205 21.6537C6.57421 22.7994 6.75586 23.5816 7.02186 24.2657C7.29658 24.9732 7.66424 25.5742 8.26304 26.1719C8.86184 26.7695 9.46128 27.1376 10.1693 27.413C10.8542 27.679 11.6357 27.8607 12.7812 27.9129C13.9291 27.9651 14.2954 27.978 17.2176 27.978C20.1399 27.978 20.5067 27.9659 21.6541 27.9129C22.7997 27.8607 23.582 27.679 24.266 27.413C24.9736 27.1376 25.5733 26.7698 26.1722 26.1719C26.7711 25.574 27.1379 24.9732 27.4134 24.2657C27.6794 23.5816 27.8619 22.7993 27.9132 21.6537C27.9654 20.5055 27.9775 20.1396 27.9775 17.2173C27.9775 14.295 27.9654 13.9282 27.9132 12.7809C27.861 11.6352 27.6794 10.8525 27.4134 10.1689C27.1379 9.46138 26.7702 8.86164 26.1722 8.2627C25.5743 7.66383 24.9736 7.29624 24.2669 7.02153C23.582 6.75552 22.7996 6.57302 21.6549 6.52171C20.5076 6.46954 20.1408 6.45654 17.2185 6.45654C14.2962 6.45654 13.9291 6.46868 12.7812 6.52171Z"
                          fill="url(#paint0_linear_1427_1520)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1427_1520"
                          x1="27.9775"
                          y1="6.45654"
                          x2="19.4941"
                          y2="32.2637"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#081A2E" />
                          <stop offset="1" stopColor="#099FFC" />
                        </linearGradient>
                        <clipPath id="clip0_1427_1520">
                          <rect width="34.4344" height="34.4344" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>

                  <Link
                    href="https://www.youtube.com/@AnnualInvestmentMeeting"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1427_1514)">
                        <path
                          d="M34.4344 17.2172C34.4344 7.7084 26.726 0 17.2172 0C7.70843 0 3.05176e-05 7.7084 3.05176e-05 17.2172C3.05176e-05 26.726 7.70843 34.4344 17.2172 34.4344C26.726 34.4344 34.4344 26.726 34.4344 17.2172Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.6378 10.144C26.5596 10.3922 27.2865 11.119 27.5347 12.0409C27.9956 13.725 27.9779 17.2351 27.9779 17.2351C27.9779 17.2351 27.9779 20.7274 27.5347 22.4116C27.2865 23.3334 26.5596 24.0603 25.6378 24.3084C23.9536 24.7516 17.2171 24.7516 17.2171 24.7516C17.2171 24.7516 10.4983 24.7516 8.79648 24.2907C7.87465 24.0425 7.14783 23.3157 6.89964 22.3939C6.45645 20.7274 6.45645 17.2174 6.45645 17.2174C6.45645 17.2174 6.45645 13.725 6.89964 12.0409C7.14783 11.119 7.89237 10.3744 8.79648 10.1262C10.4806 9.68311 17.2171 9.68311 17.2171 9.68311C17.2171 9.68311 23.9536 9.68311 25.6378 10.144ZM20.6741 17.2174L15.0721 20.4438V13.9909L20.6741 17.2174Z"
                          fill="url(#paint0_linear_1427_1514)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1427_1514"
                          x1="27.978"
                          y1="9.68311"
                          x2="23.6018"
                          y2="28.6976"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#081A2E" />
                          <stop offset="1" stopColor="#099FFC" />
                        </linearGradient>
                        <clipPath id="clip0_1427_1514">
                          <rect width="34.4344" height="34.4344" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>

                  <Link href="https://x.com/AIM_Congress" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle
                        cx="18.1924"
                        cy="18.1926"
                        r="17.0554"
                        fill="white"
                      />
                      <path
                        d="M8.56749 27.448H10.8415L16.9132 20.5463L22.1947 27.4366H28.3688L20.2675 16.7259L27.1237 8.93726H24.8497L19.2157 15.3387L14.3834 8.94294H8.01035L15.8501 19.1705L8.5618 27.4537L8.56749 27.448ZM11.4726 10.6428H13.542L24.9463 25.7311H23.0418L11.4783 10.6428H11.4726Z"
                        fill="url(#paint0_linear_1427_1510)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1427_1510"
                          x1="28.3688"
                          y1="8.93726"
                          x2="21.6167"
                          y2="31.5216"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#081A2E" />
                          <stop offset="1" stopColor="#099FFC" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid  gap-2">
              {pageData.footermenuitems.linkedItems.map((item: any) => (
                <Link
                  key={item.system.id}
                  href={item.elements.link.value}
                  className="text-white text-md font-medium hover:text-gray-200 cursor-pointer"
                >
                  {item.elements.name.value}
                </Link>
              ))}
            </div>

            <div className="">
              <h4 className="text-white text-md font-medium hover:text-gray-200 mb-3">
                Contact Us
              </h4>
              <div
                className="text-white prose prose-a:text-white prose-h3:text-white"
                dangerouslySetInnerHTML={{ __html: pageData.contactinfo.value }}
              />
            </div>
          </div>

          <hr className="text-white my-3" />

          <div className="flex sm:justify-end">
            <p className="text-white">{pageData.copyrighttext.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
