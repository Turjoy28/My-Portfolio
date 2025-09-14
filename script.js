const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelectorAll('.logo');
const sections = document.querySelectorAll('.section');
const baranimation = document.querySelector('.bar-animation');
const header = document.querySelector('header');

const activePage = (index) => {
  // Remove all active classes
  navLinks.forEach(link => link.classList.remove('active'));
  sections.forEach(section => section.classList.remove('active'));
  header.classList.remove('active');
  baranimation.classList.remove('active');

  // Re-add bar animation
  setTimeout(() => {
    header.classList.add('active');
    
    baranimation.classList.add('active');
  }, 100); // you can keep 1100 if needed, but 100ms looks more fluid

  // Show selected section and nav after animation
  setTimeout(() => {
    navLinks[index].classList.add('active');
    sections[index].classList.add('active');
  }, 600); // give animation time before switching
};

// Handle nav clicks
navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage(idx);
    }
  });
});

// Handle logo click (redirect to Home)
logoLinks.forEach(logo => {
  logo.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
      activePage(0); // Home is at index 0
    }
  });
});





const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume_detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // 1. Remove 'active' from all buttons
    resumeBtns.forEach(b => b.classList.remove('active'));

    // 2. Add 'active' to clicked button
    btn.classList.add('active');

    // 3. Hide all resume_detail sections
    resumeDetails.forEach(detail => detail.classList.remove('active'));

    // 4. Show the matched detail
    resumeDetails[idx].classList.add('active');
  });
});


const arrowRight = document.querySelector('.Portfolio_box .navigation .arrow-right');
const arrowLeft = document.querySelector('.Portfolio_box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector('.img-slide');
  const porfolioDetails = document.querySelectorAll('.Portfolio_detail');
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
  porfolioDetails.forEach(detail =>{
    detail.classList.remove('active');
  });
  porfolioDetails[index].classList.add('active');

}

arrowRight.addEventListener('click', () => {
  if (index < 7) {
    index++;

    arrowLeft.classList.remove('disabled');
  } else {
    index = 0;
    arrowRight.classList.add('disabled');
  }
  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove('disabled');
  } else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }
  activePortfolio();
});
