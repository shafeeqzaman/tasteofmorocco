'use client';
import React, { useState } from 'react';
import Link from 'next/link';

type Product = {
  slug: string;
  name: string;
  description: string;
  price?: string;
  images?: string[];
  status?: string;
  available?: boolean;
  category: string;
};

type Props = {
  product: Product;
  href?: string;
  showLink?: boolean;
};

export default function ProductCard({
  product,
  href,
  showLink = false,
}: Props) {
  // track if the image actually failed
  const [imgError, setImgError] = useState(false);

  // pick the first image, if any
  const src = product.images && product.images[0];

  // badge helper
  const StatusBadge = () => {
    if (product.status === 'made-to-order') return <span className="...">Made to Order</span>;
    if (product.status === 'preorder')       return <span className="...">Pre-Order</span>;
    if (product.status === 'coming-soon')    return <span className="...">Coming Soon</span>;
    if (product.status === 'out-of-stock' || product.available === false)
      return <span className="...">Out of Stock</span>;
    return <span className="...">Available</span>;
  };

  // render either the <img> or the placeholder box
  const ImageBlock = () => {
    if (!src || imgError) {
      return (
        <div className="w-40 h-40 flex items-center justify-center bg-gray-100 text-gray-500 text-xs italic">
          Image coming soon
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={product.name}
        className="w-40 h-40 object-cover flex-shrink-0"
        onError={() => setImgError(true)}
      />
    );
  };

  const CardInner = (
    <div className="flex bg-white rounded-2xl shadow hover:ring-2 hover:ring-orange-300 overflow-hidden transition">
      <ImageBlock />
      <div className="p-4 flex flex-col justify-center">
        <div className="flex items-center mb-1">
          <h5 className="font-heading text-xl font-bold text-orange-800">
            {product.name}
          </h5>
          <StatusBadge />
        </div>
        <p className="text-gray-700 text-sm mb-1">{product.description}</p>
        {product.price && (
          <p className="font-semibold text-orange-700 text-sm">{product.price}</p>
        )}
      </div>
    </div>
  );

  return showLink && href ? <Link href={href}>{CardInner}</Link> : CardInner;
}
