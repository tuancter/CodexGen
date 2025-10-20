import { Component } from '@angular/core';

interface CategoryNode {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  children?: CategoryNode[];
}

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent {
  readonly categories: CategoryNode[] = [
    {
      id: 'cat-001',
      name: 'Thời trang',
      slug: 'thoi-trang',
      productCount: 1280,
      children: [
        { id: 'cat-001-1', name: 'Áo', slug: 'ao', productCount: 560 },
        { id: 'cat-001-2', name: 'Quần', slug: 'quan', productCount: 420 },
        { id: 'cat-001-3', name: 'Phụ kiện', slug: 'phu-kien', productCount: 300 }
      ]
    },
    {
      id: 'cat-002',
      name: 'Điện tử',
      slug: 'dien-tu',
      productCount: 740,
      children: [
        { id: 'cat-002-1', name: 'Điện thoại', slug: 'dien-thoai', productCount: 320 },
        { id: 'cat-002-2', name: 'Laptop', slug: 'laptop', productCount: 210 }
      ]
    }
  ];
}
