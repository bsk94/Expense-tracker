import { StyledList, StyledParagraf, StyledPaginationWrapper } from './budgetList-styles';
import BudgetListItem from '../budgetListItem';
import payday from '../../../assets/icons/payday-icon.svg';
import food from '../../../assets/icons/silverware.svg';
import home from '../../../assets/icons/house.svg';
import entertainment from '../../../assets/icons/smily.svg';
import transport from '../../../assets/icons/bus.svg';
import other from '../../../assets/icons/pen.svg';
import { BudgetItemList, BudgetItem } from '../../../shared/types';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';
import { useFinance } from '../.././../shared/hooks/finance';
import Skeleton from '../skeletonLoading';
import { StyledError } from '../../../shared/styles';
import { useState } from 'react';
import Button from '../../atoms/button';

const categoryIcons: any = { food, home, entertainment, transport, other };

const BudgetList = () => {
  const { isDesktop } = useIsDesktop();
  const [page, setPage] = useState(1);

  const { financeData, totalFinanceNumber, numberOfPages, isLoading, isError } = useFinance(page);

  const addVisibilityAndIconToData = (financeData: BudgetItem[]): BudgetItemList[] => {
    return financeData?.map((element: any) => {
      if (element.financeType === 'revenue') {
        return { ...element, isVisible: false, icon: payday };
      } else {
        return {
          ...element,
          isVisible: false,
          icon: categoryIcons[element.expenseCategory.toLowerCase()]
        };
      }
    });
  };

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <StyledError>Ooops! Something went wrong...</StyledError>;
  }
  console.log(financeData);
  return (
    <>
      <StyledList>
        <StyledParagraf>Found {totalFinanceNumber} records</StyledParagraf>
        {addVisibilityAndIconToData(financeData)?.map((item) => (
          <BudgetListItem key={item._id} isDesktop={isDesktop} page={page} item={item} />
        ))}
      </StyledList>
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
          disabled={page === numberOfPages - 1}
          className="pageDiv__btn--arrow">
          {'>'}
        </Button>
      </StyledPaginationWrapper>
    </>
  );
};

export default BudgetList;
