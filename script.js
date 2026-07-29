// Ð?m b?o trang web t?i xong và thêm hi?u ?ng click menu ðõn gi?n
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