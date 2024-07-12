import AddCategory from "@/components/Category/AddCategory";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";

const CategoryManagement = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-solid border-primaryColor pb-3 mb-3">
        <h2 className="text-2xl text-primaryColor font-medium">
          Category Management
        </h2>

        <AddCategory />
      </div>

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
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">
              <Button size={"sm"} variant={"outline"} className="sb-button">
                {" "}
                <Edit /> Edit
              </Button>
              <Button size={"sm"} variant={"destructive"} className="ml-3">
                {" "}
                <Trash /> Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryManagement;
