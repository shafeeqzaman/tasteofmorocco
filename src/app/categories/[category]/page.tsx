'use client';

import { useParams, notFound } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

// canonical slug → display name
const routeToDisplay: Record<string, string> = {
  food: 'Food',
  ceramics: 'Ceramics',
  'berber-rugs': 'Berber Carpets, Rugs, and Poufs',
  'leather-goods': 'Leather Goods',
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const displayName = routeToDisplay[category || ''];

  if (!displayName) {
    notFound();
  }

  const categoryProducts = products.filter(
    (p) => p.category === displayName
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <div className="flex-1 px-6 py-12">
  {category.toLowerCase() === "food" && (
    <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 px-4 py-3 rounded-lg shadow mb-6 text-sm max-w-4xl mx-auto">
      <p>
        <strong>Note:</strong> <span className="font-semibold">Food is not currently being sold or served.</span> This menu is for demonstration and future planning purposes only.
      </p>
    </div>
  )}


      <Sidebar />

      <main className="flex-1 px-6 py-12">
        <h1 className="text-4xl font-extrabold text-orange-800 mb-8 text-center">
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
              href={`/categories/${category}/product/${product.slug}`}
              showLink={true}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
