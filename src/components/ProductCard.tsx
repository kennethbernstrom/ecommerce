import { Product } from '@/lib/db/schema';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={product.imageUrl || '/placeholder-image.jpg'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">
            Stock: {product.stock}
          </span>
        </div>
        <div className="mt-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full ml-2">
            {product.brand}
          </span>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}