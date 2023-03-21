import { StyledTotalBalance, StyledTotalBalanceAmount } from './totalBalance-styles';

interface TotalBalaceProps {
  balance: number;
}

const TotalBalance = ({ balance }: TotalBalaceProps) => {
  return (
    <StyledTotalBalance>
      <span>Total Balance</span>
      <StyledTotalBalanceAmount>$ {balance}</StyledTotalBalanceAmount>
    </StyledTotalBalance>
  );
};

export default TotalBalance;
