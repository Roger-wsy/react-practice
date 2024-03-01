import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, loading);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {error ? <h3>{error}</h3> : null}
      {loading ? <h3>Loading ! Please Wait</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((product) => (
            <p key={product.key}>{product.title}</p>
          ))
        : null}
    </div>
  );
}
