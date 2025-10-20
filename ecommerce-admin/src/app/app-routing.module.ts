import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManagementComponent } from './components/user-management/user-management.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { InventoryManagementComponent } from './components/inventory-management/inventory-management.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';

const routes: Routes = [
  { path: 'users', component: UserManagementComponent },
  { path: 'categories', component: CategoryManagementComponent },
  { path: 'inventory', component: InventoryManagementComponent },
  { path: 'orders', component: OrderManagementComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
