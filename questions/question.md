# So sánh Server Side Rendering và Client Side Rendering

|                | SSR                                                                                                                                            | CSR                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mô tả**      | Nội dung được xử lý ở server và gửi HTML về trình duyệt để hiển thị.<br> Mọi logic, bao gồm cả việc chuyển trang, đều được thực hiện ở server. | Trình duyệt tải tất cả nội dung về máy, sau đó thực thi code để hiển thị nội dung.<br> Khi user chuyển trang hoặc thêm dữ liệu, JavaScript sẽ lấy và gửi dữ liệu từ server. |
| **Ưu điểm**    | - SEO tốt hơn <br> - Hiển thị nhanh ban đầu <br> - Hỗ trợ máy khách yếu                                                                        | - Tương tác nhanh <br> - Quản lý trạng thái dễ dàng <br> - Phù hợp cho ứng dụng động                                                                                        |
| **Nhược điểm** | - Độ trễ trong tương tác <br> - Quản lý trạng thái phức tạp                                                                                    | - SEO khó khăn hơn <br> - Tải trang chậm ban đầu                                                                                                                            |

# So sánh Single-Page Application và Multiple-Page Application

|                 | SPA                                                                                                                                                               | MPA                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Khái niệm**   | Một ứng dụng web tạo ra và hiển thị toàn bộ nội dung trên một trang duy nhất. Tương tác và thay đổi trạng thái diễn ra thông qua AJAX và các framework front-end. | Một ứng dụng web có nhiều trang độc lập, mỗi trang tải lại hoàn toàn để hiển thị nội dung mới.                         |
| **Ưu điểm**     | - Trải nghiệm tương tác mượt mà <br> - Tích hợp dễ dàng với các API RESTful <br> - Phù hợp cho ứng dụng động và tương tác cao.                                    | - SEO tốt hơn <br> - Hiệu suất ban đầu tốt hơn <br> - Quản lý trạng thái dễ dàng trong các trang riêng biệt.           |
| **Nhược điểm**  | - SEO khó khăn hơn <br> - Hiệu suất ban đầu có thể chậm <br> - Phải xử lý cẩn thận việc quản lý trạng thái ứng dụng.                                              | - Trải nghiệm tương tác có thể trễ hơn <br> - Tích hợp API phức tạp hơn <br> - Khả năng tái sử dụng giao diện kém hơn. |
| **Sử dụng cho** | Ứng dụng động, ứng dụng tương tác nhiều.                                                                                                                          | Trang web tĩnh, ứng dụng có ít tương tác.                                                                              |

# So sánh Named Exports và Export Default

|                 | Named Exports                                                   | Export Default                                                                   |
| --------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Mô tả**       | Hữu ích khi xuất nhiều giá trị, dùng tên để truy cập giá trị.   | Chỉ một default export duy nhất cho mỗi module, đơn giản để import.              |
| **Dạng Export** | `export const value = ...;`<br>`export function func() { ... }` | `export default ...;`                                                            |
| **Dạng Import** | `import { value, func } from './module';`                       | `import value from './module';`<br>`import ... from './module';`                 |
| **Ưu điểm**     | Có thể xuất nhiều giá trị riêng biệt.                           | Chỉ gọi một giá trị duy nhất khi import.                                         |
| **Nhược điểm**  | Cần phải nhớ tên cụ thể của các giá trị khi import.             | Không tường minh như named exports, chỉ có thể có một default export cho module. |
