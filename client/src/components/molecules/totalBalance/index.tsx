import { StyledTotalBalance, StyledTotalBalanceAmount } from './totalBalance-styles';

const TotalBalance = () => {
  return (
    <StyledTotalBalance>
      <span>Total Balance</span>
      <StyledTotalBalanceAmount>$ 12,548,00</StyledTotalBalanceAmount>
    </StyledTotalBalance>
  );
};

export default TotalBalance;
