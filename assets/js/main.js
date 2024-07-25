import { scrollInnovationCanvas } from "./scrollInnovationCanvas.js";

function sectionIntro() {
  const tlIntro = gsap.timeline();
  tlIntro
    .set(".sc-intro .intro-title span:first-child", {
      fontSize: "840px",
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
      x: -93,
    })
    .to(".sc-intro .intro-title span:first-child", {
      y: -265,
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
      delay: 0.1,
    })
    .to(".sc-innovation .sequence-01", {
      autoAlpha: 0,
    })
    .to(
      ".sc-innovation .sequence-02",
      {
        autoAlpha: 1,
      },
      "-=0.2"
    )
    .from(
      ".sc-innovation .sequence-02 strong",
      {
        y: 1000,
        autoAlpha: 0,
      },
      "-=0.2"
    )
    .to(".sc-innovation .sequence-02 strong", {
      y: -150,
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
  const tlSlide = gsap.timeline({ duration: 0.5 });

  tlSlide
    .to(
      ".flex.slide .sticky",
      {
        x: () => {
          return -($(".sc-tech").width() / 2 - 75);
        },
        delay: 0.1,
      },
      "-=0.3"
    )
    .set(".tech-title", { autoAlpha: 0 }, "<")
    .set(".slide-title", { autoAlpha: 1 }, "<")
    .to(".flex.slide .sticky", {
      x: () => {
        return -($(".sc-tech").width() - 290);
      },
      delay: 0.1,
    })
    .set(".slide-title", { autoAlpha: 0 })
    .set(".tech-title", { justifyContent: "flex-end", autoAlpha: 1 }, "<")
    .to(".flex.slide .sticky", {
      x: () => {
        return -($(".sc-tech").width() + 300);
      },
      delay: 0.1,
    })
    .to(".flex.slide .sticky", {
      x: () => {
        return -($(".sc-tech").width() + $(".sc-newnormal").width() - 440);
      },
      delay: 0.1,
    })
    .set(".newnormal-title", { autoAlpha: 0 }, "<")
    .set(
      ".slide-title",
      {
        autoAlpha: 1,
        color: "#000",
        text: {
          value: "new normal",
        },
      },
      "<"
    )
    .set(".slide-title", { autoAlpha: 0 })
    .set(".newnormal-title", { justifyContent: "flex-end", autoAlpha: 1 }, "<")
    .to(".flex.slide .sticky", {
      x: () => {
        return -($(".sc-tech").width() + $(".sc-newnormal").width() + 600);
      },
      delay: 0.1,
    })
    .set(".eco-title", { autoAlpha: 0 })
    .set(
      ".slide-title",
      {
        autoAlpha: 1,
        text: {
          value: "eco",
        },
      },
      "<"
    )
    .to(".flex.slide .sticky", {
      x: () => {
        return -(
          $(".sc-tech").width() +
          $(".sc-newnormal").width() +
          $(".sc-eco").width() +
          380
        );
      },
      delay: 0.1,
    })
    .set(".slide-title", { autoAlpha: 0 })
    .set(".eco-title", { justifyContent: "flex-end", autoAlpha: 1 }, "<")
    // .to(".flex.slide .sticky", {
    //   x: () => {
    //     return -(
    //       $(".flex.slide .sticky").innerWidth() -
    //       window.innerWidth -
    //       515
    //     );
    //   },
    //   delay: 0.1,
    // })
    .to(".flex.slide .sticky", {
      x: () => {
        return -($(".flex.slide .sticky").innerWidth() - window.innerWidth);
      },
      delay: 0.1,
    })
    .set(".sc-innovation", { autoAlpha: 0 }, "<");
  // .set(".with-title", { autoAlpha: 0 }, "<")
  // .set(
  //   ".slide-title",
  //   {
  //     autoAlpha: 1,
  //     text: {
  //       value: "with",
  //     },
  //   },
  //   "<"
  // );

  ScrollTrigger.create({
    trigger: ".flex.slide",
    start: "top top",
    end: "bottom bottom",
    animation: tlSlide,
    scrub: 1,
    onEnter: () => {
      setHeaderStyle("black");
      $(".flex.slide > [class*='marquee-']").css("position", "fixed");
      gsap.set(".flex.slide > [class*='marquee-']", { x: -60, autoAlpha: 0 });
    },
    onLeaveBack: () => {
      setHeaderStyle("transparent");
      gsap.to(`.flex.slide .marquee-01`, {
        x: -60,
        onComplete: () => {
          $(".flex.slide > [class*='marquee-']").css("position", "static");
          sideMarquee.pause();
        },
      });
    },
    onEnterBack: () => {
      $(".flex.slide > [class*='marquee-']").css("position", "fixed");
      gsap.from(`.flex.slide > [class*='marquee-']`, {
        x: -60,
        onComplete: () => {
          sideMarquee.play();
        },
      });
      // gsap.set(".slide-title", {
      //   position: "fixed",
      // });
    },
    onLeave: () => {
      gsap.to(`.flex.slide > [class*='marquee-']`, {
        x: -60,
        onComplete: () => {
          $(".flex.slide > [class*='marquee-']").css("position", "static");
          sideMarquee.pause();
        },
      });
      // gsap.set(".slide-title", {
      //   position: "absolute",
      // });
    },
    onUpdate: ({ progress }) => {
      console.log(progress);
      const changeSideMarquee = (progress) => {
        if (progress >= 0 && progress < 0.41) {
          gsap.set(`.flex.slide .marquee-01`, {
            autoAlpha: 1,
          });
          gsap.to(`.flex.slide .marquee-01`, {
            x: 0,
            duration: 0.2,
          });
          gsap.set(".flex.slide > [class*='marquee-']", { x: 0 });
        }

        if (progress >= 0.41 && progress < 0.65) {
          gsap.to(`.flex.slide .marquee-02`, {
            autoAlpha: 1,
            duration: 0.2,
          });
          gsap.set(".flex.slide > [class*='marquee-']", { x: 0 });
        } else {
          gsap.to(`.flex.slide .marquee-02`, { autoAlpha: 0, duration: 0.2 });
        }

        if (progress >= 0.65 && progress < 0.88) {
          gsap.to(`.flex.slide .marquee-03`, {
            autoAlpha: 1,
            duration: 0.2,
          });
          gsap.set(".flex.slide > [class*='marquee-']", { x: 0 });
        } else {
          gsap.to(`.flex.slide .marquee-03`, { autoAlpha: 0, duration: 0.2 });
        }

        if (progress >= 0.88 && progress <= 1) {
          gsap.to(`.flex.slide .marquee-04`, {
            autoAlpha: 1,
            duration: 0.2,
          });
          gsap.set(".flex.slide > [class*='marquee-']", { x: 0 });
        } else {
          gsap.to(`.flex.slide .marquee-04`, {
            autoAlpha: 0,
            duration: 0.2,
          });
        }
      };
      const changeHeaderStyle = (progress) => {
        if (progress < 0.21) {
          setHeaderStyle("black");
        } else if (progress >= 0.21 && progress < 1) {
          setHeaderStyle("white");
        } else if (progress >= 1) {
          setHeaderStyle("transparent");
        }
      };
      const updateBgColor = (progress) => {
        let colorValue;

        if (progress >= 0.17 && progress <= 0.41) {
          colorValue = Math.floor((255 * (progress - 0.17)) / 0.2);
        } else if (progress < 0.17) {
          colorValue = 0;
        } else {
          colorValue = 255;
        }
        colorValue = Math.min(255, Math.max(0, colorValue));

        $(".flex.slide .sticky").css(
          "background-image",
          `linear-gradient(to right, rgb(${colorValue}, ${colorValue}, ${colorValue}), rgb(${colorValue}, ${colorValue}, ${colorValue}))`
        );
      };

      changeSideMarquee(progress);
      updateBgColor(progress);
      changeHeaderStyle(progress);
    },
  });

  const sideMarquee = gsap.to(".marquee-item", {
    xPercent: 10,
    repeat: -1,
    duration: 4,
    ease: "none",
    paused: true,
  });
  const setHeaderStyle = (bgColor) => {
    if (bgColor === "transparent") {
      $("#header").addClass("dark");
      $("#header").css({
        "background-image":
          "linear-gradient(180deg,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1))",
        "background-color": "transparent",
      });
    } else if (bgColor === "white") {
      $("#header").addClass("dark");
      $("#header").css({
        "background-image": "none",
        "background-color": "#fff",
      });
    } else if (bgColor === "black") {
      $("#header").removeClass("dark");
      $("#header").css({
        "background-image": "none",
        "background-color": "#000",
      });
    }
  };
}
function sectionChallenge() {
  const videoItems = gsap.utils.toArray(".sc-challenge .video-item");
  const groups = [
    [videoItems[0], videoItems[3]],
    [videoItems[1], videoItems[4]],
    [videoItems[2], videoItems[5]],
  ];

  gsap.set(".sc-challenge .video-item", { autoAlpha: 0 });

  const tlChallenge = gsap.timeline({ paused: true });
  groups.forEach((item, index) => {
    tlChallenge.fromTo(
      item,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" },
      index * 0.3
    );
  });

  ScrollTrigger.create({
    trigger: ".sc-challenge",
    start: "top 35%",
    end: "bottom bottom",
    onEnter: () => {
      tlChallenge.play();
    },
  });
}
function sectionContact() {
  gsap.set(".sc-contact .group-content", { y: 194 });
  gsap.to(".sc-contact .group-content", {
    y: 0,
    scrollTrigger: {
      trigger: ".sc-contact",
      start: "bottom 86%",
      end: "bottom+=160px bottom",
      scrub: 1,
    },
  });
}

$(function () {
  gsap.set(".sc-intro .sticky > *:not(.intro-video)", { autoAlpha: 1 });

  sectionIntro();
  sectionInnovation();
  sectionMainSlide();
  sectionChallenge();
  sectionContact();
});
