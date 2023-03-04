import { useState } from 'react';
import DatePickerModal from '../../atoms/datePicker';
import BudgetList from '../../molecules/budgetList';
import FilterByFinanceType from '../../molecules/filterByFinanceType';
import TotalBalance from '../../molecules/totalBalance';
import { StyledOverviewContainer, StyledCalendarIcon } from './overview-styled';

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <DatePickerModal
        selectRange={true}
        onChange={(e: any) => console.log(e)}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <StyledOverviewContainer>
        <TotalBalance />
        <FilterByFinanceType />
        <StyledCalendarIcon onClick={() => setIsModalOpen(true)} alt="calendar icon" />
        <BudgetList />
      </StyledOverviewContainer>
    </>
  );
};

export default Overview;
