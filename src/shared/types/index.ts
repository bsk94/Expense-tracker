export interface InitialRevenue {
  name: string;
  date: string;
  amount: string;
}

export interface RevenueItem extends InitialRevenue {
  financeType: 'revenue';
}
