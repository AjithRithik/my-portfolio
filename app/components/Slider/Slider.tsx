"use client";

import React from "react";

// Swiper components, modules and styles
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export const Slider = () => (
  <Swiper
    autoplay={true}
    loop={true}
    slidesPerView={4}
    spaceBetween={40}
    modules={[Autoplay]}
    breakpoints={{
      280: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
    }}
  >
    <SwiperSlide key={1}>
      <div className="relative h-20">
        <Image
          src="/projects/nrl.jpg"
          alt="nrl client"
          fill
          className="object-contain"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide key={2}>
      <div className="relative h-20">
        <Image
          src="/projects/afl.png"
          alt="nrl client"
          fill
          className="object-contain"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide key={3}>
      <div className="relative h-20">
        <Image
          src="/projects/just-act.png"
          alt="nrl client"
          fill
          className="object-contain"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide key={4}>
      <div className="relative h-20">
        <Image
          src="/projects/medzlegal.png"
          alt="nrl client"
          fill
          className="object-contain"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide key={5}>
      <div className="relative h-20">
        <Image
          src="/projects/purblebird.webp"
          alt="nrl client"
          fill
          className="object-contain"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide key={6}>
      <div className="relative h-20">
        <Image
          src="/projects/ctyt-logo.png"
          alt="nrl client"
          fill
          className="object-contain"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide key={7}>
      <div className="relative h-16">
        <Image
          src="/projects/hey.svg"
          alt="hey hey"
          fill
          className="object-contain"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide key={8}>
      <div className="relative h-16">
        <Image
          src="/projects/frankdarling.svg"
          alt="hey hey"
          fill
          className="object-contain"
        />
      </div>
    </SwiperSlide>
  </Swiper>
);
