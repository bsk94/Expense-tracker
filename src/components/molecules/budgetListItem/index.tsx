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

type OverviewProps = {
  item: BudgetItemList;
  isDesktop: boolean;
};

const BudgetListItem = ({
  item: { name, amount, date, id, icon, financeType },
  isDesktop
}: OverviewProps) => {
  const [showEditDelete, setShowEditDelete] = useState(false);

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
              <img src={deleteIcon} onClick={() => 'Hi!'} />
            </StyledEditDeleteDesktop>
          </StyledAmountEditDelContainer>
        </StyledFinanceListItemDesktop>
      ) : (
        <StyledFinanceListItem key={id} onClick={() => setShowEditDelete(!showEditDelete)}>
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
                <img src={deleteIcon} onClick={() => 'hi!'} />
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
