// Chuyển đổi qua lại giữa màn hình Đăng nhập và Đăng ký
function switchAuth(target) {
  const loginScreen = document.getElementById('login-screen');
  const registerScreen = document.getElementById('register-screen');

  if (target === 'register') {
    loginScreen.style.display = 'none';
    registerScreen.style.display = 'flex';
  } else {
    registerScreen.style.display = 'none';
    loginScreen.style.display = 'flex';
  }
}

// Xử lý khi bấm Đăng ký thành công: Tự động chuyển hướng sang màn hình Đăng nhập
function handleRegisterSubmit() {
  const nameInput = document.getElementById('reg-name');
  if (nameInput && nameInput.value.trim() !== "") {
    alert("Đăng ký tài khoản thành công! Vui lòng đăng nhập lại.");
  } else {
    alert("Vui lòng nhập đầy đủ thông tin để đăng ký!");
    return;
  }
  // Chuyển hướng về màn hình đăng nhập
  switchAuth('login');
}

// Xử lý đăng nhập trực tiếp vào Dashboard (dùng cho nút Đăng nhập, Google, Facebook)
function handleDirectAccess() {
  // Ẩn màn hình xác thực, hiển thị giao diện chính
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('register-screen').style.display = 'none';
  document.getElementById('main-app').style.display = 'flex';
}
