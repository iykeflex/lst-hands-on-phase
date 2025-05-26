import type { Product } from '../../types/product';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px' }}>
      <img
        src={product.thumbnail !== '...' ? product.thumbnail : '/placeholder.jpg'}
        alt={product.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '1rem' }}
      />
      <h4 style={{ fontSize: '16px', margin: '0 0 8px' }}>{product.title}</h4>
      <p style={{ color: '#23856d', fontWeight: '600' }}>${product.price}</p>
    </div>
  );
}
