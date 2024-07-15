Feature: Chỉnh sửa nhóm công việc
  Scenario: Edit_group_01
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập toàn ký tự số vào các trường bắt buộc, mở droplist chọn giá trị workflow tùy chỉnh và chọn chỉ hiển thị với những thành viên được chỉ định, nhập tên hoặc email thành viên
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập 5 ký tự chữ vào các trường text, upload avatar, chọn tất cả có thể tương tác, để trống các trường dropdown, các trường radio chọn không, chọn tạo ticket bình thường, chọn danh sách dạng bảng
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_01

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
    Then Hiển thị nhóm công việc vừa tạo ở cuối danh sách
    When Tìm kiếm nhóm công việc vừa tạo
    Then Hệ thống trả về kết quả tìm kiếm có chứa nhóm công việc vừa tạo

  Scenario: Edit_group_02
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập chữ, số, ký tự đặc biệt vào tên nhóm công việc và nhập chữ, số, ký tự đặc biệt và có xuống dòng vào mô tả nhóm công việc
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập 6 ký tự số vào các trường text, không upload avatar, chọn chỉ thành viên được chọn có thể tương tác, các trường dropdown chọn tên thành viên, các trường radio chọn có, chọn tạo full ticket, chọn danh sách dạng danh sách
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_02

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
    Then Hiển thị nhóm công việc vừa tạo ở cuối danh sách
    When Tìm kiếm nhóm công việc vừa tạo
    Then Hệ thống trả về kết quả tìm kiếm có chứa nhóm công việc vừa tạo

  Scenario: Edit_group_03
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập chữ, số, ký tự đặc biệt vào tên nhóm công việc và nhập chữ, số, ký tự đặc biệt và có xuống dòng vào mô tả nhóm công việc
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập 6 ký tự đặc biệt vào các trường text, chọn chỉ thành viên được chọn có thể tương tác và thêm tên nhóm thành viên, các trường dropdown chọn tên nhóm thành viên, chọn danh sách dạng lịch
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_03
  
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
    Then Hiển thị nhóm công việc vừa tạo ở cuối danh sách
    When Tìm kiếm nhóm công việc vừa tạo
    Then Hệ thống trả về kết quả tìm kiếm có chứa nhóm công việc vừa tạo

  Scenario: Edit_group_04
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập toàn ký tự chữ vào các trường bắt buộc, giữ nguyên giá trị workflow mặc định và chọn hiển thị với tất cả thành viên trong dự án
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc vừa tạo nhập chữ, số, ký tự đặc biệt vào các trường text, chọn danh sách dạng bảng biểu
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_04

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
    Then Hiển thị nhóm công việc vừa tạo ở cuối danh sách
    When Tìm kiếm nhóm công việc vừa tạo
    Then Hệ thống trả về kết quả tìm kiếm có chứa nhóm công việc vừa tạo

  Scenario: Edit_group_05
    Given Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc

    When Tạo mới nhóm công việc nhập toàn ký tự chữ vào các trường bắt buộc, giữ nguyên giá trị workflow mặc định và chọn hiển thị với tất cả thành viên trong dự án
    Then Thông báo "Tạo nhóm công việc thành công!" khi tạo mới thành công

    When Chỉnh sửa nhóm công việc chọn danh sách dạng báo cáo
    Then Hệ thống thông báo "Thành công!" khi chỉnh sửa theo testcase edit_group_05