import ProductList from '../features/products/ProductList';
import styles from './MoreData.module.css';
import type { Product } from '../types/product';

type MoreDataProps = {
  products: Product[];
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  disableButton: boolean;
};

export default function MoreData({
  products,
  count,
  setCount,
  disableButton,
}: MoreDataProps) {
  return (
    <div className={styles.container}>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products found</p>
      )}

      <div className={styles.btnContainer}>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more products
        </button>
        {disableButton && <p>Max product reached!</p>}
      </div>
    </div>
  );
}
