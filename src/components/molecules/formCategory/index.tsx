import React from 'react';
import { StyledIconListItem, StyledIconList } from './formCategory-styles';
import { categoryForm } from '../../../helpers/category';
import SvgIcon from '../../atoms/svg';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';

interface CategoryProps {
  setChosen: React.Dispatch<React.SetStateAction<string>>;
  chosen: string;
  form: any;
}

const Category: React.FC<CategoryProps> = ({ form, chosen, setChosen }) => {
  const { isDesktop } = useIsDesktop();

  const handleCategory = (cat: string) => {
    form.setFieldValue('expenseCategory', cat);
    setChosen(cat);
  };

  return (
    <StyledIconList>
      {categoryForm.map(({ cat, icon }) => {
        return (
          <StyledIconListItem key={cat}>
            <SvgIcon
              Icon={icon}
              onClick={() => handleCategory(cat)}
              fill={cat === chosen ? 'active' : ''}
              width={isDesktop ? 55 : 42}
            />
            <span>{cat}</span>
          </StyledIconListItem>
        );
      })}
    </StyledIconList>
  );
};

export default Category;
