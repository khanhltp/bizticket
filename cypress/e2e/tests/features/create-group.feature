Feature: Tạo mới nhóm công việc
  Scenario: Create_group_01
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc nhập toàn ký tự chữ vào các trường bắt buộc, giữ nguyên giá trị workflow mặc định và chọn hiển thị với tất cả thành viên trong dự án
    Then Thông báo "Tạo nhóm công việc thành công!"
    
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

  Scenario: Create_group_02
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc nhập toàn ký tự số vào các trường bắt buộc, mở droplist chọn giá trị workflow tùy chỉnh và chọn chỉ hiển thị với những thành viên được chỉ định, nhập tên hoặc email thành viên
    Then Thông báo "Tạo nhóm công việc thành công!"
    
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

  Scenario: Create_group_03
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc nhập ký tự đặc biệt vào các trường bắt buộc và chọn chỉ hiển thị với những thành viên được chỉ định, nhập tên nhóm thành viên
    Then Thông báo "Tạo nhóm công việc thành công!"
    
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

Scenario: Create_group_04
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc nhập chữ, số, ký tự đặc biệt vào tên nhóm công việc và nhập chữ, số, ký tự đặc biệt và có xuống dòng vào mô tả nhóm công việc
    Then Thông báo "Tạo nhóm công việc thành công!"
    
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

  Scenario: Create_group_05
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc bỏ trống trường Tên nhóm công việc mới
    Then Hệ thống hiển thị tooltip "Please fill out this field."

  Scenario: Create_group_06
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc nhập toàn space vào trường Tên nhóm công việc mới
    Then Thông báo "Mời nhập tên nhóm công việc!" khi nhập toàn space vào trường Tên nhóm công việc mới

  Scenario: Create_group_07
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc bỏ trống trường Mô tả nhóm công việc mới
    Then Hệ thống hiển thị tooltip "Please fill out this field."

  Scenario: Create_group_08
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc nhập toàn space vào trường Mô tả nhóm công việc mới
    Then Thông báo "Mời nhập mô tả nhóm công việc!" khi nhập toàn space vào trường Mô tả nhóm công việc mới
  
  Scenario: Create_group_09
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc bỏ trống trường Nhập tên hoặc email thành viên
    Then Thông báo "Mời nhập thành viên" khi bỏ trống trường Nhập tên hoặc email thành viên

  Scenario: Create_group_10
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm công việc bỏ trống trường Nhập tên nhóm thành viên
    Then Thông báo "Mời nhập nhóm thành viên" khi bỏ trống trường Nhập tên nhóm thành viên
  
  Scenario: Create_group_11
    Given Đăng nhập hệ thống và truy cập màn hình Biz Ticket
    When Tạo mới nhóm việc làm và bấm Hủy
    Then Modal tạo mới nhóm việc làm đóng lại