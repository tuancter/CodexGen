import { Component } from '@angular/core';

interface OrderSummary {
  code: string;
  customer: string;
  channel: 'web' | 'app' | 'facebook';
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  createdAt: string;
}

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent {
  readonly orders: OrderSummary[] = [
    {
      code: '#ORD-20240410-001',
      customer: 'Phạm Ngọc Hà',
      channel: 'web',
      total: 2590000,
      status: 'processing',
      paymentStatus: 'paid',
      createdAt: '10/04/2025 08:45'
    },
    {
      code: '#ORD-20240409-008',
      customer: 'Nguyễn Minh Tâm',
      channel: 'app',
      total: 1890000,
      status: 'pending',
      paymentStatus: 'unpaid',
      createdAt: '09/04/2025 21:12'
    },
    {
      code: '#ORD-20240409-004',
      customer: 'Lý Bảo Châu',
      channel: 'facebook',
      total: 3290000,
      status: 'completed',
      paymentStatus: 'paid',
      createdAt: '09/04/2025 17:03'
    }
  ];

  statusLabel(status: OrderSummary['status']): string {
    switch (status) {
      case 'pending':
        return 'Chờ xử lý';
      case 'processing':
        return 'Đang xử lý';
      case 'completed':
        return 'Hoàn tất';
      case 'cancelled':
        return 'Đã hủy';
    }
  }

  paymentLabel(status: OrderSummary['paymentStatus']): string {
    switch (status) {
      case 'paid':
        return 'Đã thanh toán';
      case 'unpaid':
        return 'Chưa thanh toán';
      case 'refunded':
        return 'Đã hoàn tiền';
    }
  }
}
