"use client";

import { useState } from "react";
import Image from "next/image";
import CustomButton from "./common/CustomButton";

const images = ["/images/hero-1.jpg", "/images/dummy-hero1.png"];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };
  return (
    <div className="">
      <Image
        src={images[currentImage]}
        fill
        alt="hero"
        className="relative z-[-1]"
      />
      <div className="absolute inset-x-0 bottom-10">
        <div className="text-center text-white">
          <p className="text-2xl md:text-3xl">The Best Look</p>
          <span className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Anytime Anywhere
          </span>
          <p className="block text-xl md:text-2xl mt-6">
            Starts from 10,000 MMK
          </p>
          <CustomButton
            title="View"
            styles="rounded-full bg-zinc-950/[.5] py-2 px-7 mt-5"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-5 translate-y-[-50%]">
        <CustomButton
          icon="/icons/left-arrow.svg"
          styles="rounded-lg bg-zinc-950/[.5] w-14 h-44"
          handleClick={prevImage}
        />
      </div>
      <div className="absolute top-1/2 right-5 translate-y-[-50%]">
        <CustomButton
          icon="/icons/right-arrow.svg"
          styles="rounded-lg bg-zinc-950/[.5] w-14 h-44"
          handleClick={nextImage}
        />
      </div>
    </div>
  );
};

export default Hero;
