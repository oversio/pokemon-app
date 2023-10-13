import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import { LIMIT_PER_PAGE } from "@/constants";

import { IconLink } from "./ui/icon-link";

interface PaginatorProps {
  currentPage: number | undefined;
  limit?: number;
  total: number | undefined;
}

export function Paginator({ currentPage = 1, limit = LIMIT_PER_PAGE, total = 0 }: PaginatorProps) {
  const totalPages = Math.ceil(total / limit);
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  const prevPage = currentPage > 1 ? currentPage - 1 : null;

  return (
    <div className=" fixed bottom-0 left-0 right-0 bg-teal-200 w-full">
      <nav className=" flex justify-center items-center gap-2 w-full h-full py-4">
        <IconLink href={{ pathname: "/", query: { page: 1 } }}>
          <MdKeyboardDoubleArrowLeft size={32} />
        </IconLink>
        <IconLink href={{ pathname: "/", query: { page: prevPage } }}>
          <MdKeyboardArrowLeft size={32} />
        </IconLink>
        <span>
          {currentPage} of {totalPages}
        </span>
        <IconLink href={{ pathname: "/", query: { page: nextPage } }}>
          <MdKeyboardArrowRight size={32} />
        </IconLink>
        <IconLink href={{ pathname: "/", query: { page: totalPages } }}>
          <MdKeyboardDoubleArrowRight size={32} />
        </IconLink>
      </nav>
    </div>
  );
}
