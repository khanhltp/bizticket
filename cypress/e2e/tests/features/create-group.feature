Feature: Tạo mới nhóm công việc

  Scenario: Thêm mới thành công khi nhập toàn ký tự chữ vào các trường bắt buộc, giữ nguyên giá trị workflow mặc định và chọn hiển thị với tất cả thành viên trong dự án

    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Thực hiện tạo mới nhóm công việc
    Then Kiểm tra tạo mới nhóm công việc thành công

    When Xem Cài đặt nhóm công việc - Thông tin chung
    Then Hiển thị đúng thông tin đã nhập trong quá trình tạo nhóm công việc

    When Xem Cài đặt nhóm công việc - Thành viên
    Then Hiển thị danh sách thành viên có bao gồm người tạo dự án là tài khoản đang đăng nhập

    When Xem Nhóm công việc trên thanh menu ngang
    Then Nhóm công việc vừa tạo hiển thị ở đầu danh sách Công việc gần đây

    When Click Xem tất cả nhóm công việc
    Then Nhóm công việc vừa tạo hiển thị ở đầu danh sách Nhóm xem gần đây
    When Tìm kiếm nhóm công việc vừa tạo trong Tất cả nhóm công việc
    Then Hệ thống trả về kết quả tìm kiếm có nhóm công việc vừa tạo

    When Xem Nhóm do bạn tạo
    Then Nhóm công việc vừa tạo hiển thị ở cuối danh sách Nhóm do bạn tạo
    When Tìm kiếm nhóm công việc vừa tạo trong Nhóm do bạn tạo
    Then Hệ thống trả về kết quả tìm kiếm chứa nhóm công việc vừa tạo

    When Xem Tạo ticket
    Then Có hiển thị nhóm công việc vừa tạo trong Tạo ticket
    When Tìm kiếm nhóm công việc vừa tạo
    Then Hệ thống trả về kết quả tìm kiếm có chứa nhóm công việc vừa tạo