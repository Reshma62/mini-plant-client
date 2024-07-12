import AddProduct from "@/components/products/AddProduct";
import EditProduct from "@/components/products/EditProduct";
import CustomPagination from "@/components/shared/CustomPagination";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/features/products/productsApi";
import { handleApiPromise } from "@/utils/handlePromiseApi";
import { Trash } from "lucide-react";
import { useState } from "react";

const ProductManagement = () => {
  const [page, setPage] = useState(1);
  const limit = 6;
  const { data: allCategory, isLoading } = useGetCategoriesQuery({});
  const { data: allproduct, isLoading: isLoadingProduct } = useGetProductsQuery(
    {
      page: page,
      limit: limit,
    }
  );

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    const result = deleteProduct(id).unwrap();

    // deleteCategory(id);
    await handleApiPromise({
      result,
    });
  };

  if (isLoading || isLoadingProduct) {
    return <div>Loading...</div>;
  }

  // console.log(allCategory, "all category");
  const category = allCategory?.data?.data;
  const count = allproduct?.data?.count;
  console.log("all product", allproduct);
  return (
    <div>
      <div className="flex justify-between items-center border-b border-solid border-primaryColor pb-3 mb-3">
        <h2 className="text-2xl text-primaryColor font-medium">
          Product Management
        </h2>

        <AddProduct category={category} />
      </div>
      {count === 0 ? (
        <p className="flex justify-center mt-10 text-lg font-medium text-primaryColor">
          No data found
        </p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="text-lg font-medium text-primaryColor capitalize">
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>price</TableHead>
              <TableHead>rating</TableHead>
              <TableHead>quantity</TableHead>
              <TableHead>description</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allproduct?.data?.data?.map(
              (product: Record<string, string>, index: number) => (
                <TableRow key={product?._id}>
                  <TableCell className="font-medium">{index}</TableCell>
                  <TableCell className="flex items-center gap-4">
                    <div>
                      <img
                        className="rounded-md w-10 h-10"
                        src={product?.image}
                        alt=""
                      />
                    </div>
                    {product?.title}
                  </TableCell>
                  <TableCell>{product?.price}</TableCell>
                  <TableCell>{product?.rating}</TableCell>
                  <TableCell>{product?.quantity}</TableCell>
                  <TableCell>{product?.description}</TableCell>
                  <TableCell className="text-right flex items-center gap-4 justify-end">
                    <EditProduct product={product} category={category} />
                    <Button
                      onClick={() => handleDelete(product?._id)}
                      size={"sm"}
                      variant={"destructive"}
                      className="ml-3"
                    >
                      {" "}
                      <Trash /> Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      )}

      {count > 0 && (
        <div className="flex justify-end mt-6">
          <CustomPagination
            setPage={setPage}
            page={page}
            count={count}
            size={limit}
          />
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
