const hero = document.querySelector(".hero");
//image and word
const slider = document.querySelector(".slider");
//fancy background color
const logo = document.querySelector("#Logo");
//sport
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
//basketball

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(home, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5")
  .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5")
  .fromTo(column1, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5")
  .fromTo(column2, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5")
  .fromTo(column3, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5")
  .fromTo(column4, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5")
  .fromTo(column5, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5")
  .fromTo(column6, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5");

//content animation
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
