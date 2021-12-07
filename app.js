const hero = document.querySelector(".hero");
//image and word
const backgroundColor = document.querySelector(".backgroundColor");
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
    backgroundColor,
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
  .fromTo(column5, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5");
//.fromTo(column6, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-+0.5");

//content animation
const sliders = document.querySelectorAll(".sliders");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px",
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
      console.log("appear");
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
