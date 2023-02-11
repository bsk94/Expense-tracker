import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/molecules/navigation';
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
        <Route
          path={routes.overview}
          element={
            <>
              <Navbar />
              <OverviewView />
            </>
          }
        />
        <Route
          path={routes.addExpense}
          element={
            <>
              <Navbar />
              <ExpenseView />
            </>
          }
        />
        <Route
          path={routes.addRevenue}
          element={
            <>
              <Navbar />
              <RevenueView />
            </>
          }
        />
        <Route
          path={routes.statistics}
          element={
            <>
              <Navbar />
              <StatisticView />
            </>
          }
        />
        <Route
          path={routes.goal}
          element={
            <>
              <Navbar />
              <GoalView />
            </>
          }
        />
        <Route
          path={routes.editPage}
          element={
            <>
              <Navbar />
              <EditExpRevView />
            </>
          }
        />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
