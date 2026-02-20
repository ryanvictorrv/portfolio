const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});




const typingElement = document.getElementById("typing");
const words = ["Web Desenvolvedor", "Desenvolvedor", "Web Designer", "Programador", "Estudante"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingElement.textContent = currentText;
  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 80);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
  }
}
type();