import { scrollInnovationCanvas } from "./scrollInnovationCanvas.js";

$(function () {
  // sectionIntro();
  // sectionInnovation();
  sectionMainSlide();
});

function sectionIntro() {
  const tlIntro = gsap.timeline();
  tlIntro
    .set(".sc-intro .intro-title span:first-child", {
      fontSize: "994px",
      xPercent: -50,
      yPercent: -50,
    })
    .set(".sc-intro .intro-title span:not(:first-child)", {
      x: (index) => {
        const xPos = index % 2 === 0 ? 1000 : -1000;
        return xPos;
      },
      opacity: 0,
    })
    .set(".sc-intro .sequence-02", {
      autoAlpha: 0,
      y: 100,
    })
    .set(".sc-intro .sequence-03", {
      autoAlpha: 0,
    })
    .to(".sc-intro .intro-title span:first-child", {
      fontSize: "160px",
    })
    .to(".sc-intro .intro-title span:first-child", {
      x: -113,
    })
    .to(".sc-intro .intro-title span:first-child", {
      y: -295,
    })
    .to(
      ".sc-intro .sequence-01 span",
      {
        visibility: "visible",
      },
      "<"
    )
    .to(
      ".sc-intro .sequence-01 span:not(:first-child)",
      {
        x: 0,
        opacity: 1,
        stagger: 0.04,
      },
      "-=0.4"
    )
    .to(".sc-intro .sequence-01 span", {
      x: (index) => {
        const xPos = index % 2 === 0 ? 800 : -800;
        return xPos;
      },
      opacity: 0,
      delay: 0.1,
    })
    .to(
      ".sc-intro .scroll-down",
      {
        autoAlpha: 0,
      },
      "<"
    )
    .to(".sc-intro .sequence-01", {
      autoAlpha: 0,
    })
    .to(
      ".sc-intro .sequence-02",
      {
        autoAlpha: 1,
        y: 0,
      },
      "<"
    )
    .to(".sc-intro .sequence-02", {
      autoAlpha: 0,
    })
    .to(
      ".sc-intro .sequence-03",
      {
        autoAlpha: 1,
      },
      "<"
    )
    .to(".sc-intro .sequence-03 .desc-wrap > *", {
      opacity: 1,
      stagger: 0.5,
    });

  ScrollTrigger.create({
    trigger: ".sc-intro",
    start: "top top",
    end: "bottom bottom",
    animation: tlIntro,
    scrub: 1,
  });
}
function sectionInnovation() {
  let yPos;
  let scrollTriggerCanvas;

  const tlInnovation = gsap.timeline({
    onUpdate: () => {
      yPos = -$(".sc-innovation .sequence-04").height();
      $(".sc-innovation .sequence-03").css("top", `${yPos / 2}px`);
    },
  });
  tlInnovation
    .to(".sc-innovation .sequence-01", {
      autoAlpha: 1,
      duration: 0.2,
    })
    .to(".sc-innovation .sequence-01 span", {
      fontSize: "1200px",
    })
    .to(".sc-innovation .sequence-01", {
      autoAlpha: 0,
    })
    .to(".sc-innovation .sequence-02", {
      autoAlpha: 1,
    })
    .from(
      ".sc-innovation .sequence-02 strong",
      {
        y: 1000,
      },
      "<"
    )
    .to(".sc-innovation .sequence-02 strong", {
      y: -200,
      delay: 0.2,
      duration: 0.2,
    })
    .to(".sc-innovation .sequence-02 strong", {
      autoAlpha: 0,
      duration: 0.05,
    })
    .to(".sc-innovation .sequence-03", {
      autoAlpha: 1,
    })
    .to(".sc-innovation .sequence-03", {
      y: -144,
      duration: 0.05,
    })
    .set(
      ".sc-innovation .sequence-04",
      {
        autoAlpha: 1,
      },
      "<"
    )
    .to(".sc-innovation .sequence-04", {
      height: "40%",
      duration: 0.2,
    })
    .to(".sc-innovation .sequence-04", {
      width: "100%",
      height: "100%",
    })
    .set(".sc-innovation .sequence-04", {
      autoAlpha: 0,
    })
    .set(
      ".sc-innovation .sequence-05",
      {
        autoAlpha: 1,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".sc-innovation",
    start: "top top",
    end: "center center",
    animation: tlInnovation,
    invalidateOnRefresh: true,
    scrub: 1,
    onEnter: () => {
      gsap.to("#header", {
        autoAlpha: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to("#header", {
        autoAlpha: 0,
      });
    },
    onEnterBack: () => {
      if (scrollTriggerCanvas) {
        scrollTriggerCanvas.kill();
      }
    },
    onLeave: () => {
      scrollTriggerCanvas = scrollInnovationCanvas();
    },
  });
}
function sectionMainSlide() {
  const sideMarquee = gsap.to(".marquee-item", {
    xPercent: 10,
    repeat: -1,
    duration: 4,
    ease: "none",
  });

  sideMarquee.pause();

  const tlSlide = gsap.timeline();
  tlSlide
    .set(".flex.slide .marquee", { xPercent: -100 })
    .to(".flex.slide .sticky", {
      xPercent: -100,
      x: () => {
        return window.innerWidth;
      },
      delay: 0.05,
    });
  // .set(".sc-innovation", { autoAlpha: 0 });

  ScrollTrigger.create({
    trigger: ".flex.slide",
    start: "top top",
    end: "bottom bottom",
    animation: tlSlide,
    markers: true,
    scrub: 1,
    onEnter: () => {
      setHeaderStyle(false);
      animateMarquee("fixed");
    },
    onLeaveBack: () => {
      setHeaderStyle(true);
      animateMarquee("static");
    },
    onEnterBack: () => {
      animateMarquee("fixed");
    },
    onLeave: () => {
      animateMarquee("static");
    },
    onUpdate: ({ progress }) => {
      const updateBackgroundImage = (progress) => {
        let colorValue;
        if (progress >= 0.2 && progress <= 0.3) {
          colorValue = Math.floor((255 * (progress - 0.2)) / 0.1);
        } else if (progress < 0.2) {
          colorValue = 0;
        } else {
          colorValue = 255;
        }

        $(".flex.slide .sticky").css(
          "background-image",
          `linear-gradient(to right, rgb(${colorValue}, ${colorValue}, ${colorValue}), rgb(${colorValue}, ${colorValue}, ${colorValue}))`
        );
      };
      updateBackgroundImage(progress);

      // 추후 autoAlpha로 개선
      if (progress < 0.36) {
        $(".marquee-item .uppercase").text("tech");
        $(".marquee").removeClass("dark");
      } else if (progress >= 0.36 && progress < 0.59) {
        $(".marquee-item .uppercase").text("new normal");
        $(".marquee").css(
          "background-image",
          "linear-gradient(0deg, #D6FE51, #68D840)"
        );
        $(".marquee").addClass("dark");
      } else if (progress >= 0.59 && progress < 0.95) {
        $(".marquee-item .uppercase").text("eco");
        $(".marquee").css(
          "background-image",
          "linear-gradient(0deg, #00D543, #0CACFF)"
        );
      } else if (progress >= 0.95) {
        $(".marquee-item .uppercase").text("with");
        $(".marquee").css(
          "background-image",
          "linear-gradient(0deg, #EE7F31, #FF3973)"
        );
      }
    },
  });

  const setHeaderStyle = (isDark) => {
    if (isDark) {
      $("#header").addClass("dark");
      $("#header").css({
        "background-image":
          "linear-gradient(180deg,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1))",
        "background-color": "transparent",
      });
    } else {
      $("#header").removeClass("dark");
      $("#header").css({
        "background-image": "none",
        "background-color": "#000",
      });
    }
  };
  const animateMarquee = (position) => {
    if (position === "fixed") {
      $(".marquee").css("position", "fixed");
      gsap.to(".flex.slide .marquee", {
        xPercent: 0,
        onComplete: () => {
          sideMarquee.play();
        },
      });
    } else if (position === "static") {
      gsap.to(".flex.slide .marquee", {
        xPercent: -100,
        onComplete: () => {
          sideMarquee.pause();
          $(".marquee").css("position", "static");
        },
      });
    }
  };
}
