import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditExpRevView from '../views/editExpRevView';
import ExpenseView from '../views/expenseView';
import GoalView from '../views/goalView';
import NotFoundView from '../views/notFoundView';
import OverviewView from '../views/overviewView';
import RevenueView from '../views/revenueView';
import StatisticView from '../views/statisticView';
import { routes } from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.overview} element={<OverviewView />} />
        <Route path={routes.addExpense} element={<ExpenseView />} />
        <Route path={routes.addRevenue} element={<RevenueView />} />
        <Route path={routes.statistics} element={<StatisticView />} />
        <Route path={routes.goal} element={<GoalView />} />
        <Route path={routes.editPage} element={<EditExpRevView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
