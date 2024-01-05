import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DebtorsComponent } from './pages/debtors/debtors.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: 'payments',
    //     loadChildren: () => import('./components/payments/payments.module').then(m => m.PaymentsModule)
    // },
    {
        path: 'debtors',
        component: DebtorsComponent
    },
    {
        path: 'transactions',
        component: TransactionsComponent
    },
    // {
    //     path: 'reports',
    //     loadChildren: () => import('./components/reports/reports.module').then(m => m.ReportsModule)
    // },
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // }
];
