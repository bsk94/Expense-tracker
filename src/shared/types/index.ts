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
