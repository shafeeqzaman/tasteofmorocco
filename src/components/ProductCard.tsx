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
  const [imgError, setImgError] = useState(false);
  const src = product.images && product.images[0];

  // Status badge positioned over the card as a corner marker
  const StatusBadge = () => {
    if (product.status === 'out-of-stock' || product.available === false) {
      return (
        <div className="absolute top-0 left-0 bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-br-xl z-10 shadow-md">
          Out of Stock
        </div>
      );
    }
    if (product.status === 'made-to-order') {
      return (
        <div className="absolute top-0 left-0 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-br-xl z-10 shadow-md">
          Made to Order
        </div>
      );
    }
    if (product.status === 'preorder') {
      return (
        <div className="absolute top-0 left-0 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-br-xl z-10 shadow-md">
          Pre-Order
        </div>
      );
    }
    if (product.status === 'coming-soon') {
      return (
        <div className="absolute top-0 left-0 bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-br-xl z-10 shadow-md">
          Coming Soon
        </div>
      );
    }
    return null;
  };

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
    <div className="relative flex bg-white rounded-2xl shadow hover:ring-2 hover:ring-orange-300 overflow-hidden transition min-h-[180px]">
      {StatusBadge()}
      {ImageBlock()}
      <div className="p-4 flex flex-col justify-center min-w-0">
        <h5 className="font-heading text-xl font-bold text-orange-800 leading-snug mb-1 break-words">
          {product.name}
        </h5>
        <p className="text-gray-700 text-sm mb-1 break-words">{product.description}</p>
        {product.price && (
          <p className="font-semibold text-orange-700 text-sm">{product.price}</p>
        )}
      </div>
    </div>
  );

  return showLink && href ? <Link href={href}>{CardInner}</Link> : CardInner;
}
