import React from 'react';
import { StyledIconListItem, StyledIconList } from './formCategory-styles';
import { categoryForm } from '../../../helpers/category';
import SvgIcon from '../../atoms/svg';

interface CategoryProps {
  setChosen: React.Dispatch<React.SetStateAction<string>>;
  chosen: string;
  form: any;
}

const Category: React.FC<CategoryProps> = ({ form, chosen, setChosen }) => {
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
            />
            <span>{cat}</span>
          </StyledIconListItem>
        );
      })}
    </StyledIconList>
  );
};

export default Category;
