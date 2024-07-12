Feature: Chỉnh sửa nhóm công việc
  Scenario: Edit_group_01
    Given Đăng nhập hệ thống và truy cập cài đặt nhóm công việc gần nhất

    When Tạo mới nhóm công việc nhập toàn ký tự số vào các trường bắt buộc, mở droplist chọn giá trị workflow tùy chỉnh và chọn chỉ hiển thị với những thành viên được chỉ định, nhập tên hoặc email thành viên
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập 5 ký tự chữ vào các trường text, upload avatar, chọn tất cả có thể tương tác, để trống các trường dropdown, các trường radio chọn không, chọn tạo ticket bình thường, chọn danh sách dạng bảng
    Then Hệ thống thông báo chỉnh sửa "Thành công!"