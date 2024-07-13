import { Star, StarHalf, Star as StarFull } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Rating from "react-rating";

// Define custom star components
const FullStar = <StarFull fill="currentColor" />;
const EmptyStar = <Star />;
const HalfStar = <StarHalf fill="currentColor" />;

const ProductCard = ({ product }: { product: Record<string, string> }) => {
  const rating = parseFloat(product.rating);
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <Link to={`/product-details/${product._id}`} className="block">
        <img
          src={product.image}
          width="300"
          height="300"
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{product.title}</h3>
          <p className="text-[#757575] text-sm">{product.description}</p>
          <div className="flex items-center mt-2">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={EmptyStar}
              fullSymbol={FullStar}
              placeholderSymbol={HalfStar}
            />
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between p-4">
        <span className="text-lg font-bold">${product.price}</span>
        <Button variant={"default"}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
