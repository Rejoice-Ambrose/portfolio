
    // Function to add the slide-up class when the element is in view
    function animateOnScroll() {
        const elements = document.querySelectorAll('.slide-up-trigger');
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight - 100) {
                element.classList.add('slide-up');
            }
        });
    }

    // Event listeners for scroll and load
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);


// hero section
window.onload = function () {
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const colors = ["#ff77e1", "#ffc1e3", "#ff58e6"];

  function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = (Math.random() - 0.5) * 2;
    this.dy = (Math.random() - 0.5) * 2;
  }

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  Particle.prototype.update = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  };

  function initParticles() {
    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 5 + 2;
      const x = Math.random() * (width - radius * 2) + radius;
      const y = Math.random() * (height - radius * 2) + radius;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(x, y, radius, color));
    }
  }

  function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, width, height);
    particles.forEach((particle) => particle.update());
  }

  initParticles();
  animateParticles();

  window.addEventListener("resize", function () {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
};
// skill section
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress");

  // Function to animate the progress bars
  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-progress"); // Get progress from data attribute
      bar.style.width = width + "%"; // Set the width dynamically
    });
  }

  // Function to check if the skill section is in view
  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85; // Adjust the threshold
    progressBars.forEach((bar) => {
      const barTop = bar.getBoundingClientRect().top; // Get position relative to the viewport
      if (barTop < triggerBottom) {
        bar.style.transition = "width 1s ease"; // Smooth transition
        animateProgressBars(); // Animate when in view
      }
    });
  }

  // Listen to scroll events
  window.addEventListener("scroll", checkScroll);

  // Call the function on page load to handle cases where the section is already in view
  checkScroll();
});
// testiomonial section
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) {
        testimonial.classList.add("active");
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to first
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length; // Loop back to last
    showTestimonial(currentIndex);
  }

  nextButton.addEventListener("click", nextTestimonial);
  prevButton.addEventListener("click", prevTestimonial);

  // Initialize the first testimonial
  showTestimonial(currentIndex);
});

// hobbies section
// Optional: Interactive effect for the fact cards
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.fact-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)'; // Slight scale on hover
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)'; // Reset scale
    });
  });
});

// contact me section

// function sendMail(){
//   let params ={
//     name : document.getElementById("name").value,
//     name : document.getElementById("email").value,
//     name : document.getElementById("message").value,
//   }

//   emailjs.send("service_0ct2q1o","template_tjqmhyc",params).then(alert("Email sent!"));
// }
