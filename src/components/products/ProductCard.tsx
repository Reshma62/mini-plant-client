import { Star } from "lucide-react";
import { Button } from "../ui/button";
import ProductImage from "@/assets/Creeper-Plants.jpg";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <Link
      to={"/product-details/1"}
      className=" rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={ProductImage}
        width="300"
        height="300"
        alt="Plant 1"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">Monstera Deliciosa</h3>
        <p className="text-[#757575] text-sm">
          Large, tropical-looking leaves.
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">$29.99</span>
          <Button variant={"default"}>Add to Cart </Button>
        </div>
        <div>
          <Star />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
