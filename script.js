const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("#part1 h1",{
    y:100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.3,
})