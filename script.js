const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function heading() {
    gsap.from("#part1 h1", {
        y: 100,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
    })
}
heading();

function animationelem() {
    gsap.from(".elem img", {
        ease: "inOut",
        delay: 3,
        scrollTrigger: {
            trigger: '.elem img',
            scroller: 'body',
            scrub: 2,
            duration: 0.5,
            markers: true,
            start: 'top 70%',
            end: 'bottom 75%'
        },
        opacity: 0,
        stagger: 0.2
    })

    gsap.from(".elem .box", {
        ease: "inOut",
        delay: 3,
        scrollTrigger: {
            trigger: '.elem .box',
            scroller: 'body',
            scrub: 2,
            duration: 0.5,
        },
        opacity: 0,
        stagger: 0.2
    })
}
animationelem();

var element1 = document.querySelector("#ele1");
function forball1() {
    element1.addEventListener("mousemove", function (data) {
        gsap.to("#ball", {
            left: data.x,
            top: data.y + 390,
            scale: 1,
        })
        document.querySelector("#ball").style.backgroundColor = "rgba(85, 111, 113, 0.368)";
    })

    element1.addEventListener("mouseleave", function (data) {
        gsap.to("#ball", {
            scale: 0,
        })
    })
}
forball1();

var element2 = document.querySelector("#ele2");
function forball2() {
    element2.addEventListener("mousemove", function (data) {
        gsap.to("#ball", {
            left: data.x,
            top: data.y + 390,
            scale: 1,
        })
        document.querySelector("#ball").style.backgroundColor = "rgba(224, 208, 189, 0.368)";
    })

    element2.addEventListener("mouseleave", function (data) {
        gsap.to("#ball", {
            scale: 0,
        })
    })
}
forball2();

var element3 = document.querySelector("#ele3");
function forball3() {
    element3.addEventListener("mousemove", function (data) {
        gsap.to("#ball", {
            left: data.x,
            top: data.y + 1200,
            scale: 1,
        })
        document.querySelector("#ball").style.backgroundColor = "rgba(85, 111, 113, 0.368)";
    })

    element3.addEventListener("mouseleave", function (data) {
        gsap.to("#ball", {
            scale: 0,
        })
    })
}
forball3();

var element4 = document.querySelector("#ele4");
function forball4() {
    element4.addEventListener("mousemove", function (data) {
        gsap.to("#ball", {
            left: data.x,
            top: data.y + 1200,
            scale: 1,
        })
        document.querySelector("#ball").style.backgroundColor = "rgba(108, 148, 116, 0.532)";
    })

    element4.addEventListener("mouseleave", function (data) {
        gsap.to("#ball", {
            scale: 0,
        })
    })
}
forball4();