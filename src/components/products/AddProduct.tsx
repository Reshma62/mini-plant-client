import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import CustomFormProvider from "@/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/CustomFormProvider/CustomInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomImageUpload from "@/CustomFormProvider/CustomImageUpload";
import { singleImageUpload } from "@/utils/imageUploader";
import { useAddProductMutation } from "@/redux/features/products/productsApi";
import {
  handleApiPromise,
  HandleApiPromiseParams,
} from "@/utils/handlePromiseApi";
import CustomSelect from "@/CustomFormProvider/CustomSelect";

// Define the Category type
interface Category {
  _id: string;
  categoryName: string;
}

// Update the prop type
const AddProduct = ({ category }: { category: Category[] }) => {
  const [addProduct] = useAddProductMutation();
  console.log(category, "category");

  // Transform categories into select options
  const options = category.map((item) => ({
    label: item.categoryName,
    value: item._id,
  }));

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const file = data.image;
    console.log(file, "file");
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const imageUrl = await singleImageUpload(formData);
        console.log(imageUrl, "Image url");

        const productData = {
          category: data.category,
          title: data.title,
          description: data.description,
          price: Number(data.price),
          quantity: Number(data.quantity),
          rating: Number(data.rating),
          image: imageUrl,
        };
        console.log("first product data:===>", productData);

        const result = addProduct(productData).unwrap();
        const response: HandleApiPromiseParams = {
          result,
        };

        await handleApiPromise(response);

        console.log("form data:===>", data);
        console.log(productData, "product data ");
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant={"default"}>
            <Plus className="mr-2" /> Add new product
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-2xl">
          <DialogHeader className="text-center py-2">
            <DialogTitle className="text-center">Add new product</DialogTitle>
            <DialogDescription className="text-center">
              Fill in the details below to add a new product.
            </DialogDescription>
          </DialogHeader>

          <CustomFormProvider onSubmit={onsubmit}>
            <CustomInput type="text" name="title" label="Title" />
            <CustomInput type="number" name="price" label="Price" />
            <CustomInput type="number" name="quantity" label="Quantity" />
            <CustomInput type="text" name="description" label="Description" />
            <CustomInput type="number" name="rating" label="Rating" />
            <CustomImageUpload name="image" label="Image URL" />
            <CustomSelect name="category" label="Category" options={options} />
            <DialogClose asChild>
              <Button type="submit">Add Product</Button>
            </DialogClose>
          </CustomFormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduct;
