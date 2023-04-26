import { StyledList, StyledParagraf, StyledConatiner } from './budgetList-styles';
import BudgetListItem from '../budgetListItem';
import payday from '../../../assets/icons/payday-icon.svg';
import food from '../../../assets/icons/silverware.svg';
import home from '../../../assets/icons/house.svg';
import entertainment from '../../../assets/icons/smily.svg';
import transport from '../../../assets/icons/bus.svg';
import other from '../../../assets/icons/pen.svg';
import { BudgetItem, BudgetItemList } from '../../../shared/types';
import { FetchFinanceProps, useFinancePosts } from '../../../shared/hooks/finance';
import Skeleton from '../skeletonLoading';
import { StyledError } from '../../../shared/styles';
import { useCallback } from 'react';
import React from 'react';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';

const categoryIcons: any = { food, home, entertainment, transport, other };

const BudgetList = ({ categoryPick, dateRange, currentFinType }: FetchFinanceProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    useFinancePosts({
      categoryPick,
      dateRange,
      currentFinType
    });

  const { isDesktop } = useIsDesktop();

  const addVisibilityAndIconToData = (item: BudgetItem): BudgetItemList => {
    if (item.financeType === 'revenue') {
      return { ...item, isVisible: false, icon: payday };
    } else {
      return {
        ...item,
        isVisible: false,
        icon: categoryIcons[item.expenseCategory.toLowerCase()]
      };
    }
  };

  const intObserver = React.useRef<IntersectionObserver | null>(null);

  const handleItemRef = useCallback(
    (itemRef: HTMLLIElement | null) => {
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((items) => {
        if (items[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (itemRef) intObserver.current.observe(itemRef);
    },
    [fetchNextPage, hasNextPage]
  );

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <StyledError>Ooops! Something went wrong...</StyledError>;
  }

  return (
    <StyledConatiner>
      <StyledParagraf>Found {data?.pages[0].count} records</StyledParagraf>
      <StyledList>
        {data?.pages?.map((page: any) =>
          page.finance.map((item: BudgetItem, index: number) => {
            const isLastItem = page.finance.length === index + 1;
            if (isLastItem) {
              return (
                <BudgetListItem
                  ref={handleItemRef}
                  key={item._id}
                  isDesktop={isDesktop}
                  item={addVisibilityAndIconToData(item)}
                  categoryPick={categoryPick}
                  dateRange={dateRange}
                  currentFinType={currentFinType}
                />
              );
            } else {
              return (
                <BudgetListItem
                  key={item._id}
                  item={addVisibilityAndIconToData(item)}
                  isDesktop={isDesktop}
                  categoryPick={categoryPick}
                  dateRange={dateRange}
                  currentFinType={currentFinType}
                />
              );
            }
          })
        )}
      </StyledList>
    </StyledConatiner>
  );
};

export default BudgetList;
