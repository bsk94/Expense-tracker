import {
  StyledSelectContainer,
  StyledSelectIcon,
  StyledContainer,
  StyledItemList
} from './categoryFilter';
import { categoryForm } from '../../../helpers/category';
import { useState } from 'react';
import { useClickOutside } from '../../../shared/hooks/clickOutside';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';

interface CategoryFilterProps {
  useCategoryPick: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryFilter = ({ useCategoryPick }: CategoryFilterProps) => {
  const [isSelectOpen, useIsSelectOpen] = useState<boolean>(false);

  const currentFinType = useSelector((state: RootState) => state.finance.financeTypes);

  const selectRef = useClickOutside(() => {
    useIsSelectOpen(false);
  });

  return (
    <StyledContainer ref={selectRef}>
      <StyledSelectIcon
        onClick={() => useIsSelectOpen(true)}
        className={currentFinType !== 'expense' ? 'disable' : ''}
        alt="select icon"
      />
      {isSelectOpen ? (
        <StyledSelectContainer>
          {categoryForm.map(({ cat }) => (
            <StyledItemList key={cat} onClick={() => useCategoryPick(cat)}>
              {cat}
            </StyledItemList>
          ))}
        </StyledSelectContainer>
      ) : null}
    </StyledContainer>
  );
};

export default CategoryFilter;
