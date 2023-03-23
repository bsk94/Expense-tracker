import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { theme } from '../../../globalStyles/colorScheme';
import { StyledContainer } from './statistics-styles';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';
import { ReactComponent as House } from '../../../assets/icons/house.svg';
import { ReactComponent as Transport } from '../../../assets/icons/bus.svg';
import { ReactComponent as Food } from '../../../assets/icons/silverware.svg';
import { ReactComponent as Entertainment } from '../../../assets/icons/smily.svg';
import { ReactComponent as Other } from '../../../assets/icons/pen.svg';
import { useFinanceStatistics } from '../../../shared/hooks/statistics';
import { BudgetItem } from '../../../shared/types';

import {
  StyledIconListItem,
  StyledIconList,
  StyledTextContainer,
  StyledCalendarIcon
} from './statistics-styles';
import { useState } from 'react';
import SvgIcon from '../../atoms/svg';
import DatePickerModal from '../../atoms/datePicker';

const Statistics = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isDesktop } = useIsDesktop();

  const [dates, useDates] = useState('');
  const { data: itemList } = useFinanceStatistics(dates);

  const valuesMap = new Map([
    ['Home', 0],
    ['Food', 0],
    ['Entertainment', 0],
    ['Transport', 0],
    ['Other', 0]
  ]);

  itemList?.map((item: BudgetItem) => {
    if (item.expenseCategory) {
      valuesMap.set(
        item.expenseCategory,
        (valuesMap.get(item.expenseCategory) as number) + item.amount
      );
    }
  });

  const data = [
    { name: 'Home', value: valuesMap.get('Home'), color: theme.colors.blue, icon: House },
    { name: 'Food', value: valuesMap.get('Food'), color: theme.colors.pink, icon: Food },
    {
      name: 'Entertainment',
      value: valuesMap.get('Entertainment'),
      color: theme.colors.orange,
      icon: Entertainment
    },
    {
      name: 'Transport',
      value: valuesMap.get('Transport'),
      color: theme.colors.yellow,
      icon: Transport
    },
    { name: 'Other', value: valuesMap.get('Other'), color: theme.colors.green, icon: Other }
  ];

  return (
    <>
      <DatePickerModal
        selectRange={true}
        onChange={(e: any) => useDates(e)}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <StyledContainer>
        <StyledCalendarIcon onClick={() => setIsModalOpen(true)} alt="calendar icon" />
        <ResponsiveContainer height="55%" width="100%">
          <PieChart data={data}>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="55%"
              innerRadius={isDesktop ? 60 : 45}
              stroke="none">
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
          {data.map(({ name, value, icon }) => {
            return (
              <StyledIconListItem key={name}>
                <SvgIcon Icon={icon} width={isDesktop ? 55 : 42} />
                <StyledTextContainer>
                  <span>{name}</span>
                  <span>$ {value}</span>
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
