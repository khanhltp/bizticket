Feature: Chỉnh sửa nhóm công việc
  Scenario: Edit_group_01
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập toàn ký tự số vào các trường bắt buộc, mở droplist chọn giá trị workflow tùy chỉnh và chọn chỉ hiển thị với những thành viên được chỉ định, nhập tên hoặc email thành viên
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập 5 ký tự chữ vào các trường text, upload avatar, chọn tất cả có thể tương tác, để trống các trường dropdown, các trường radio chọn không, chọn tạo ticket bình thường, chọn danh sách dạng bảng
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_01

  Scenario: Edit_group_02
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập chữ, số, ký tự đặc biệt vào tên nhóm công việc và nhập chữ, số, ký tự đặc biệt và có xuống dòng vào mô tả nhóm công việc
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập 6 ký tự số vào các trường text, không upload avatar, chọn chỉ thành viên được chọn có thể tương tác, các trường dropdown chọn tên thành viên, các trường radio chọn có, chọn tạo full ticket, chọn danh sách dạng danh sách
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_02

  Scenario: Edit_group_03
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập chữ, số, ký tự đặc biệt vào tên nhóm công việc và nhập chữ, số, ký tự đặc biệt và có xuống dòng vào mô tả nhóm công việc
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập 6 ký tự đặc biệt vào các trường text, chọn chỉ thành viên được chọn có thể tương tác và thêm tên nhóm thành viên, các trường dropdown chọn tên nhóm thành viên, chọn danh sách dạng lịch
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_03

  Scenario: Edit_group_04
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập toàn ký tự chữ vào các trường bắt buộc, giữ nguyên giá trị workflow mặc định và chọn hiển thị với tất cả thành viên trong dự án
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập chữ, số, ký tự đặc biệt vào các trường text, chọn danh sách dạng bảng biểu
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_04

  Scenario: Edit_group_05
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập toàn ký tự chữ vào các trường bắt buộc, giữ nguyên giá trị workflow mặc định và chọn hiển thị với tất cả thành viên trong dự án
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc chọn danh sách dạng báo cáo
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_05