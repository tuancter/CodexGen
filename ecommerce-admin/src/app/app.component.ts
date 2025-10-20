import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly navigation = [
    { label: 'Quản lý người dùng', path: '/users' },
    { label: 'Quản lý danh mục', path: '/categories' },
    { label: 'Quản lý kho hàng', path: '/inventory' },
    { label: 'Quản lý đơn hàng', path: '/orders' }
  ];
}
