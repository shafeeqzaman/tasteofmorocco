'use client';
import { use } from "react";
import { useState } from "react";
import Sidebar from "../../Sidebar";
import { products } from "@/data/products";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Status badge utility
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

export default function ProductDetail({ params }) {
  const { slug } = use(params); // Use for Next.js v15+ params handling
  const product = products.find((p) => p.slug === slug);
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!product)
    return <div className="text-center text-red-600 py-20">Product not found.</div>;

  const images = product.images.filter(Boolean);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-50 font-sans">
      {/* Sidebar with improved hamburger style */}
      <Sidebar hamburgerClassName="fixed top-5 left-5 z-[100] p-2 rounded-lg bg-white shadow-2xl" />
      <main className="flex-1 ml-0">
        <div className="max-w-3xl mx-auto py-12 px-4 pt-24 sm:pt-12 flex flex-col gap-8">
          {/* Product Name + Badge */}
          <h1 className="font-heading text-4xl font-extrabold mb-2 text-orange-900 flex items-center gap-3">
            {product.name} {getStatusBadge(product)}
          </h1>

          {/* Dynamic Gallery Layout */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start w-full">
            {/* Main Image */}
            <div className="w-full md:w-2/3 flex justify-center">
              {images[photoIndex] && (
                <img
                  src={images[photoIndex]}
                  alt={product.name}
                  className="rounded-xl max-h-72 md:max-h-96 w-auto object-cover shadow-lg cursor-pointer transition hover:scale-105"
                  style={{ maxWidth: "100%" }}
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex md:flex-col gap-3 md:w-1/3 justify-center md:justify-start">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} - ${idx + 1}`}
                    className={`rounded-lg h-16 w-16 object-cover border-2 transition cursor-pointer 
                      ${idx === photoIndex ? 'border-orange-500 shadow-md' : 'border-transparent'}`}
                    onClick={() => {
                      setPhotoIndex(idx);
                      setOpen(true);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Lightbox Gallery */}
          {open && (
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={images.map((img) => ({ src: img }))}
              index={photoIndex}
              plugins={[Zoom, Thumbnails]}
              animation={{ swipe: 250, fade: 250 }}
              styles={{ container: { background: "rgba(20,20,0,0.98)" } }}
            />
          )}

          {/* Product Description */}
          <p className="mb-2 text-lg text-gray-800">{product.description}</p>
          {product.status === "made-to-order" && (
            <div className="text-orange-700 text-sm mb-2">
              Please order at least 1 day in advance.<br />
              Large food orders require minimum 2 days’ notice.
            </div>
          )}
          {!product.available && (
            <div className="text-red-700 text-sm mb-2">
              Currently unavailable for immediate order. Contact us to pre-order or reserve.
            </div>
          )}

          {/* Inline Inquiry Form */}
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 border-t-4 border-amber-400 w-full mt-2">
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="block w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none"
                required
                style={{ fontWeight: 500 }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="block w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none"
                required
                style={{ fontWeight: 500 }}
              />
              <textarea
                placeholder={`Order inquiry for: ${product.name}`}
                rows={3}
                className="block w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none resize-none"
                required
                style={{ fontWeight: 500 }}
              />
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-3 rounded-full hover:bg-amber-500 hover:text-orange-900 shadow transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
