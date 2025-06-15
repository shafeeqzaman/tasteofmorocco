'use client';
import Sidebar from "./Sidebar";
import Link from "next/link";
import { products } from "@/data/products";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useEffect } from "react";

const heroImages = [
  "/hero.jpg",
  "/IMG_20220827_150750.jpg",
  "/IMG_20220827_152816.jpg"
];

const foodProducts = products.filter((p) => p.category === "Food");
const otherCategories = [...new Set(products.filter((p) => p.category !== "Food").map((p) => p.category))];
const productsByOtherCategory = otherCategories.map((category) => ({
  category,
  items: products.filter((p) => p.category === category),
}));

function getStatusBadge(product: any) {
  if (product.status === "made-to-order")
    return <span className="ml-2 inline-block bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full">Made to Order</span>;
  if (product.status === "preorder")
    return <span className="ml-2 inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">Pre-Order</span>;
  if (product.status === "coming-soon")
    return <span className="ml-2 inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">Coming Soon</span>;
  if (product.status === "out-of-stock" || product.available === false)
    return <span className="ml-2 inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full">Out of Stock</span>;
  return <span className="ml-2 inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>;
}

export default function HomePage() {
  const [sliderRef, instanceRef] = useKeenSlider({ loop: true, slides: { perView: 1 } });

  useEffect(() => {
    if (!instanceRef.current) return;
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;
    const slider = instanceRef.current;
    function clearNextTimeout() { clearTimeout(timeout); }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => slider.next(), 3500);
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

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.sessionStorage.getItem("pendingHash");
      if (hash) {
        window.sessionStorage.removeItem("pendingHash");
        setTimeout(() => {
          const el = document.getElementById(hash.replace("#", ""));
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };
    handleHashScroll();
    window.addEventListener("popstate", handleHashScroll);
    return () => { window.removeEventListener("popstate", handleHashScroll); };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Sidebar />

      <section id="home" className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {heroImages.map((src, i) => (
            <div key={src} className="keen-slider__slide w-full h-full relative">
              <img src={src} alt={`Hero ${i + 1}`} className="object-cover w-full h-full" style={{ minHeight: "340px" }} draggable={false} />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-2">
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg text-center">Taste of Morocco</h1>
          <p className="mt-4 text-xl md:text-2xl font-medium max-w-xl mx-auto drop-shadow text-center">
            Discover vibrant Moroccan cuisine and authentic artisanal treasures—crafted for your home.
          </p>
          <a href="#catalog" className="inline-block mt-8 px-8 py-3 text-lg font-semibold rounded-full border-2 border-amber-400 bg-amber-500 hover:bg-white hover:text-amber-600 shadow-lg transition-all duration-200">
            Shop Collection
          </a>
        </div>
      </section>

      <section id="catalog" className="max-w-6xl mx-auto py-20 px-4">
        <h3 className="font-heading text-3xl font-extrabold text-orange-800 mb-8 text-center tracking-widest">Moroccan Cuisine</h3>
        <div className="grid gap-8 sm:grid-cols-2">
          {foodProducts.map((product) => (
            <div id={`food-${product.slug}`} key={product.slug}>
              <Link href={`/product/${product.slug}`} className="flex bg-white rounded-2xl shadow-lg overflow-hidden hover:ring-2 hover:ring-orange-300 transition">
                {product.images[0] && <img src={product.images[0]} alt={product.name} className="w-40 h-40 object-cover flex-shrink-0" />}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center mb-1">
                    <h5 className="font-heading text-xl font-bold text-orange-800">{product.name}</h5>
                    {getStatusBadge(product)}
                  </div>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h3 className="font-heading text-3xl font-extrabold text-orange-800 mb-8 text-center tracking-widest mt-20">Artisanal Moroccan Goods</h3>
        {productsByOtherCategory.map((cat) => {
          let sectionId = "";
          if (cat.category.toLowerCase().includes("carpet")) sectionId = "carpets-products";
          else if (cat.category.toLowerCase().includes("leather")) sectionId = "leather-products";
          else sectionId = `${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-products`;

          return (
            <section key={cat.category} id={sectionId} className="mb-16">
              <h4 className="font-heading text-2xl font-extrabold text-orange-800 mb-6">{cat.category}</h4>
              <div className="grid gap-8 sm:grid-cols-2">
                {cat.items.map((product) => {
                  let productId = "";
                  if (cat.category.toLowerCase().includes("carpet")) productId = "carpets-berber-rugs";
                  else if (cat.category.toLowerCase().includes("leather")) productId = `leather-${product.slug}`;
                  else productId = `${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${product.slug}`;

                  return (
                    <div id={productId} key={product.slug}>
                      <Link href={`/product/${product.slug}`} className="flex bg-white rounded-2xl shadow-lg overflow-hidden hover:ring-2 hover:ring-orange-300 transition">
                        {product.images[0] && <img src={product.images[0]} alt={product.name} className="w-40 h-40 object-cover flex-shrink-0" />}
                        <div className="p-6 flex flex-col justify-center">
                          <div className="flex items-center mb-1">
                            <h5 className="font-heading text-xl font-bold text-orange-800">{product.name}</h5>
                            {getStatusBadge(product)}
                          </div>
                          <p className="text-gray-700">{product.description}</p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </section>

      <section id="contact" className="bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 py-16">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-10 border-t-8 border-amber-500">
          <h5 className="font-heading text-2xl font-extrabold text-orange-700 mb-6 tracking-wide">Contact Us</h5>
          <form action="https://formspree.io/f/meokkgeb" method="POST">
            <input type="text" name="name" placeholder="Your Name" className="block w-full mb-5 px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none" required />
            <input type="email" name="email" placeholder="Your Email" className="block w-full mb-5 px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none" required />
            <textarea name="message" placeholder="Your Message" rows={4} className="block w-full mb-5 px-5 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none resize-none" required />
            <button type="submit" className="w-full bg-orange-600 text-white font-semibold py-3 rounded-full hover:bg-amber-500 transition">Send Inquiry</button>
          </form>
        </div>
      </section>

      <a href="https://wa.me/15198045902" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition">
        WhatsApp
      </a>

      <footer className="text-center py-4 text-orange-700 bg-white/90">&copy; 2025 Taste of Morocco &mdash; Crafted with passion</footer>
    </div>
  );
}
