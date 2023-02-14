import React from 'react';
import TotalBalance from '../../molecules/totalBalance';
import { StyledOverviewContainer } from './overview-styled';

const Overview = () => {
  return (
    <StyledOverviewContainer>
      <TotalBalance />
    </StyledOverviewContainer>
  );
};

export default Overview;
