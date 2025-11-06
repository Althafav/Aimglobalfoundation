import React from "react";

export default function Heading2({ children, className }: any) {
  return (
    <h2
      className={` text-2xl sm:text-4xl font-semibold leading-12 mb-3 ${className}`}
    >
      {children}
    </h2>
  );
}
