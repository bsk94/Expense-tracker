interface Routes {
  overview: string;
  addExpense: string;
  addRevenue: string;
  statistics: string;
  goal: string;
  login: string;
  editPage: string;
  register: string;
}

export const routes: Routes = {
  overview: '/',
  addExpense: '/add-expense',
  addRevenue: '/add-revenue',
  statistics: '/statistics',
  goal: '/goal',
  login: '/login',
  editPage: '/edit/id/:id',
  register: '/register'
};
