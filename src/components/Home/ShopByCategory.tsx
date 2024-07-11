import CommonHeading from "../shared/CommonHeading";
import CategoryCard from "../Category/CategoryCard";

const ShopByCategory = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primaryColor/5">
      <div className="container px-4 md:px-6">
        <CommonHeading
          title=" Explore Our Plant Categories"
          description="Browse through our collection of beautiful plant photos."
          subTitle="Shop By Category"
        />
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
