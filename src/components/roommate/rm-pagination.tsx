import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const RmPagination = ({ total, pageSize, currentPage, basePath }: any) => {
  const totalPages = Math.ceil(total / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`${basePath}?page=${currentPage - 1}`} />
          </PaginationItem>
        )}

        {pages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`${basePath}?page=${page}`}
              isActive={page === currentPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={`${basePath}?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default RmPagination;
