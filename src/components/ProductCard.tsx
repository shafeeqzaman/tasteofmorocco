import Link from "next/link";

type Product = {
  slug: string;
  name: string;
  description: string;
  price?: string;
  images: string[];
  status?: string;
  available?: boolean;
  category: string;
};

type Props = {
  product: Product;
  href?: string;
  showLink?: boolean;
};

export default function ProductCard({ product, href, showLink = false }: Props) {
  const getStatusBadge = () => {
    if (product.status === "made-to-order")
      return <span className="ml-2 bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full">Made to Order</span>;
    if (product.status === "preorder")
      return <span className="ml-2 bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">Pre-Order</span>;
    if (product.status === "coming-soon")
      return <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">Coming Soon</span>;
    if (product.status === "out-of-stock" || product.available === false)
      return <span className="ml-2 bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full">Out of Stock</span>;
    return <span className="ml-2 bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Available</span>;
  };

  const content = (
    <div className="flex bg-white rounded-2xl shadow hover:ring-2 hover:ring-orange-300 overflow-hidden transition">
      {product.images[0] && (
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-40 h-40 object-cover flex-shrink-0"
        />
      )}
      <div className="p-4 flex flex-col justify-center">
        <div className="flex items-center mb-1">
          <h5 className="font-heading text-xl font-bold text-orange-800">{product.name}</h5>
          {getStatusBadge()}
        </div>
        <p className="text-gray-700 text-sm mb-1">{product.description}</p>
        {product.price && <p className="font-semibold text-orange-700 text-sm">{product.price}</p>}
      </div>
    </div>
  );

  return showLink && href ? <Link href={href}>{content}</Link> : content;
}
