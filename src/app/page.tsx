'use client';

import { useEffect } from 'react';
import Card from '@/components/Card';
import { useProductStore } from '@/store/useProductStore';

export default function Home() {
  const { products, loading, error, setProducts, setLoading, setError } = useProductStore();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts, setLoading, setError]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[--color-light-100]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found. Make sure to seed the database!</p>
          </div>
        ) : (
          <section>
            <h2 className="mb-4 text-heading-2 font-jost">Latest Shoes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  title={product.name}
                  description={product.description ?? undefined}
                  subtitle={product.brand ?? undefined}
                  price={product.price}
                  imageSrc={product.imageUrl ?? '/placeholder-image.jpg'}
                  imageAlt={product.name}
                  badgeText={product.category ?? undefined}
                  footerNote={
                    product.stock !== null && product.stock !== undefined
                      ? `Stock: ${product.stock}`
                      : undefined
                  }
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
