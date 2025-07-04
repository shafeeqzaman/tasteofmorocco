'use client';

import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import { useParams, useRouter, notFound } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { products } from '@/data/products';
import ProductInquiryForm from '@/components/ProductInquiryForm';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

function getStatusBadge(product: any) {
  switch (product.status) {
    case 'made-to-order':
      return <span className="ml-2 inline-block bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full">Made to Order</span>;
    case 'preorder':
      return <span className="ml-2 inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">Pre-Order</span>;
    case 'coming-soon':
      return <span className="ml-2 inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">Coming Soon</span>;
    case 'out-of-stock':
    case product.available === false:
      return <span className="ml-2 inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full">Out of Stock</span>;
    default:
      return <span className="ml-2 inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>;
  }
}

export default function ProductDetail() {
  const router = useRouter();
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const routeToDisplay: Record<string, string> = {
    food: 'Food',
    ceramics: 'Ceramics',
    'berber-rugs': 'Berber Carpets, Rugs, and Poufs',
    'leather-goods': 'Leather Goods',
  };

  const displayCategory = routeToDisplay[category?.toLowerCase() || ''] || '';

  const product = useMemo(
    () => products.find((p) => p.slug === slug && p.category === displayCategory),
    [slug, displayCategory]
  );

  useEffect(() => {
    const handlePop = () => {
      const hash = window.location.hash;
      if (hash) router.push(`/${hash}`);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [router]);

  if (!product) notFound();

  const images = (product.images || []).filter(Boolean);
  const current = images[photoIndex] || '';

  const renderMainImage = () => {
    if (!current) {
      return (
        <div className="rounded-xl max-h-96 w-full bg-gray-100 flex items-center justify-center text-gray-500 italic">
          Image coming soon
        </div>
      );
    }
    return (
      <img
        src={current}
        alt={product.name}
        className="rounded-xl max-h-96 w-auto object-cover shadow-lg cursor-pointer transition hover:scale-105"
        style={{ maxWidth: '100%' }}
        onClick={() => setOpen(true)}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.replaceWith(
            Object.assign(document.createElement('div'), {
              className:
                'rounded-xl max-h-96 w-full bg-gray-100 flex items-center justify-center text-gray-500 italic',
              innerText: 'Image coming soon',
            })
          );
        }}
      />
    );
  };

  return (
    <>
      <Head>
        <title>{product.name} | Taste of Morocco</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="flex min-h-screen font-sans">
        <Sidebar />
        <main className="flex-1 ml-0">
          <div className="max-w-3xl mx-auto py-12 px-4 pt-24 sm:pt-12 flex flex-col gap-8">
            <h1 className="font-heading text-4xl font-extrabold mb-2 text-orange-900 flex items-center gap-3">
              {product.name} {getStatusBadge(product)}
            </h1>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start w-full">
              <div className="w-full md:w-2/3 flex justify-center">{renderMainImage()}</div>

              {images.length > 1 && (
                <div className="flex md:flex-col gap-3 md:w-1/3 justify-center md:justify-start">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className={`rounded-lg h-16 w-16 object-cover border-2 transition cursor-pointer ${
                        idx === photoIndex ? 'border-orange-500 shadow-md' : 'border-transparent'
                      }`}
                      onClick={() => {
                        setPhotoIndex(idx);
                        setOpen(true);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {open && (
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images.map((src) => ({ src }))}
                index={photoIndex}
                plugins={[Zoom, Thumbnails]}
                animation={{ swipe: 250, fade: 250 }}
                styles={{ container: { background: 'rgba(20,20,0,0.98)' } }}
              />
            )}

            <p className="mb-2 text-lg text-gray-800">{product.description}</p>

            {product.price && (
              <p className="text-lg font-semibold text-orange-700 mb-2">Price: {product.price}</p>
            )}

            {product.status === 'made-to-order' && (
              <div className="text-orange-700 text-sm mb-2">
                Please order at least 1 day in advance.
                <br />
                Large food orders require minimum 2 days’ notice.
              </div>
            )}

            {!product.available && (
              <div className="text-red-700 text-sm mb-2">
                Currently unavailable for immediate order. Contact us to pre-order or reserve.
              </div>
            )}

            <ProductInquiryForm productName={product.name} />
          </div>
        </main>
      </div>
    </>
  );
}
