## Giải thích về `useEffect` trong React

`useEffect` là một hook trong React được sử dụng để thực hiện các tác động phụ (side effects) trong các thành phần (components) kiểu functional. Các tác động phụ bao gồm những hoạt động như gọi API, thay đổi cấu trúc DOM, đăng ký và hủy đăng ký sự kiện, cùng với nhiều hoạt động khác không liên quan đến việc render giao diện. `useEffect` được thiết kế để giúp quản lý và đồng bộ hóa các tác động phụ trong React.

## Khi nào nên sử dụng `useEffect`

`useEffect` thường được sử dụng trong các trường hợp sau:

- **Thực hiện tác động phụ sau khi component đã được render:** `useEffect` thường được dùng để thực hiện các hoạt động như gọi API, thay đổi DOM, hoặc tương tác với các thư viện bên ngoài sau khi component đã hoàn thành việc render.

- **Theo dõi thay đổi của các biến:** Bạn có thể truyền một mảng tham số thứ hai vào `useEffect`, chứa các biến mà bạn muốn theo dõi. Khi các biến này thay đổi giá trị, `useEffect` sẽ được kích hoạt lại, cho phép bạn thực hiện tác động phụ dựa trên những thay đổi này.

- **Dọn dẹp (Clean-up):** Bạn có thể trả về một hàm từ bên trong `useEffect`, và hàm này sẽ được gọi khi component bị hủy (unmount). Điều này rất hữu ích để hủy đăng ký sự kiện hoặc giải phóng tài nguyên khi không cần thiết nữa.

- **Sử dụng `useEffect` chỉ một lần:** Bằng cách truyền một mảng rỗng `[]` vào tham số thứ hai của `useEffect`, bạn có thể đảm bảo rằng tác động phụ chỉ được thực hiện sau lần render đầu tiên của component.
