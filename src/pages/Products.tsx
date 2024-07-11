import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 py-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="electronics">
                <AccordionTrigger className="flex items-center justify-between">
                  Electronics
                  <ChevronDown className="h-4 w-4" />
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Laptops
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Smartphones
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Headphones
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Cameras
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="clothing">
                <AccordionTrigger className="flex items-center justify-between">
                  Clothing
                  <ChevronDown className="h-4 w-4" />
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Shirts
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Pants
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Dresses
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="home">
                <AccordionTrigger className="flex items-center justify-between">
                  Home
                  <ChevronDown className="h-4 w-4" />
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Furniture
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Decor
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Kitchen
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-primary">
                        Bedding
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator className="my-6" />
            <h3 className="text-lg font-bold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="price-range">Price Range</Label>
                <div className="mt-2" />
              </div>
             
             
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-card p-4 rounded-lg shadow-md">
                <img
                  src="/placeholder.svg"
                  alt="Product 1"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Product 1</h3>
                <p className="text-muted-foreground mb-4">
                  Description of Product 1
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$49.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-md">
                <img
                  src="/placeholder.svg"
                  alt="Product 2"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Product 2</h3>
                <p className="text-muted-foreground mb-4">
                  Description of Product 2
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$79.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-md">
                <img
                  src="/placeholder.svg"
                  alt="Product 3"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Product 3</h3>
                <p className="text-muted-foreground mb-4">
                  Description of Product 3
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$99.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-md">
                <img
                  src="/placeholder.svg"
                  alt="Product 4"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Product 4</h3>
                <p className="text-muted-foreground mb-4">
                  Description of Product 4
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$59.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-md">
                <img
                  src="/placeholder.svg"
                  alt="Product 5"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Product 5</h3>
                <p className="text-muted-foreground mb-4">
                  Description of Product 5
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$89.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-md">
                <img
                  src="/placeholder.svg"
                  alt="Product 6"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Product 6</h3>
                <p className="text-muted-foreground mb-4">
                  Description of Product 6
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$69.99</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
