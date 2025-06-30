"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useEffect } from "react";

type Props = {
  images: string[];
  label: string;
  link: string;
  icon?: string;
};

export default function CategoryTileCarousel({ images, label, link, icon }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider({ loop: true, slides: { perView: 1 } });

  useEffect(() => {
    if (!instanceRef.current) return;
    let timeout: any;
    let mouseOver = false;
    const slider = instanceRef.current;

    function clearNextTimeout() { clearTimeout(timeout); }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => slider.next(), 3000);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => { mouseOver = true; clearNextTimeout(); });
      slider.container.addEventListener("mouseout", () => { mouseOver = false; nextTimeout(); });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);

    return () => clearTimeout(timeout);
  }, [instanceRef]);

  return (
    <a href={link} className="flex flex-col items-center p-0 bg-white rounded-xl shadow hover:shadow-md transition transform hover:-translate-y-1 overflow-hidden group h-52 md:h-60">
      <div ref={sliderRef} className="keen-slider w-full h-36 md:h-44 rounded-t-xl">
        {images.length === 0 ? (
          <div className="keen-slider__slide w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
        ) : images.map((src, i) => (
          <div key={src+i} className="keen-slider__slide w-full h-full">
            <img src={src} alt={`${label} ${i + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center flex-1 justify-center w-full py-2">
        {icon && <div className="text-2xl mb-1">{icon}</div>}
        <div className="font-semibold text-orange-700 text-lg text-center">{label}</div>
      </div>
    </a>
  );
}
