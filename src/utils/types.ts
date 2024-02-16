export enum PagesNames {
  Login = "Login",
  DashboardHome = "Home",
  DashboardHistory = "History",
  DashboardInvoice = "Invoice",
}

export enum TabNames {
  TasksAvailable = "Tasks Availables",
  InProgress = "In Progress",
}

export interface IAuth {
  token: string;
}

export enum TaskCategory {
  Category1 = "category-1",
  Category2 = "category-2",
  Category3 = "category-3",
}

export enum TaskStatus {
  New = "new",
  InProgress = "in progress",
  Compelte = "complete",
}

export interface ITask {
  id: string;
  name: string;
  description: string;
  status: TaskStatus;
  assignee: null | string;
  category: TaskCategory;
  amount: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
