// Ðảm bảo trang web tải xong và thêm hiệu ứng click menu đơn giản
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".nav-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      menuItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
