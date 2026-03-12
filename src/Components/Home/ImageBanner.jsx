import React from "react";
import BuzingBeeBannerMobile from "../../assets/image/BuzzingBee_banner.jpg";
import BuzingBeeBanner from "../../assets/image/BuzingBee_banner.png";

const getAssetSrc = (asset) =>
  typeof asset === "string" ? asset : asset?.src || "";

export default function ImageBanner() {
  return (
    <div className="sm:mt-8">
      <img
        src={getAssetSrc(BuzingBeeBannerMobile)}
        alt="benner"
        className="m-auto sm:hidden w-[90vw] rounded-2xl mt-5 sm:mt-0 h-40 sm:h-auto object-cover"
      />
      <img
        src={getAssetSrc(BuzingBeeBanner)}
        alt="benner"
        className="m-auto hidden sm:block w-[90vw] rounded-2xl mt-5 sm:mt-0 h-40 sm:h-auto object-contain"
      />
    </div>
  );
}
