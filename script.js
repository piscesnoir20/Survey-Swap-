// Hàm xử lý khi bấm Đăng ký / Đăng nhập thành công để chuyển vào Dashboard
function handleLogin() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('main-app').style.display = 'flex';
}

// Hàm chuyển đổi qua lại giữa các tab chức năng trong app
function switchTab(event, tabId) {
  event.preventDefault();
  
  // Ẩn tất cả các màn hình tab
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.style.display = 'none');

  // Hiển thị màn hình được chọn
  document.getElementById('tab-' + tabId).style.display = 'block';

  // Cập nhật trạng thái active cho menu
  const menuItems = document.querySelectorAll('.nav-item');
  menuItems.forEach(item => item.classList.remove('active'));
  event.currentTarget.classList.add('active');
}
