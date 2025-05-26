import ProductCard from './ProductCard';
import type { Product } from '../../types/product';

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
