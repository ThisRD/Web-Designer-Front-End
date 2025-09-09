function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openLoginModal() {
  document.getElementById("loginModal").style.display = "flex"; // exibe e aplica flexbox
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;

function updateCarousel() {
  const width = items[0].clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);
updateCarousel();


