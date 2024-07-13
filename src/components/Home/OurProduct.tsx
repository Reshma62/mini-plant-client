import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "../products/ProductCard";
import CommonHeading from "../shared/CommonHeading";
import { useState } from "react";
import CustomPagination from "../shared/CustomPagination";

const OurProduct = () => {
  const limit = 4;
  const [page, setPage] = useState(1);
  const { data: products, isLoading } = useGetProductsQuery({
    page,
    limit,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const count = products?.data?.count;
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primaryColor/5">
      <div className="container px-4 md:px-6">
        <CommonHeading
          subTitle="Our Products"
          title="Browse Our Plant Selection"
          description="Find the perfect plant for your home or office."
        />

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
          {products?.data?.data.map((product: Record<string, string>) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {count > 0 && (
        <CustomPagination
          page={page}
          setPage={setPage}
          count={count}
          size={limit}
        />
      )}
    </section>
  );
};

export default OurProduct;
