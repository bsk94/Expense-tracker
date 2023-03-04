export interface InitialRevenue {
  name: string;
  date: string;
  amount: string;
}

export interface RevenueItem extends InitialRevenue {
  financeType: 'revenue';
}

export interface InitialExpense {
  name: string;
  date: string;
  amount: string;
  expenseCategory: string;
}

export interface ExpenseItem extends InitialExpense {
  financeType: 'expense';
}

export interface BudgetItem {
  name: string;
  date: string;
  amount: number;
  id: string;
  financeType: 'expense' | 'revenue';
  expCat?: 'Home' | 'Entertainment' | 'Food' | 'Transport' | 'Other';
}

export interface BudgetItemList extends BudgetItem {
  isVisible: boolean;
  icon: string;
}
