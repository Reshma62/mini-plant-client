import ProductDetailsCard from "@/components/products/ProductDetailsCard";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId, "product it");

  const { data, isLoading } = useGetProductByIdQuery(productId as string);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data, "data product data");

  return (
    <div>
      <ProductDetailsCard details={data?.data} />
    </div>
  );
};

export default ProductDetails;
