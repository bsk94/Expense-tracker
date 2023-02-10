import home from '../assets/icons/home-line.svg';
import add from '../assets/icons/plus.svg';
import graph from '../assets/icons/graph-line.svg';
import target from '../assets/icons/target-arrow.svg';
import { routes } from '../router/routes';

interface SidebarData {
  title: string;
  icon: string;
  link: string;
}

export const sidebarData: SidebarData[] = [
  {
    title: 'overview',
    icon: home,
    link: routes.overview
  },
  {
    title: 'expense',
    icon: add,
    link: routes.addExpense
  },
  {
    title: 'revenue',
    icon: add,
    link: routes.addRevenue
  },
  {
    title: 'statistics',
    icon: graph,
    link: routes.statistics
  },
  {
    title: 'goal',
    icon: target,
    link: routes.goal
  }
];
