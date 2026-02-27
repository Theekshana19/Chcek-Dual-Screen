import { Routes } from '@angular/router';
import { StaffComponent } from './pages/staff/staff.component';
import { CustomerComponent } from './pages/customer/customer.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'staff' },
  { path: 'staff', component: StaffComponent },
  { path: 'customer', component: CustomerComponent },
];