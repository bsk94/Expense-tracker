import { useState, useEffect, useContext } from 'react';
import DatePickerModal from '../../atoms/datePicker';
import BudgetList from '../../molecules/budgetList';
import FilterByFinanceType from '../../molecules/filterByFinanceType';
import TotalBalance from '../../molecules/totalBalance';
import {
  StyledOverviewContainer,
  StyledCalendarIcon,
  StyledCategoryAndCalendarContainer
} from './overview-styled';

import { useBalance } from '../.././../shared/hooks/balance';
import CategoryFilter from '../../atoms/categoryFilter/index';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import { Navigate } from 'react-router-dom';

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryPick, useCategoryPick] = useState('');
  const [dateRange, useDateRange] = useState('');

  const currentFinType = useSelector((state: RootState) => state.finance.financeTypes);

  const { balance } = useBalance();

  useEffect(() => {
    if (currentFinType !== 'expense') {
      useCategoryPick('');
      useDateRange('');
    }
  }, [currentFinType]);

  const isUser = useSelector((state: RootState) => state.auth.isUser);
  if (!isUser) {
    return <Navigate to={'/login'} />;
  }

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
          categoryPick={categoryPick}
          dateRange={dateRange}
          currentFinType={currentFinType}
        />
      </StyledOverviewContainer>
    </>
  );
};

export default Overview;
