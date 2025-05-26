import { useState, useEffect } from 'react';
import { useGetProductsQuery } from '../features/products/ProductApi';
import MoreData from './MoreData';

export default function ProductSection() {
  const [count, setCount] = useState(1);
  const limit = count * 10;

  const { data, isFetching } = useGetProductsQuery(limit);
  const products = data?.products || [];

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (products.length >= (data?.total || 0)) {
      setDisableButton(true);
    }
  }, [products, data]);

  return (
    <section style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <h2>Featured Products</h2>
      {isFetching && <p>Loading...</p>}

      <MoreData
        products={products}
        count={count}
        setCount={setCount}
        disableButton={disableButton}
      />
    </section>
  );
}
