import React from "react";

export default function Logo({ variant = "red", mobile = false }) {
  let src;

  switch (variant) {
    case "white":
      src = "/ZB-White.svg";
      break;
    case "transparent":
      src = "/ZB-Transparent.svg";
      break;
    case "red":
    default:
      src = "/ZB-Red.svg";
      break;
  }

  return (
    <img
      src={src}
      alt="ZB Logo"
      className={`${
        mobile ? "w-[3rem]" : "w-[3.5vw]"
      } h-auto`}
    />
  );
}
