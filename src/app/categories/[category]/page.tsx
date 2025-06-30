'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Sidebar from '@/components/Sidebar';

// This map defines the canonical route segments (URLs)
const displayToRoute: Record<string, string> = {
  'Food': 'food',
  'Ceramics': 'ceramics',
  'Berber Carpets, Rugs, and Poufs': 'berber-rugs',
  'Leather Goods': 'leather-goods'
};

const routeToDisplay = Object.fromEntries(
  Object.entries(displayToRoute).map(([k, v]) => [v, k])
);

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const displayName = routeToDisplay[category?.toLowerCase() || ''];

  const categoryProducts = products.filter(
    (p) => p.category === displayName
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen font-sans">
      <Sidebar />
	<section className="max-w-7xl mx-auto px-4 py-12">
	  <h1 className="text-4xl font-extrabold text-orange-800 mb-6 text-center tracking-wide">
		{displayName}
	  </h1>
	  <div
    className="
      grid gap-7
      grid-cols-[repeat(auto-fit,minmax(290px,1fr))]
      md:grid-cols-[repeat(auto-fit,minmax(330px,1fr))]
      xl:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]
      2xl:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]
    "
  >
    {categoryProducts.map((product) => (
      <ProductCard
        key={product.slug}
        product={product}
        route={`/categories/${displayToRoute[product.category]}/product/${product.slug}`}
      />
    ))}
  </div>
</section>
    </div>
  );
}
