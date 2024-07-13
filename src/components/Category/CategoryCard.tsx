import { Link } from "react-router-dom";

const CategoryCard = ({ category }: { category: Record<string, string> }) => {
  return (
    <Link
      to={"/"}
      className="group flex flex-col items-center justify-center space-y-2  transition-all hover:scale-105 "
    >
      <img
        src={category.categoryImage}
        width="200"
        height="200"
        alt="Tropical Foliage"
        className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center "
      />

      <div className="text-center">
        <h3 className="text-xl font-bold">{category.categoryName}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
