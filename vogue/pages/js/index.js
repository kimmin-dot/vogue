let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  const header = document.querySelector("header");

  // 아래로 스크롤 → 헤더 숨김
  if (current > lastScroll && current > 50) {
    header.classList.add("hide");
  } 
  // 위로 스크롤 → 헤더 보이기
  else {
    header.classList.remove("hide");
  }

  lastScroll = current;
});
