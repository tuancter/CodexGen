# Ecommerce Admin (Angular 20)

Dự án tạo giao diện quản trị cho một cửa hàng thương mại điện tử, được xây dựng thủ công với cấu trúc tiêu chuẩn của Angular 20. Ứng dụng bao gồm các phân hệ quản lý người dùng, danh mục, kho hàng và đơn hàng, đồng thời cung cấp form thêm sản phẩm mới với đầy đủ thuộc tính chuẩn hóa.

## Cấu trúc chính

- `ecommerce-admin/`: Mã nguồn ứng dụng Angular.
  - `src/app/components`: Các thành phần quản trị theo từng chức năng.
  - `src/app/services`: Dịch vụ quản lý kho hàng với dữ liệu mẫu và BehaviorSubject.
  - `src/styles.scss`: Thiết lập giao diện tổng thể.

## Các bước cài đặt

Môi trường không được cấu hình sẵn các gói npm nên cần cài đặt thủ công trước khi chạy:

```bash
cd ecommerce-admin
npm install
npm run start
```

Ứng dụng sẽ phục vụ tại `http://localhost:4200/` với cấu trúc định tuyến:

- `/users`: Quản lý người dùng
- `/categories`: Quản lý danh mục
- `/inventory`: Quản lý kho hàng (bao gồm form thêm sản phẩm)
- `/orders`: Quản lý đơn hàng

## Thêm sản phẩm mới

Form trong trang **Quản lý kho hàng** tương thích với mẫu dữ liệu:

```json
{
  "name": "",
  "slug": null,
  "sku": "",
  "description": "",
  "shortDescription": null,
  "price": 1,
  "discountPrice": null,
  "cost": null,
  "stockQuantity": 1,
  "minStockLevel": 1,
  "weight": null,
  "dimensions": null,
  "categoryId": "",
  "brandId": null,
  "status": 1,
  "isFeatured": false,
  "isDigital": false,
  "metaTitle": null,
  "metaDescription": null,
  "images": null,
  "variants": null,
  "attributes": null,
  "tagIds": null
}
```

Các trường `images`, `variants`, `attributes` và `tagIds` hỗ trợ nhập nhanh dưới dạng JSON string và sẽ được chuyển đổi sang cấu trúc dữ liệu tương ứng khi lưu.
