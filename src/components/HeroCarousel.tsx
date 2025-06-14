// ...other imports
import Sidebar from "./Sidebar";
import Link from "next/link";
import { products } from "@/data/products";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useEffect } from "react";

// ... heroImages, foodProducts, etc...

export default function HomePage() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    let timeout: NodeJS.Timeout;
    let mouseOver = false;
    const slider = instanceRef.current;
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 3200);
    }
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);

    return () => clearTimeout(timeout);
  }, [instanceRef]);

  return (
    <div className="flex min-h-screen font-sans w-full">
      <Sidebar />
      <main className="flex-1 w-full ml-0 bg-transparent">
        {/* HERO CAROUSEL */}
        <section
          id="home"
          className="relative flex items-center justify-center w-full h-[48vh] md:h-[64vh] overflow-hidden"
        >
          {/* Carousel background */}
          <div
            ref={sliderRef}
            className="keen-slider absolute inset-0 w-full h-full"
          >
            {heroImages.map((src, i) => (
              <div className="keen-slider__slide w-full h-full" key={src}>
                <img
                  src={src}
                  alt={`Hero ${i + 1}`}
                  className="object-cover w-full h-full"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          {/* Overlay for text and fade */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4 bg-gradient-to-b from-black/30 via-black/40 to-black/30">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
              Taste of Morocco
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-medium max-w-xl mx-auto drop-shadow">
              Discover vibrant Moroccan cuisine and authentic artisanal treasures—crafted for your home.
            </p>
            <a
              href="#catalog"
              className="inline-block mt-8 px-8 py-3 text-base md:text-lg font-semibold rounded-full border-2 border-amber-400 bg-amber-500 hover:bg-white hover:text-amber-600 shadow-lg transition-all duration-200"
            >
              Shop Collection
            </a>
          </div>
        </section>

        {/* ...the rest of your sections as before (do not change)... */}
