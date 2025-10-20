import { Component } from '@angular/core';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'support';
  status: 'active' | 'invited' | 'suspended';
  lastActive: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  readonly users: AdminUser[] = [
    {
      id: 'u-1001',
      name: 'Nguyễn Thị Thu',
      email: 'thu.nguyen@example.com',
      role: 'admin',
      status: 'active',
      lastActive: '2025-04-10 09:32'
    },
    {
      id: 'u-1002',
      name: 'Trần Quang Huy',
      email: 'huy.tran@example.com',
      role: 'manager',
      status: 'active',
      lastActive: '2025-04-09 19:05'
    },
    {
      id: 'u-1003',
      name: 'Lê Bảo Anh',
      email: 'anh.le@example.com',
      role: 'support',
      status: 'invited',
      lastActive: 'Chưa đăng nhập'
    }
  ];
}
