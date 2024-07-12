import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

interface CustomPaginationProps {
  count: number;
  setPage: (page: number) => void;
  page: number;
  size: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  setPage,
  page,
  size,
}) => {
  const pages = Math.ceil(count / size);

  const getDisplayPages = () => {
    const displayPages = [];
    const maxPagesToShow = 5;

    if (pages <= maxPagesToShow) {
      for (let i = 1; i <= pages; i++) {
        displayPages.push(i);
      }
    } else {
      const startPages = [1, 2, 3];
      const endPages = [pages];
      const middlePage = page;

      if (middlePage > 3 && middlePage < pages - 2) {
        displayPages.push(...startPages);
        displayPages.push("...");
        displayPages.push(middlePage);
        displayPages.push("...");
        displayPages.push(...endPages);
      } else if (middlePage <= 3) {
        for (let i = 1; i <= 4; i++) {
          displayPages.push(i);
        }
        displayPages.push("...");
        displayPages.push(pages);
      } else {
        displayPages.push(...startPages);
        displayPages.push("...");
        for (let i = pages - 2; i <= pages; i++) {
          displayPages.push(i);
        }
      }
    }

    return displayPages;
  };

  const handlePrevious = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    if (page < pages) {
      setPage(page + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="cursor-pointer hover:bg-primaryColor/45 bg-slate-200 p-2 rounded-full hover:text-white">
          <CircleChevronLeft onClick={handlePrevious} />
        </PaginationItem>
        {getDisplayPages().map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(Number(pageNumber));
                }}
                className={pageNumber === page ? "bg-primaryColor/25" : ""}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem className="cursor-pointer hover:bg-primaryColor/45 bg-slate-200 p-2 rounded-full hover:text-white">
          <CircleChevronRight onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
