import Section from "@/components/UI/Section";
import Head from "next/head";
import React from "react";

export default function SuccessComponent() {
  return (
    <Section className="">
      <p>
        Thank you for your submission! <br />
        <br />
        We have successfully received your information. Our team is currently
        reviewing your details and will take the necessary actions promptly.
        <br />
        Should you have any questions or require further clarification, please
        don't hesitate to reach out to us through our contact page.
        <br />
        <br />
        We appreciate your interest and engagement with AIM Global Foundation.{" "}
        <br />
        <br />
        Sincerley,
        <br />
        <img
          src="/assets/logos/aim global foundation.png"
          alt="AIM Global Foundation"
          className="w-40 object-contain"
        />
      </p>
    </Section>
  );
}
