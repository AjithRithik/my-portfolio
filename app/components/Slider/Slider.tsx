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
    modules={[Autoplay]}
  >
    <SwiperSlide key={1}>
      <div className="relative h-20">
        <Image src="/nrl.jpg" alt="nrl client" fill className="object-contain" />
      </div>
    </SwiperSlide>
    <SwiperSlide key={2}>
      <div className="relative h-20">
        <Image src="/afl.png" alt="nrl client" fill className="object-contain" />
      </div>
    </SwiperSlide>
    <SwiperSlide key={4}>
      <div className="relative h-20">
        <Image src="/just-act.png" alt="nrl client" fill className="object-contain" />
      </div>
    </SwiperSlide>
    <SwiperSlide key={5}>
      <div className="relative h-20">
        <Image src="/medzlegal.png" alt="nrl client" fill className="object-contain" />
      </div>
    </SwiperSlide>
    <SwiperSlide key={6}>
      <div className="relative h-20">
        <Image src="/purblebird.webp" alt="nrl client" fill className="object-contain" />
      </div>
    </SwiperSlide>
    <SwiperSlide key={7}>
      <div className="relative h-14">
        <Image src="/blu.svg" alt="nrl client" fill className="object-contain" />
      </div>
    </SwiperSlide>
    <SwiperSlide key={8}>
      <div className="relative h-20 w-28">
        <Image src="/pulze.svg" alt="nrl client" fill className="object-contain" />
      </div>
    </SwiperSlide>
    <SwiperSlide key={9}>
      <div className="relative h-20">
        <Image src="/ctyt-logo.png" alt="nrl client" fill className="object-contain" />
      </div>
    </SwiperSlide>
  </Swiper>
);
