import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { theme } from '../../../globalStyles/colorScheme';
import { StyledContainer } from './statistics-styles';

const Statistics = () => {
  const data = [
    { name: 'Home', value: 400, color: theme.colors.blue },
    { name: 'Food', value: 200, color: theme.colors.pink },
    { name: 'Entertainment', value: 600, color: theme.colors.orange },
    { name: 'Transport', value: 1200, color: theme.colors.yellow },
    { name: 'Other', value: 700, color: theme.colors.green }
  ];

  return (
    <ResponsiveContainer width="95%" height={400}>
      <PieChart data={data}>
        <Pie dataKey="value" data={data} cx="50%" cy="40%" innerRadius={60} stroke="none">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />

        <Legend iconType={'rect'} align={'right'} verticalAlign={'top'} layout={'vertical'} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
