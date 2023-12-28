// function ScrollingKeeda() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".smooth-scroll"),
//     smooth: true,

//     // for tablet smooth
//     tablet: { smooth: true },

//     // for mobile
//     smartphone: { smooth: true },
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(".smooth-scroll", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },

//     // follwoing line is not required to work pinning on touch screen

//     pinType: document.querySelector(".smooth-scroll").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }

// ScrollingKeeda();

function updateTime() {
  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Create a string to display the time
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Update the content of the div with id "timeDisplay"
  document.getElementById("timeDisplay").textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);

gsap.from(".nav_link, .logo, .cta", {
  stagger: 0.2,
  y: 10,
  opacity: 0,
  duration: 1,
  ease: Power2,
});

Shery.textAnimate(".hero_title h1", {
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 30,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
  ease: Expo,
});

Shery.mouseFollower({
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.7,
});

Shery.makeMagnet(".logo, .nav_link, .cta", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.7,
});

// Latest Project Animation
document.querySelectorAll(".project").forEach(function (project) {
  project.addEventListener("mouseenter", function (details) {
    var image = project.querySelector("img");
    var heading = project.querySelector("h2");
    gsap.to(image, {
      // transform: "translateX(50px)",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.7,
      css: {
        display: "block",
      },
    });

    gsap.to(heading, {
      fontSize: "3em",
      // transform: "translateX(20px)",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.7,
    });
  });

  project.addEventListener("mouseleave", function (details) {
    var image = project.querySelector("img");
    var heading = project.querySelector("h2");
    gsap.to(image, {
      // transform: "translateX(0px)",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.7,
      css: {
        display: "none",
      },
    });

    gsap.to(heading, {
      fontSize: "2vw",
      // transform: "translateX(0)",
      duration: 0.5,
      ease: Expo,
    });
  });
});

// Work Process Animation
function hrprocess() {
  const container = document.querySelector(".work_process");
  const contentSec = gsap.utils.toArray(".container .process");

  if (container && contentSec.length > 0) {
    const scrollTween = gsap.to(contentSec, {
      xPercent: -100 * (contentSec.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.9,
        start: "top top", // Adjust the start property
        end: "+=3000",
      },
    });
  }
}

hrprocess();

// Services
function ServicesAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const cards = document.querySelectorAll(".card");
  const service_header = document.querySelector(".service_header");
  const animation = gsap.timeline();
  let cardHeight;

  function initCards() {
    animation.clear();
    cardHeight = cards[0].offsetHeight;

    cards.forEach((card, index) => {
      if (index > 0) {
        gsap.set(card, { y: index * cardHeight });

        animation.to(card, { y: 0, duration: index * 0.5, ease: "none" }, 0);
      }
    });
  }

  initCards();

  ScrollTrigger.create({
    trigger: ".services",
    start: "top top",
    pin: true,
    end: () => `+=${cards.length * cardHeight + service_header.offsetHeight}`,
    scrub: true,
    animation: animation,
    invalidateOnRefresh: true,
  });

  ScrollTrigger.addEventListener("refreshInit", initCards);
}
ServicesAnimation();

// Text Scrolling Animation
function TextScrolling() {
  const rows = document.querySelectorAll(".cb-tagreel-row");

  rows.forEach(function (e, i) {
    let row_width = e.getBoundingClientRect().width;
    let row_item_width = e.children[0].getBoundingClientRect().width;
    let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
    let x_translation = initial_offset * -1;
    gsap.set(e, {
      xPercent: `${initial_offset}`,
    });

    let duration = 5 * (i + 1);

    var tl = gsap.timeline();

    tl.to(e, {
      ease: "none",
      duration: duration,
      xPercent: 0,
      repeat: -1,
    });
  });
}

TextScrolling();
