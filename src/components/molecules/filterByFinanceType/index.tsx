import { StyledList } from './filterByFinanceType-styles';
import { financeType } from '../../../helpers/category';

const FilterByFinanceType = () => {
  return (
    <StyledList>
      {financeType.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </StyledList>
  );
};

export default FilterByFinanceType;
