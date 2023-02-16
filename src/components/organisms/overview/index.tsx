import BudgetList from '../../molecules/budgetList';
import FilterByFinanceType from '../../molecules/filterByFinanceType';
import TotalBalance from '../../molecules/totalBalance';
import { StyledOverviewContainer } from './overview-styled';

const Overview = () => {
  return (
    <StyledOverviewContainer>
      <TotalBalance />
      <FilterByFinanceType />
      <BudgetList />
    </StyledOverviewContainer>
  );
};

export default Overview;
