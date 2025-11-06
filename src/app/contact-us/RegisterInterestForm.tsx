"use client";

import { useEffect, useCallback } from "react";
import { businessTypes } from "@/constants/NatureOfBusiness";
import JsLoader from "@/modules/JsLoader";
import { ChevronDown } from "lucide-react";
import SuccessComponent from "./SuccessComponent";
import Section from "@/components/UI/Section";

type Country = { label: string; value: string };

export default function RegisterInterestForm({
  pageData,
  CountriesData,
  CountriesCode,

  mainsource,
  subsource,
}: {
  pageData: any;
  CountriesData: Country[];
  CountriesCode: Country[];

  mainsource: string;
  subsource: string;
}) {
  useEffect(() => {
    JsLoader.loadFile(`/assets/js/registerInterest.js`);
  }, []);
  const handleCheck = useCallback(
    (checkboxId: string, yesFieldId: string, noFieldId: string) => {
      const checkbox = document.getElementById(
        checkboxId
      ) as HTMLInputElement | null;
      const yesInput = document.getElementById(
        yesFieldId
      ) as HTMLInputElement | null;
      const noInput = document.getElementById(
        noFieldId
      ) as HTMLInputElement | null;

      if (!checkbox || !yesInput || !noInput) {
        console.warn("Missing checkbox or hidden input fields.");
        return;
      }

      const checked = !!checkbox.checked;
      yesInput.checked = checked;
      noInput.checked = !checked;
    },
    []
  );

  return (
    <div className="inline-padding">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="py-20 ">
            <h1 className="text-4xl text-gradient-1 font-medium mb-3">
              {pageData.bannerheading.value}
            </h1>
            <div
              className="prose max-w-none text-lg"
              dangerouslySetInnerHTML={{
                __html: pageData.bannerdescription.value,
              }}
            />
          </div>

          <div className="sm:col-span-2">
            <form
              method="POST"
              action="//ac.strategic.ae/proc.php"
              id="_form_466_"
              noValidate
              data-styles-version="3"
              className="w-full"
            >
              <input type="hidden" name="u" value="466" />
              <input type="hidden" name="f" value="466" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input
                type="hidden"
                name="or"
                value="29ef50fd5c0bd3f7a2c794ee8cd4d754"
              />
              <input
                type="hidden"
                name="field[38]"
                value="AIM-Global-Foundation-Contact Us"
              />

              {/* Fields Grid */}
              <div className="grid gap-6 md:grid-cols-2 _form-content ">
                {/* First Name */}
                <fieldset className="rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">
                    First Name
                  </legend>
                  <input
                    type="text"
                    itemID="firstname"
                    name="firstname"
                    className="w-full rounded-full px-5 py-2 outline-none"
                    placeholder=""
                    required
                  />
                </fieldset>

                {/* Last Name */}
                <fieldset className="rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">
                    Last Name
                  </legend>
                  <input
                    type="text"
                    itemID="lastname"
                    name="lastname"
                    className="w-full rounded-full px-5 py-2 outline-none"
                    placeholder=""
                    required
                  />
                </fieldset>

                {/* Organization */}
                <fieldset className="rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">
                    Organization
                  </legend>
                  <input
                    type="text"
                    id="customer_account"
                    name="customer_account"
                    className="w-full rounded-full px-5 py-2 outline-none"
                    placeholder=""
                  />
                </fieldset>

                {/* Email */}
                <fieldset className="rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">Email</legend>
                  <input
                    type="text"
                    itemID="email"
                    name="email"
                    className="w-full rounded-full px-5 py-2 outline-none"
                    placeholder=""
                  />
                </fieldset>

                {/* Job Title */}
                <fieldset className="rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">
                    Job Title
                  </legend>
                  <input
                    type="text"
                    itemID="field[23]"
                    name="field[23]"
                    className="w-full rounded-full px-5 py-2 outline-none"
                    placeholder=""
                  />
                </fieldset>

                {/* Phone */}
                <fieldset className=" rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">
                    Mobile Phone
                  </legend>

                  <div className="flex items-center w-full">
                    {/* Country Code */}
                    <select
                      name="phoneCode"
                      className="rounded-l-full max-w-[150px] px-5 py-2 outline-none  border-r-2 border-teal-200 text-gray-800 appearance-none cursor-pointer"
                    >
                      {CountriesCode.map((item: any, index: number) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>

                    {/* Phone Input */}
                    <input
                      type="text"
                      itemID="field[12]"
                      name="field[12]"
                      className="flex-1 w-full rounded-r-full px-5 py-2 outline-none "
                      placeholder="Enter your number"
                    />
                  </div>
                </fieldset>

                {/* Nationality */}
                <fieldset className="relative rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">Country</legend>

                  {/* Wrapper for select */}
                  <div className="relative flex items-center">
                    <select
                      name="field[3]"
                      itemID="field[3]"
                      className="w-full text-sm rounded-full px-5 py-3 pr-10 outline-none  text-gray-800 appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="">Select Country</option>
                      {CountriesData.map((country: any, index: number) => (
                        <option key={index} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>

                    {/* Dropdown icon - doesn't block clicks */}
                    <ChevronDown className="absolute right-5 text-primary pointer-events-none" />
                  </div>
                </fieldset>

                {/* Nature of Business */}
                <fieldset className="relative rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">
                    Nature of Business
                  </legend>

                  {/* Wrapper for select */}
                  <div className="relative flex items-center">
                    <select
                      name="field[4]"
                      itemID="field[4]"
                      className="w-full text-sm rounded-full px-5 py-3 pr-10 outline-none  text-gray-800 appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="">Select Nature of your Business</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>

                    {/* Dropdown icon - doesn't block clicks */}
                    <ChevronDown className="absolute right-5 text-primary pointer-events-none" />
                  </div>
                </fieldset>

                {/* Interested  As */}
                <div className="flex flex-col gap-2 ">
                  <p className="text-sm font-medium text-gray-700">
                    AIM Foundation Interest
                    <span className="text-red-600">*</span>
                  </p>
                  <div className="flex flex-wrap flex-col gap-3">
                    {["Membership", "Partnership"].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-2 hover:border-blue-500 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="field[338][]"
                          value={label}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <fieldset className="rounded-full border-2 border-primary focus-within:border-primary transition">
                  <legend className="px-2 text-primary text-sm">
                    AIM Foundation Specific Interest
                  </legend>
                  <textarea
                    id="field[337]"
                    name="field[337]"
                    className="w-full rounded-full px-5 py-2 outline-none"
                  ></textarea>
                </fieldset>

                {/* reCAPTCHA + Submit */}
                <div className="flex items-start gap-4 flex-col">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"
                  />
                  <button
                    id="_form_466_submit"
                    type="submit"
                    className="rounded-full bg-secondary bg-primary hover:bg-teal-700 text-white px-6 py-3 transition flex items-center justify-center gap-2"
                  >
                    <span className="btn-text">Submit</span>
                    <span className="spinner hidden  border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
                  </button>
                </div>
              </div>

              <div className="_form-thank-you" style={{ display: "none" }}>
                <SuccessComponent />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
