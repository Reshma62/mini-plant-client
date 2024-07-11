/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0Ck0BPOknNR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#F5F5F5] px-3 py-1 text-sm">
                Image Gallery
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Our Plant Gallery
              </h2>
              <p className="max-w-[900px] text-[#757575] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse through our collection of beautiful plant photos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Plant Gallery 1"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Plant Gallery 2"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Plant Gallery 3"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Plant Gallery 4"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img src="/placeholder.svg" width="300" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
