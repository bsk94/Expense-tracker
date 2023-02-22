import { color } from 'd3-color';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { theme } from '../../../globalStyles/colorScheme';
import { StyledContainer } from './statistics-styles';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';
import {
  StyledIconListItem,
  StyledIconList,
  StyledTextContainer,
  StyledCalendarIcon
} from './statistics-styles';
import { useState } from 'react';
import SvgIcon from '../../atoms/svg';
import { categoryForm } from '../../../helpers/category';
import DatePickerModal from '../../atoms/datePicker';

const Statistics = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const data = [
    { name: 'Home', value: 400, color: theme.colors.blue },
    { name: 'Food', value: 200, color: theme.colors.pink },
    { name: 'Entertainment', value: 600, color: theme.colors.orange },
    { name: 'Transport', value: 1200, color: theme.colors.yellow },
    { name: 'Other', value: 700, color: theme.colors.green }
  ];

  const { isDesktop } = useIsDesktop();

  return (
    <>
      <DatePickerModal
        selectRange={true}
        onChange={(e: any) => console.log(e)}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <StyledContainer>
        <ResponsiveContainer height="55%" width="100%">
          <PieChart data={data}>
            <Pie dataKey="value" data={data} cx="50%" cy="55%" innerRadius={60} stroke="none">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />

            <Legend
              iconType={'rect'}
              align={isDesktop ? 'right' : 'center'}
              verticalAlign={'top'}
              layout={isDesktop ? 'vertical' : 'horizontal'}
            />
          </PieChart>
        </ResponsiveContainer>{' '}
        <StyledIconList>
          <StyledCalendarIcon onClick={() => setIsModalOpen(true)} alt="calendar icon" />
          {categoryForm.map(({ cat, icon }) => {
            return (
              <StyledIconListItem key={cat}>
                <SvgIcon Icon={icon} width={isDesktop ? 55 : 42} />
                <StyledTextContainer>
                  <span>{cat}</span>
                  <span>2000$</span>
                </StyledTextContainer>
              </StyledIconListItem>
            );
          })}
        </StyledIconList>
      </StyledContainer>
    </>
  );
};

export default Statistics;
