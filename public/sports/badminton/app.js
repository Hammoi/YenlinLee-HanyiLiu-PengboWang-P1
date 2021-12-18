const hero = document.querySelector(".hero");
//image and word
const backgroundColor = document.querySelector(".backgroundColor");
//fancy background color
const logo = document.querySelector("#Logo");
//sport
const hamburger = document.querySelector(".hamburger");
//sportname
const headline = document.querySelector(".headline");
//like button
const botton = document.querySelector(".botton");
const likes = document.querySelector(".likes");



const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(
        hero,
        1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut }
    )
    .fromTo(
        backgroundColor,
        1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut },
        "-=1.2"
    )
    .fromTo(botton, 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-+0.1")
    .fromTo(likes, 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-+0.2");

//content animation
const sliders = document.querySelectorAll(".sliders");
const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px 0px 0px",
};

const appearOnScroll = new IntersectionObserver(function(
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

function myFunction(x) {
    x.classList.toggle("change");
}