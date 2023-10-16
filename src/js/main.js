/**
 * Select input script
 */
const selects = document.querySelectorAll("[data-select]");

if (selects) {
  selects.forEach((select) => {
    select.addEventListener("click", (e) => {
      e.preventDefault();
      const list = select.querySelector(".select__list");
      const icon = select.querySelector("[data-select-icon]");
      const current = select.querySelector(".select__current span");

      select.querySelectorAll(".select__item").forEach((el) => {
        if (current.textContent === el.textContent) {
          el.classList.add("select__item--active");
        }
      });

      list.classList.toggle("show");
      icon.style.transform = "rotate(180deg)";

      if (list.classList.contains("show")) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(0deg)";
      }

      if (e.target.classList.contains("select__item")) {
        current.textContent = e.target.textContent;
        select.querySelectorAll(".select__item").forEach((el) => el.classList.remove("select__item--active"));
        e.target.classList.add("select__item--active");
        list.classList.remove("show");
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
}
