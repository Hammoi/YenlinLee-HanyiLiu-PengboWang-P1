const faders = document.querySelectorAll(".fade-in");
const image = document.getElementById("main");
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
            console.log(entry.target.classList);
            console.log(entry.target.id);
            if (entry.target.classList.contains("fade-in")) {
                console.log("yes please")
                if (!entry.isIntersecting) {
                    return;
                } else {
                    image.appendChild(entry.target);



                    entry.target.classList.add("centered")
                    entry.target.classList.add("appear");
                    appearOnScroll.unobserve(entry.target);
                }
            } else if (entry.target.id == "stop") {
                console.log("woah no way")
                if (!entry.isIntersecting) {
                    return;
                } else {

                    image.classList.add("container.stop");
                    console.log("uhhhh");
                    console.log(image.classList);
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