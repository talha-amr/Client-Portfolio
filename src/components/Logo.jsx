import React from "react";

export default function Logo({ variant = "red", mobile = false }) {
  const src = variant === "red" ? "/ZB-Red.svg" : "/ZB-White.svg";

  return (
    <img
      src={src}
      alt="ZB Logo"
      className={`${
        mobile
          ? "w-[3.1rem]"       // ✅ fixed size for mobile
          : "w-[3.5vw] " // ✅ responsive for desktop
      } h-auto`}
    />
  );
}
