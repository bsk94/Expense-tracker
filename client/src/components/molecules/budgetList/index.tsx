import { StyledList } from './budgetList-styles';
import { localData } from '../../../localData';
import BudgetListItem from '../budgetListItem';
import payday from '../../../assets/icons/payday-icon.svg';
import food from '../../../assets/icons/silverware.svg';
import home from '../../../assets/icons/house.svg';
import entertainment from '../../../assets/icons/smily.svg';
import transport from '../../../assets/icons/bus.svg';
import other from '../../../assets/icons/pen.svg';
import { BudgetItemList, BudgetItem } from '../../../shared/types';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';

const categoryIcons: any = { food, home, entertainment, transport, other };

const BudgetList = () => {
  const { isDesktop } = useIsDesktop();
  console.log(localData);

  const addVisibilityAndIconToData = (localData: BudgetItem[]): BudgetItemList[] => {
    return localData.map((element: any) => {
      if (element.financeType === 'revenue') {
        return { ...element, isVisible: false, icon: payday };
      } else {
        return {
          ...element,
          isVisible: false,
          icon: categoryIcons[element.expCat.toLowerCase()]
        };
      }
    });
  };
  console.log(addVisibilityAndIconToData(localData));

  return (
    <>
      <StyledList>
        {addVisibilityAndIconToData(localData).map((item) => (
          <BudgetListItem key={item.id} isDesktop={isDesktop} item={item} />
        ))}
      </StyledList>
    </>
  );
};

export default BudgetList;
