// src/app/page.tsx
'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import React, { useEffect } from 'react';
import SocialMediaButton from '@/components/SocialMediaButton';
import CategoryTileCarousel from '@/components/CategoryTileCarousel';
import { products } from '@/data/products';

const heroImages = [
  '/hero.jpg',
  '/IMG_20220827_150750.jpg',
  '/IMG_20220827_152816.jpg',
];

const categories = [
  { label: 'Food', href: '/categories/food' },
  { label: 'Ceramics', href: '/categories/ceramics' },
  { label: 'Berber Carpets, Rugs, and Poufs', href: '/categories/berber-rugs' },
  { label: 'Leather Goods', href: '/categories/leather-goods' },
];

function getCategoryImages(label: string): string[] {
  return products
    .filter((p) => p.category === label)
    .flatMap((p) => p.images || []);
}

export default function HomePage() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    let timeout: any;
    let mouseOver = false;
    const slider = instanceRef.current;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => slider.next(), 3500);
    }

    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on('dragStarted', clearNextTimeout);
    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);

    return () => clearTimeout(timeout);
  }, [instanceRef]);

  return (
    <div className="min-h-[140vh] font-sans relative">
      {/* HERO CAROUSEL */}
      <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {heroImages.map((src, i) => (
            <div key={i} className="keen-slider__slide w-full h-full relative">
              <img
                src={src}
                alt={`Hero ${i + 1}`}
                className="object-cover w-full h-full"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-2">
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg text-center">
            Taste of Morocco
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium max-w-xl mx-auto drop-shadow text-center">
            Discover vibrant Moroccan cuisine and authentic artisanal treasures—crafted for your home.
          </p>
        </div>
      </section>

      {/* CATEGORY TILES */}
<section className="max-w-6xl mx-auto my-12 px-4 pb-64">
  {/* Category Tiles */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {categories.map(({ label, href }) => (
      <CategoryTileCarousel
        key={label}
        images={getCategoryImages(label)}
        label={label}
        link={href}
      />
    ))}
  </div>

  {/* Food Disclaimer - Positioned Below */}
  <div className="mt-10 flex justify-center">
    <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 px-5 py-4 rounded-md shadow text-sm max-w-2xl">
      <p>
        <strong className="font-semibold">Note:</strong>{' '}
        Food is not currently being sold or served. We hope to add it as part
        of a future expansion.
      </p>
    </div>
  </div>
</section>


      <footer className="text-center py-4 text-orange-700 bg-white/90">
        &copy; 2025 Taste of Morocco &mdash; Crafted with passion
      </footer>
    </div>
  );
}
