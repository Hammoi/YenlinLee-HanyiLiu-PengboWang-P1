const faders = document.querySelectorAll(".fade-in");
const image = document.getElementById("main");
const text = document.getElementById("text");
const flags = document.querySelectorAll(".flag");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (entry.target.id == "appearText") {
                if (!entry.isIntersecting) {
                    return;
                } else {

                    text.classList.add("appear");

                    appearOnScroll.unobserve(entry.target);
                }
            } else if (entry.target.id == "stop") {

                if (!entry.isIntersecting) {
                    return;
                } else {

                    image.classList.add("stop");
                    image.classList.remove("container");

                    appearOnScroll.unobserve(entry.target);
                }
            }
        });
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

flags.forEach(flag => {
    appearOnScroll.observe(flag);
});