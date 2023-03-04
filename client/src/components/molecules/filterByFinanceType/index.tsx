import { StyledList } from './filterByFinanceType-styles';
import { financeType } from '../../../helpers/category';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import { currentFinanceCategory } from '../../../features/financeSlice';

const FilterByFinanceType = () => {
  const dispatch = useDispatch();
  const currentFinType = useSelector((state: RootState) => state.finance.financeTypes);

  return (
    <StyledList>
      {financeType.map((category) => (
        <li
          className={currentFinType === category ? 'active' : ''}
          onClick={() => dispatch(currentFinanceCategory(category))}
          key={category}>
          {category}
        </li>
      ))}
    </StyledList>
  );
};

export default FilterByFinanceType;
