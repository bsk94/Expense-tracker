import { useState } from 'react';
import DatePickerModal from '../../atoms/datePicker';
import BudgetList from '../../molecules/budgetList';
import FilterByFinanceType from '../../molecules/filterByFinanceType';
import TotalBalance from '../../molecules/totalBalance';
import {
  StyledOverviewContainer,
  StyledCalendarIcon,
  StyledCategoryAndCalendarContainer
} from './overview-styled';
import { useFinance } from '../.././../shared/hooks/finance';
import { useBalance } from '../.././../shared/hooks/balance';
import Pagination from '../../molecules/pagination/index';
import CategoryFilter from '../../atoms/categoryFilter/index';

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [categoryPick, useCategoryPick] = useState<string>('');
  console.log('jjj', categoryPick);

  const { financeData, totalFinanceNumber, numberOfPages, isLoading, isError } = useFinance(page);
  const { balance } = useBalance();

  return (
    <>
      <DatePickerModal
        selectRange={true}
        onChange={(e: React.ChangeEvent) => console.log(e)}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <StyledOverviewContainer>
        <TotalBalance balance={balance} />
        <FilterByFinanceType />
        <StyledCategoryAndCalendarContainer>
          <StyledCalendarIcon onClick={() => setIsModalOpen(true)} alt="calendar icon" />

          <CategoryFilter useCategoryPick={useCategoryPick} />
        </StyledCategoryAndCalendarContainer>

        <BudgetList
          financeData={financeData}
          isLoading={isLoading}
          isError={isError}
          totalFinanceNumber={totalFinanceNumber}
          page={page}
        />
        <Pagination numberOfPages={numberOfPages} setPage={setPage} page={page} />
      </StyledOverviewContainer>
    </>
  );
};

export default Overview;
