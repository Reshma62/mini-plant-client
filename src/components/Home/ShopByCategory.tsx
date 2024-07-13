import CommonHeading from "../shared/CommonHeading";
import CategoryCard from "../Category/CategoryCard";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";

const ShopByCategory = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primaryColor/5">
      <div className="container px-4 md:px-6">
        <CommonHeading
          title=" Explore Our Plant Categories"
          description="Browse through our collection of beautiful plant photos."
          subTitle="Shop By Category"
        />
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
          {categories?.data?.data.map((category: Record<string, string>) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
