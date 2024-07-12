Feature: Chỉnh sửa nhóm công việc
  Scenario: Edit_group_01
    Given Đăng nhập hệ thống và truy cập cài đặt nhóm công việc gần nhất
    When Thực hiện chỉnh sửa nhóm công việc
    Then Thông báo "Thành công!" khi chỉnh sửa thành công