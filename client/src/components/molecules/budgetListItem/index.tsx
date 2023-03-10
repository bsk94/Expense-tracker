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
import { BudgetItemList } from '../../../shared/types';
import { useState } from 'react';
import { useDeleteFinance, useFinance } from '../../../shared/hooks/finance';

type OverviewProps = {
  item: BudgetItemList;
  isDesktop: boolean;
  page: number;
};

const BudgetListItem = ({
  item: { name, amount, date, _id: id, icon, financeType },
  isDesktop,
  page
}: OverviewProps) => {
  const [showEditDelete, setShowEditDelete] = useState(false);

  const { mutateAsync } = useDeleteFinance();
  const { refetch } = useFinance(page);

  const handleDelete = async (id: string) => {
    await mutateAsync(id);
    refetch();
  };

  return (
    <>
      {isDesktop ? (
        <StyledFinanceListItemDesktop>
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
          onClick={() => setShowEditDelete(!showEditDelete)}>
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
};

export default BudgetListItem;
