const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// let heroTL = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".hero",
//         start: "top top",
//         end: "bottom center",
//         scrub: true,
//         markers: false,
//         pin:'.hero'
//       }
// })

// heroTL.to('.about',{y:"-100%"});

let servicesTL = gsap.timeline({
    scrollTrigger:{
        trigger:".services",
        start:"top center",
        end:"bottom center",
        scrub:true,
        markers:false,
    }
})

document.getElementById("service-1").onmouseover = function () {mouseover1()};
document.getElementById("service-1").onmouseout = function () {mouseout1()};

function mouseover1(){
  document.getElementById("service-1-disc").style.maxHeight = "100rem";
}

function mouseout1(){
  document.getElementById("service-1-disc").style.maxHeight = 0;
}

document.getElementById("service-2").onmouseover = function () {mouseover2()};
document.getElementById("service-2").onmouseout = function () {mouseout2()};

function mouseover2(){
  document.getElementById("service-2-disc").style.maxHeight = "100rem";
}

function mouseout2(){
  document.getElementById("service-2-disc").style.maxHeight = 0;
}

document.getElementById("service-3").onmouseover = function () {mouseover3()};
document.getElementById("service-3").onmouseout = function () {mouseout3()};

function mouseover3(){
  document.getElementById("service-3-disc").style.maxHeight = "100rem";
}

function mouseout3(){
  document.getElementById("service-3-disc").style.maxHeight = 0;
}

document.getElementById("service-4").onmouseover = function () {mouseover4()};
document.getElementById("service-4").onmouseout = function () {mouseout4()};

function mouseover4(){
  document.getElementById("service-4-disc").style.maxHeight = "100rem";
}

function mouseout4(){
  document.getElementById("service-4-disc").style.maxHeight = 0;
}


servicesTL.to('.service-items-wrap',{left:0})

let tlabout = gsap.timeline({ defaults: { ease: "power1.out" } });
tlabout.to(".about h1", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
        trigger: ".about",
        scrub: true,
        start: "top center",
        end: "center center",
        markers: false,
    }
})