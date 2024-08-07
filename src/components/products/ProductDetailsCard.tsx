// @ts-ignore

import { Star, StarHalf, Star as StarFull } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Rating from "react-rating";

// Define custom star components
const FullStar = <StarFull fill="currentColor" />;
const EmptyStar = <Star />;
const HalfStar = <StarHalf fill="currentColor" />;
const ProductDetailsCard = ({
  details,
}: {
  details: Record<string, string>;
}) => {
  const rating = parseFloat(details.rating);
  return (
    <div className="w-full">
      <section className="bg-muted py-6 md:py-10 lg:py-12">
        <div className="container grid md:grid-cols-2 gap-8 ">
          <div>
            <img
              src={details.image}
              width={400}
              // height={300}
              alt="Product Image"
              className="w-full h-96 rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{details.title}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center mt-2">
                <Rating
                  initialRating={rating}
                  readonly
                  emptySymbol={EmptyStar}
                  fullSymbol={FullStar}
                  placeholderSymbol={HalfStar}
                />
              </div>
              {/* <span className="text-muted-foreground">(4.3)</span> */}
            </div>
            <div className="text-4xl font-bold">${details.price}</div>
            <div>
              <Button size="lg">Add to Cart</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-12 md:py-20 lg:py-24">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="border-b">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <div className="prose max-w-none">
              <h2>Product Description</h2>
              <p>{details.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <div className="space-y-8">
              <div className="flex items-Star t gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">4.3</span>
                  </div>
                  <p>
                    These headphones are amazing! The noise-cancelling
                    technology is top-notch, and the sound quality is
                    incredible. I've been using them for my daily commute and
                    they've been a game-changer.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    John Doe - June 15, 2023
                  </div>
                </div>
              </div>
              <div className="flex items-Star t gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">4.8</span>
                  </div>
                  <p>
                    I absolutely love these headphones! The comfort level is
                    unbeatable, and the sound quality is simply outstanding.
                    Highly recommended for anyone looking for a top-notch audio
                    experience.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Sarah Anderson - May 28, 2023
                  </div>
                </div>
              </div>
              <div className="flex items-Star t gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-primary" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">3.8</span>
                  </div>
                  <p>
                    The Acme Wireless Headphones are good, but not great. The
                    noise-cancelling works well, but the battery life could be
                    better. Overall, they're a decent pair of headphones, but I
                    was expecting a bit more for the price.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Michael Kors - April 10, 2023
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button size="lg">Write a Review</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default ProductDetailsCard;
