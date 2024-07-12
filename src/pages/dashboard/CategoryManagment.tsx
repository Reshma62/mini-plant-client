import AddCategory from "@/components/Category/AddCategory";
import EditCategory from "@/components/Category/EditCategory";
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
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "@/redux/features/category/categoryApi";
import { handleApiPromise } from "@/utils/handlePromiseApi";
import { Trash } from "lucide-react";
import { useState } from "react";

const CategoryManagement = () => {
  const [page, setPage] = useState(1);
  const limit = 6;
  const { data: allCategory, isLoading } = useGetCategoriesQuery({
    page: page,
    limit: limit,
  });

  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = (id: string) => {
    const result = deleteCategory(id).unwrap();

    // deleteCategory(id);
    handleApiPromise({
      result,
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const count = allCategory?.data?.count;
  console.log(allCategory, "all category");
  return (
    <div>
      <div className="flex justify-between items-center border-b border-solid border-primaryColor pb-3 mb-3">
        <h2 className="text-2xl text-primaryColor font-medium">
          Category Management
        </h2>
        <AddCategory />
      </div>
      {count === 0 ? (
        <p className="flex justify-center mt-10 text-lg font-medium text-primaryColor">
          No data found
        </p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="text-lg font-medium text-primaryColor">
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Category Image</TableHead>
              <TableHead>Category Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allCategory?.data?.data?.map(
              (category: Record<string, string>, index: number) => (
                <TableRow key={category?._id}>
                  <TableCell className="font-medium">{index}</TableCell>
                  <TableCell>
                    <img
                      className="rounded-md"
                      width={70}
                      src={category?.categoryImage}
                      alt=""
                    />
                  </TableCell>
                  <TableCell>{category?.categoryName}</TableCell>
                  <TableCell className="text-right flex items-center gap-4 justify-end">
                    <EditCategory category={category} />
                    <Button
                      onClick={() => handleDelete(category?._id)}
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

export default CategoryManagement;
