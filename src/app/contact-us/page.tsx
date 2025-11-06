// app/(routes)/register-interest/page.tsx

import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";

import { cache } from "react";
import RegisterInterestForm from "./RegisterInterestForm";

type Search = {
  attendAs?: string;
  mainsource?: string;
  subsource?: string;
};

const getPageData = cache(async () => {
  const res = await deliveryClient
    .item("contact_us_form")
    .depthParameter(2)
    .toPromise();
  return res.data.item.elements as any;
});

async function getJSON<T>(url: string): Promise<T> {
  // Server-side fetch with no caching because this is dynamic data
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return (await res.json()) as T;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const pageData = await getPageData();

  // Pull from query string (e.g., ?attendAs=Speaker&mainsource=...&subsource=...)
  const params = await searchParams;

  const mainsource = params.mainsource ?? "";
  const subsource = params.subsource ?? "";

  // Countries and codes from your API
  const CountriesData = await getJSON<{ label: string; value: string }[]>(
    "https://api.strategic.ae/api/generic/countries"
  );
  const CountriesCode = await getJSON<{ label: string; value: string }[]>(
    "https://api.strategic.ae/api/generic/countrycodes"
  );

  return (
    <div className=" mb-10">
      <div>
        <div className="">
          <div className="register-interest-form-wrapper-2026">
            {/* Client component handles all browser logic */}
            <RegisterInterestForm
              pageData={pageData}
              CountriesData={CountriesData}
              CountriesCode={CountriesCode}
              mainsource={mainsource}
              subsource={subsource}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 0;
