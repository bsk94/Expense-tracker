import { StyledList, StyledParagraf } from './budgetList-styles';
import BudgetListItem from '../budgetListItem';
import payday from '../../../assets/icons/payday-icon.svg';
import food from '../../../assets/icons/silverware.svg';
import home from '../../../assets/icons/house.svg';
import entertainment from '../../../assets/icons/smily.svg';
import transport from '../../../assets/icons/bus.svg';
import other from '../../../assets/icons/pen.svg';
import { BudgetItemList, BudgetItem } from '../../../shared/types';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';
import Skeleton from '../skeletonLoading';
import { StyledError } from '../../../shared/styles';

const categoryIcons: any = { food, home, entertainment, transport, other };

interface BudgetListProps {
  financeData: BudgetItem[];
  isLoading: boolean;
  isError: boolean;
  totalFinanceNumber: number;
  page: number;
  categoryPick: string;
  dateRange: string;
  currentFinType: string;
}

const BudgetList = ({
  financeData,
  isLoading,
  isError,
  totalFinanceNumber,
  page,
  categoryPick,
  dateRange,
  currentFinType
}: BudgetListProps) => {
  const { isDesktop } = useIsDesktop();

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

  return (
    <StyledList>
      <StyledParagraf>Found {totalFinanceNumber} records</StyledParagraf>
      {addVisibilityAndIconToData(financeData)?.map((item) => (
        <BudgetListItem
          key={item._id}
          isDesktop={isDesktop}
          page={page}
          item={item}
          currentFinType={currentFinType}
          categoryPick={categoryPick}
          dateRange={dateRange}
        />
      ))}
    </StyledList>
  );
};

export default BudgetList;
