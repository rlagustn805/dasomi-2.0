import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface RmPaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
  basePath: string;
}

const RmPagination = ({
  total,
  pageSize,
  currentPage,
  basePath,
}: RmPaginationProps) => {
  const totalPages = Math.ceil(total / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const buildPageUrl = (page: number) => {
    const separator = basePath.includes('?') ? '&' : '?';
    return `${basePath}${separator}page=${page}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={buildPageUrl(currentPage - 1)} />
          </PaginationItem>
        )}

        {pages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              href={buildPageUrl(page)}
              isActive={page === currentPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={buildPageUrl(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default RmPagination;
