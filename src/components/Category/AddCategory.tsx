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
import { useAddCategoryMutation } from "@/redux/features/category/categoryApi";
import {
  handleApiPromise,
  HandleApiPromiseParams,
} from "@/utils/handlePromiseApi";

const AddCategory = () => {
  const [addCategory] = useAddCategoryMutation();
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const file = data.image;
    console.log(file, "file");
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const imageUrl = await singleImageUpload(formData);
        // console.log(imageUrl, "Image url");

        const categoryData = {
          categoryName: data.category,
          categoryImage: imageUrl,
        };
        console.log("form data:===>", categoryData);

        const result = addCategory(categoryData).unwrap();

        // toast.success("Category added");
        const response: HandleApiPromiseParams = {
          result,
        };
        const finalData = await handleApiPromise(response);

        console.log("final data=>", finalData);

        // console.log(categoryData, "categoryData data ");
      } catch (error: unknown) {
        // toast.error(error.data.message);
        console.error("Failed to upload image:", error);
      }
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant={"default"}>
            <Plus className="mr-2" /> Add new Category
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-2xl">
          <DialogHeader className="text-center py-2">
            <DialogTitle className="text-center">Add New Category</DialogTitle>
            <DialogDescription className="text-center">
              Fill in the details below to add a new category.
            </DialogDescription>
          </DialogHeader>

          <CustomFormProvider onSubmit={onsubmit}>
            <CustomInput type="text" name="category" label="Category" />
            <CustomImageUpload name="image" label="Category Image URL" />
            <Button type="submit">Add Category</Button>
          </CustomFormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCategory;
