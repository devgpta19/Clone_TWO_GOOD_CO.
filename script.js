const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function heading(){
    gsap.from("#part1 h1", {
        y: 100,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
    })
}
heading();

function animationelem(){
    gsap.from(".elem img", {
        ease: "inOut",
        delay:3,
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
        delay:3,
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

var element = document.getElementsByClassName(".el");
element.addEventListener("mousemove",function(data){
    gsap.to("#ball",{
        left:data.x,
        top:data.y,
    })
})