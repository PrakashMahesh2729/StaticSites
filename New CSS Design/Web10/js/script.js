console.log("java attachment test!")


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let t1=gsap.timeline({delay:0.2});
    t1.to('header',{duration: 1, y:0, opacity:1});
    t1.to('.topic',{duration: 1, y:0, opacity:1});
// nm

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".b-one,.b-three,.b-five").forEach((elem) => {
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: 'top 95%',
        end: 'bottom 300%',
        scrub: 1
      },
    })
    .from(elem, {x:600, duration:1, opacity:0, ease: "none"})
    });
gsap.utils.toArray(".b-two,.b-four").forEach((ele) => {

    let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ele,
          start: 'top 95%',
          end: 'bottom 300%',
          scrub: 1
        },
      })
      .from(ele, {x:-600, duration:1, opacity:0, ease:'none'})
    });
