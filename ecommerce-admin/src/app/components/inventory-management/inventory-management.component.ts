import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { InventoryService, Product } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent {
  readonly products$: Observable<Product[]> = this.inventoryService.products$;
  readonly categories = [
    { id: 'cat-001', name: 'Thời trang' },
    { id: 'cat-001-1', name: 'Áo' },
    { id: 'cat-001-2', name: 'Quần' },
    { id: 'cat-002-1', name: 'Điện thoại' },
    { id: 'cat-002-2', name: 'Laptop' }
  ];

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    slug: [null as string | null],
    sku: ['', [Validators.required, Validators.maxLength(60)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    shortDescription: [null as string | null],
    price: [1, [Validators.required, Validators.min(0)]],
    discountPrice: [null as number | null],
    cost: [null as number | null],
    stockQuantity: [1, [Validators.required, Validators.min(0)]],
    minStockLevel: [1, [Validators.required, Validators.min(0)]],
    weight: [null as number | null],
    dimensions: [null as string | null],
    categoryId: ['', Validators.required],
    brandId: [null as string | null],
    status: [1 as 0 | 1, Validators.required],
    isFeatured: [false],
    isDigital: [false],
    metaTitle: [null as string | null],
    metaDescription: [null as string | null],
    images: [null as string | null],
    variants: [null as string | null],
    attributes: [null as string | null],
    tagIds: [null as string | null]
  });

  readonly attributePreview = {
    sku: 'Mã SKU độc nhất giúp đồng bộ với hệ thống ERP',
    slug: 'Đường dẫn thân thiện SEO, tự sinh nếu bỏ trống',
    status: '1: kích hoạt, 0: ngừng bán'
  } as const;

  constructor(private readonly fb: FormBuilder, private readonly inventoryService: InventoryService) {}

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const rawValue = this.form.getRawValue();

    const parseJson = <T>(value: string | null): T | null => {
      if (!value || !value.trim()) {
        return null;
      }
      try {
        return JSON.parse(value) as T;
      } catch (error) {
        console.warn('Không thể parse JSON cho giá trị', value, error);
        return null;
      }
    };

    const product: Product = {
      ...rawValue,
      slug: rawValue.slug?.trim() || null,
      sku: rawValue.sku.trim(),
      name: rawValue.name.trim(),
      description: rawValue.description.trim(),
      shortDescription: rawValue.shortDescription?.trim() || null,
      brandId: rawValue.brandId?.trim() || null,
      dimensions: rawValue.dimensions?.trim() || null,
      metaTitle: rawValue.metaTitle?.trim() || null,
      metaDescription: rawValue.metaDescription?.trim() || null,
      images: parseJson<string[]>(rawValue.images),
      variants: parseJson<unknown[]>(rawValue.variants),
      attributes: parseJson<Record<string, unknown>>(rawValue.attributes),
      tagIds: parseJson<string[]>(rawValue.tagIds)
    };

    this.inventoryService.addProduct(product);
    this.form.reset({
      name: '',
      slug: null,
      sku: '',
      description: '',
      shortDescription: null,
      price: 1,
      discountPrice: null,
      cost: null,
      stockQuantity: 1,
      minStockLevel: 1,
      weight: null,
      dimensions: null,
      categoryId: '',
      brandId: null,
      status: 1,
      isFeatured: false,
      isDigital: false,
      metaTitle: null,
      metaDescription: null,
      images: null,
      variants: null,
      attributes: null,
      tagIds: null
    });
  }
}
