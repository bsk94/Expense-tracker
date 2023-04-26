import {
  StyledFinanceListItemDesktop,
  StyledLink,
  StyledEditDeleteDesktop,
  StyledLeftSideDataContainer,
  StyledNameDateContainer,
  StyledAmountEditDelContainer,
  StyledFinanceListItem,
  StyledEditDelete
} from './budgetListItem';
import deleteIcon from '../../../assets/icons/trashbin.svg';
import editIcon from '../../../assets/icons/edit icon.svg';
import { useFinancePosts } from '../../../shared/hooks/finance';
import { useState } from 'react';
import { useDeleteFinance } from '../../../shared/hooks/finance';
import { useBalance } from '../../../shared/hooks/balance';

import { forwardRef } from 'react';

type Props = {
  item: {
    name: string;
    amount: number;
    date: string;
    _id: string;
    icon: string;
    financeType: string;
  };
  isDesktop: boolean;
  categoryPick: string;
  dateRange: string;
  currentFinType: 'all' | 'expense' | 'revenue';
};

const BudgetListItem = forwardRef<HTMLLIElement, Props>(
  (
    {
      item: { name, amount, date, _id: id, icon, financeType },
      isDesktop,
      categoryPick,
      dateRange,
      currentFinType
    },
    ref
  ) => {
    const [showEditDelete, setShowEditDelete] = useState(false);

    const { mutateAsync } = useDeleteFinance();
    const { refetch } = useFinancePosts({ categoryPick, dateRange, currentFinType });
    const { refetch: refetchBalance } = useBalance();

    const handleDelete = async (id: string) => {
      await mutateAsync(id);
      refetch();
      refetchBalance();
    };

    const liRef = ref ? { ref } : null;

    return (
      <>
        {isDesktop ? (
          <StyledFinanceListItemDesktop {...liRef}>
            <StyledLeftSideDataContainer>
              <img src={icon} />
              <StyledNameDateContainer>
                <span>{name}</span>
                <span>{date}</span>
              </StyledNameDateContainer>
            </StyledLeftSideDataContainer>
            <StyledAmountEditDelContainer>
              <span>
                {financeType === 'revenue' ? '+ ' : '- '}
                {amount} $
              </span>
              <StyledEditDeleteDesktop>
                <StyledLink to={`/edit/id/${id}`}>
                  <img src={editIcon} />
                </StyledLink>
                <img src={deleteIcon} onClick={() => handleDelete(id)} />
              </StyledEditDeleteDesktop>
            </StyledAmountEditDelContainer>
          </StyledFinanceListItemDesktop>
        ) : (
          <StyledFinanceListItem
            key={id}
            showEditDelete={showEditDelete}
            onClick={() => setShowEditDelete(!showEditDelete)}
            {...liRef}>
            <StyledLeftSideDataContainer>
              <img src={icon} />
              <StyledNameDateContainer>
                <span>{name}</span>
                <span>{date}</span>
              </StyledNameDateContainer>
            </StyledLeftSideDataContainer>
            <StyledAmountEditDelContainer>
              <span>
                {financeType === 'revenue' ? '+ ' : '- '}
                {amount} $
              </span>

              {showEditDelete ? (
                <StyledEditDelete>
                  <img src={deleteIcon} onClick={() => handleDelete(id)} />
                  <StyledLink to={`/edit/id/${id}`}>
                    <img src={editIcon} />
                  </StyledLink>
                </StyledEditDelete>
              ) : null}
            </StyledAmountEditDelContainer>
          </StyledFinanceListItem>
        )}
      </>
    );
  }
);

BudgetListItem.displayName = 'BudgetListItem';

export default BudgetListItem;
