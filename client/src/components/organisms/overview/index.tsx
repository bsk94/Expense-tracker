import { useState, useEffect } from 'react';
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
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [categoryPick, useCategoryPick] = useState<string>('');
  const [dateRange, useDateRange] = useState('');

  const currentFinType = useSelector((state: RootState) => state.finance.financeTypes);

  const { financeData, totalFinanceNumber, numberOfPages, isLoading, isError } = useFinance({
    page,
    categoryPick,
    dateRange,
    currentFinType
  });
  const { balance } = useBalance();

  useEffect(() => {
    setPage(1);
  }, [currentFinType, dateRange, categoryPick]);

  return (
    <>
      <DatePickerModal
        selectRange={true}
        onChange={(e: any) => useDateRange(e)}
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
          categoryPick={categoryPick}
          dateRange={dateRange}
          currentFinType={currentFinType}
        />
        <Pagination numberOfPages={numberOfPages} setPage={setPage} page={page} />
      </StyledOverviewContainer>
    </>
  );
};

export default Overview;
