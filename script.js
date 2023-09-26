var video = document.querySelector("#video-cont");
var playy = document.querySelector("#play");

video.addEventListener("mouseenter",function(){
    gsap.to(playy,{
        scale:1,
        opacity:1,
    })
})

video.addEventListener("mouseleave",function(){
    gsap.to(playy,{
        scale:0,
        opacity:0,
    })
})

video.addEventListener("mousemove",function(dets){
    gsap.to(playy,{
        left:dets.x-35,
        top:dets.y-35
    })
})
