import { Product } from '@/lib/db/schema';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-[--color-light-100] ring-1 ring-[--color-light-300] hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={product.imageUrl || '/placeholder-image.jpg'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.category ? (
          <span className="absolute left-3 top-3 rounded-full bg-[--color-light-100] px-3 py-1 text-[--color-green] text-[length:var(--text-caption)] font-[var(--text-caption--font-weight)] shadow">
            {product.category}
          </span>
        ) : null}
      </div>

      <div className="px-4 py-3 bg-[--color-dark-900]">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[--color-light-100] text-[length:var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)] line-clamp-1">
            {product.name}
          </h3>
          <span className="shrink-0 text-[--color-light-100] text-[length:var(--text-body)] font-[var(--text-body-medium--font-weight)]">
            ${Number(product.price).toFixed(2)}
          </span>
        </div>

        <p className="mt-1 text-[--color-dark-500] text-[length:var(--text-body)] leading-[var(--text-body--line-height)]">
          Men's Shoes
        </p>
        <p className="mt-1 text-[--color-dark-700] text-[length:var(--text-caption)] leading-[var(--text-caption--line-height)]">
          6 Colour
        </p>
      </div>
    </div>
  );
}
