import { Pagination } from "keep-react";
import React, { useState } from "react";

export const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithOutText={true}
      prevNextShape="none"
      showGoToPaginate={true}
    />
  );
}