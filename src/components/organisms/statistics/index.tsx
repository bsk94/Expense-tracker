import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { theme } from '../../../globalStyles/colorScheme';
import { StyledContainer } from './statistics-styles';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';
import { ReactComponent as House } from '../../../assets/icons/house.svg';
import { ReactComponent as Transport } from '../../../assets/icons/bus.svg';
import { ReactComponent as Food } from '../../../assets/icons/silverware.svg';
import { ReactComponent as Entertainment } from '../../../assets/icons/smily.svg';
import { ReactComponent as Other } from '../../../assets/icons/pen.svg';

import {
  StyledIconListItem,
  StyledIconList,
  StyledTextContainer,
  StyledCalendarIcon
} from './statistics-styles';
import { useState, useEffect } from 'react';
import SvgIcon from '../../atoms/svg';

import DatePickerModal from '../../atoms/datePicker';
import { localData } from '../../../localData';

const Statistics = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isDesktop } = useIsDesktop();

  const data = [
    { name: 'Home', value: 0, color: theme.colors.blue, icon: House },
    { name: 'Food', value: 0, color: theme.colors.pink, icon: Food },
    { name: 'Entertainment', value: 0, color: theme.colors.orange, icon: Entertainment },
    { name: 'Transport', value: 0, color: theme.colors.yellow, icon: Transport },
    { name: 'Other', value: 0, color: theme.colors.green, icon: Other }
  ];
  const [filterData, useFilterData] = useState(localData);

  const filterDate = (dates: any) => {
    const [startDate, endDate] = dates;
    const resultProductData = localData.filter((item: any) => {
      const itemDate = new Date(item.date);
      console.log(itemDate);
      return itemDate >= startDate && itemDate <= endDate;
    });
    useFilterData(resultProductData);
    console.log(filterData);
  };

  (function () {
    return data.forEach((element: any) => {
      const currentCategory = element.name;
      filterData.forEach((item) => {
        if (item.expCat === currentCategory) {
          element.value += item.amount;
        }
      });
    });
  })();

  return (
    <>
      <DatePickerModal
        selectRange={true}
        onChange={(e: any) => filterDate(e)}
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
                  <span>{value} $</span>
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
