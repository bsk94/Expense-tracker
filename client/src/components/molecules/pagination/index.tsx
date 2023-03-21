import { StyledPaginationWrapper } from './pagination-styles';
import Button from '../../atoms/button/index';

interface PaginationProps {
  numberOfPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ numberOfPages, page, setPage }: PaginationProps) => {
  return (
    <StyledPaginationWrapper>
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="pageDiv__btn--arrow">
        {'<'}
      </Button>
      <span>{page}</span>
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === numberOfPages}
        className="pageDiv__btn--arrow">
        {'>'}
      </Button>
    </StyledPaginationWrapper>
  );
};

export default Pagination;
