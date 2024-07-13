"use client";

import ProductCard from "@/components/products/ProductCard";
import CustomPagination from "@/components/shared/CustomPagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const Products = () => {
  const [value, setValue] = useState("");
  const limit = 8;
  const [page, setPage] = useState(1);
  const { data: products, isLoading } = useGetProductsQuery({
    page,
    limit,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const count = products?.data?.count;

  return (
    <div className="flex flex-col min-h-screen mt-20">
      <main className="flex-1 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 py-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="electronics">
                <AccordionTrigger className="flex items-center justify-between">
                  Electronics
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
            </Accordion>
            <Separator className="my-6" />
            <h3 className="text-lg font-bold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="price-range">Price Range</Label>
                <Select
                  onValueChange={(value) => setValue(value)}
                  value={value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="filter by price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>price</SelectLabel>
                      <SelectItem value="asc">low to high</SelectItem>
                      <SelectItem value="desc">high to low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products?.data?.data.map((product: Record<string, string>) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
          <div className="col-span-full  ">
            <CustomPagination
              count={count}
              setPage={setPage}
              page={page}
              size={limit}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
