import CateImage from "@/assets/Flower-Plants.jpg";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  return (
    <Link
      to={"/"}
      className="group flex flex-col items-center justify-center space-y-2  transition-all hover:scale-105 "
    >
      <img
        src={CateImage}
        width="200"
        height="200"
        alt="Tropical Foliage"
        className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center "
      />

      <div className="text-center">
        <h3 className="text-xl font-bold">Tropical Foliage</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
