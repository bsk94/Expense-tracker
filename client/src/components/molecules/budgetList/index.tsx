import { StyledList } from './budgetList-styles';
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

const categoryIcons: any = { food, home, entertainment, transport, other };

const BudgetList = () => {
  const { isDesktop } = useIsDesktop();

  const { data, isLoading, isError } = useFinance();

  const addVisibilityAndIconToData = (data: BudgetItem[]): BudgetItemList[] => {
    return data?.map((element: any) => {
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

  return (
    <>
      <StyledList>
        {addVisibilityAndIconToData(data)?.map((item) => (
          <BudgetListItem key={item.id} isDesktop={isDesktop} item={item} />
        ))}
      </StyledList>
    </>
  );
};

export default BudgetList;
