import {
  Dialog,
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

const AddProduct = () => {
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
          ...data,
          image: imageUrl,
        };
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
            <CustomInput type="text" name="category" label="Category" />
            <CustomInput type="text" name="title" label="Title" />
            <CustomInput type="number" name="price" label="Price" />
            <CustomInput type="number" name="quantity" label="Quantity" />
            <CustomInput type="text" name="description" label="Description" />
            <CustomInput type="number" name="rating" label="Rating" />
            <CustomImageUpload name="image" label="Image URL" />
            <Button type="submit">Add Product</Button>
          </CustomFormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduct;
