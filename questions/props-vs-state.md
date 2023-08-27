# So sánh props và state

## Giống nhau:

- Dùng để quản lý trạng thái và hiển thị giao diện của component
- Cả hai đều có thể ảnh hưởng đến việc render của component

## Khác nhau:

| Props                                               | State                                                       |
| --------------------------------------------------- | ----------------------------------------------------------- |
| Immutable (Không thể thay đổi)                      | Mutable (Có thể thay đổi)                                   |
| Truyền từ component cha                             | Được xác định và quản lý trong chính component              |
| Sử dụng để truyền dữ liệu giữa component cha và con | Sử dụng để lưu trữ và quản lý dữ liệu trong chính component |
