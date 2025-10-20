import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  name: string;
  slug: string | null;
  sku: string;
  description: string;
  shortDescription: string | null;
  price: number;
  discountPrice: number | null;
  cost: number | null;
  stockQuantity: number;
  minStockLevel: number;
  weight: number | null;
  dimensions: string | null;
  categoryId: string;
  brandId: string | null;
  status: 0 | 1;
  isFeatured: boolean;
  isDigital: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  images: string[] | null;
  variants: unknown[] | null;
  attributes: Record<string, unknown> | null;
  tagIds: string[] | null;
}

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private readonly productsSubject = new BehaviorSubject<Product[]>([
    {
      name: 'Tai nghe chống ồn AlphaSound X3',
      slug: 'tai-nghe-alpha-sound-x3',
      sku: 'ASX3-BLACK',
      description: 'Tai nghe chống ồn với thời lượng pin 30 giờ, hỗ trợ Bluetooth 5.3 và sạc nhanh USB-C.',
      shortDescription: 'Tai nghe chống ồn cao cấp',
      price: 3590000,
      discountPrice: 2990000,
      cost: 2100000,
      stockQuantity: 120,
      minStockLevel: 20,
      weight: 0.35,
      dimensions: '20x18x8 cm',
      categoryId: 'cat-002-1',
      brandId: 'brand-sony',
      status: 1,
      isFeatured: true,
      isDigital: false,
      metaTitle: 'Tai nghe chống ồn AlphaSound X3',
      metaDescription: 'Tai nghe chống ồn chủ động, pin 30 giờ, âm thanh chất lượng cao.',
      images: ['https://cdn.example.com/images/asx3-1.jpg'],
      variants: null,
      attributes: {
        color: 'Đen',
        connectivity: 'Bluetooth 5.3'
      },
      tagIds: ['tag-audio', 'tag-sale']
    }
  ]);

  readonly products$ = this.productsSubject.asObservable();

  addProduct(product: Product): void {
    const current = this.productsSubject.getValue();
    this.productsSubject.next([
      {
        ...product,
        slug: product.slug ?? product.name.toLowerCase().replace(/\s+/g, '-'),
        description: product.description.trim(),
        shortDescription: product.shortDescription?.trim() ?? null,
        metaTitle: product.metaTitle?.trim() ?? null,
        metaDescription: product.metaDescription?.trim() ?? null
      },
      ...current
    ]);
  }
}
