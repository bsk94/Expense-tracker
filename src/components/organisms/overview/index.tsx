import React from 'react';
import FilterByFinanceType from '../../molecules/filterByFinanceType';
import TotalBalance from '../../molecules/totalBalance';
import { StyledOverviewContainer } from './overview-styled';

const Overview = () => {
  return (
    <StyledOverviewContainer>
      <TotalBalance />
      <FilterByFinanceType />
    </StyledOverviewContainer>
  );
};

export default Overview;
