document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(".my__swiper");
  const slides = document.querySelectorAll(".slide__page");
  const paginationItems = document.querySelectorAll(".pagination__item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentPage = 0;

  // Функція для переключення на обрану сторінку
  function goToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < slides.length) {
      slides[currentPage].classList.remove("activePage");
      slides[pageIndex].classList.add("activePage");
      paginationItems[currentPage].classList.remove("active");
      paginationItems[pageIndex].classList.add("active");
      currentPage = pageIndex;
    }
  }

  // Обробник для пагінації
  paginationItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      goToPage(index);
    });
  });

  // Обробник для стрілки "Назад"
  prevButton.addEventListener("click", () => {
    const newIndex = currentPage - 1;
    if (newIndex >= 0) {
      goToPage(newIndex);
    }
  });

  // Обробник для стрілки "Вперед"
  nextButton.addEventListener("click", () => {
    const newIndex = currentPage + 1;
    if (newIndex < slides.length) {
      goToPage(newIndex);
    }
  });

  // Початкова активна сторінка
  slides[currentPage].classList.add("activePage");
  paginationItems[currentPage].classList.add("active");
});
