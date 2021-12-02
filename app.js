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

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut });
