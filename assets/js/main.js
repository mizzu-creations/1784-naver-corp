import { scrollInnovationCanvas } from "./scrollInnovationCanvas.js";

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
  const tlSlide = gsap.timeline({ duration: 0.5 });

  tlSlide
    .to(
      ".flex.slide .sticky",
      {
        x: () => {
          return -($(".sc-tech").width() / 2 - 70);
        },
      },
      "-=0.3"
    )
    .set(".tech-title", { autoAlpha: 0 }, "<")
    .set(".slide-title", { autoAlpha: 1 }, "<")
    .to(".flex.slide .sticky", {
      x: () => {
        return -($(".sc-tech").width() - 280);
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
        return -($(".sc-tech").width() + $(".sc-newnormal").width() - 430);
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
        return -($(".sc-tech").width() + $(".sc-newnormal").width() + 610);
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
          395
        );
      },
      delay: 0.1,
    })
    .to(".flex.slide .sticky", {
      x: () => {
        return -($(".flex.slide .sticky").innerWidth() - window.innerWidth);
      },
      delay: 0.1,
    })
    .set(".slide-title", { autoAlpha: 0 }, "<")
    .set(".eco-title", { justifyContent: "flex-end", autoAlpha: 1 }, "<")
    .set(".sc-innovation", { autoAlpha: 0 }, "<");

  ScrollTrigger.create({
    trigger: ".flex.slide",
    start: "top top",
    end: "bottom bottom",
    animation: tlSlide,
    scrub: 1,
    onEnter: () => {
      setHeaderStyle("black");
      $(".flex.slide > [class*='marquee-']").css("position", "fixed");
      gsap.set(".flex.slide > [class*='marquee-']", {
        autoAlpha: 0,
        xPercent: -100,
        onComplete: () => {
          sideMarquee.play();
          gsap.to(`.flex.slide .marquee-01`, { xPercent: 0, autoAlpha: 1 });
        },
      });
    },
    onLeaveBack: () => {
      setHeaderStyle("transparent");
      gsap.to(`.flex.slide .marquee-01`, {
        xPercent: -100,
        autoAlpha: 0,
        onComplete: () => {
          $(".flex.slide > [class*='marquee-']").css("position", "static");
          sideMarquee.pause();
        },
      });
    },
    onEnterBack: () => {
      $(".flex.slide > [class*='marquee-']").css("position", "fixed");
      gsap.to(`.flex.slide > [class*='marquee-']`, {
        xPercent: 0,
        onComplete: () => {
          sideMarquee.play();
        },
      });
    },
    onLeave: () => {
      gsap.to(`.flex.slide > [class*='marquee-']`, {
        xPercent: -100,
        onComplete: () => {
          $(".flex.slide > [class*='marquee-']").css("position", "static");
          sideMarquee.pause();
        },
      });
    },
    onUpdate: ({ progress }) => {
      const changeSideMarquee = (progress) => {
        if (progress >= 0 && progress < 0.44) {
          gsap.to(`.flex.slide .marquee-01`, {
            xPercent: 0,
            autoAlpha: 1,
            duration: 0.2,
          });
        } else {
          gsap.to(`.flex.slide .marquee-01`, { autoAlpha: 0, duration: 0.2 });
        }

        if (progress >= 0.44 && progress < 0.72) {
          gsap.to(`.flex.slide .marquee-02`, {
            xPercent: 0,
            autoAlpha: 1,
            duration: 0.2,
          });
        } else {
          gsap.to(`.flex.slide .marquee-02`, { autoAlpha: 0, duration: 0.2 });
        }

        if (progress >= 0.72 && progress < 0.88) {
          gsap.to(`.flex.slide .marquee-03`, {
            xPercent: 0,
            autoAlpha: 1,
            duration: 0.2,
          });
        } else {
          gsap.to(`.flex.slide .marquee-03`, { autoAlpha: 0, duration: 0.2 });
        }

        if (progress >= 0.88 && progress <= 1) {
          gsap.to(`.flex.slide .marquee-04`, {
            xPercent: 0,
            autoAlpha: 1,
            duration: 0.2,
          });
        } else {
          gsap.to(`.flex.slide .marquee-04`, {
            autoAlpha: 0,
            duration: 0.2,
          });
        }
      };
      const changeHeaderStyle = (progress) => {
        if (progress < 0.23) {
          setHeaderStyle("black");
        } else if (progress >= 0.23 && progress < 1) {
          setHeaderStyle("white");
        } else if (progress >= 1) {
          setHeaderStyle("transparent");
        }
      };
      const updateBackgroundImage = (progress) => {
        let colorValue;

        if (progress >= 0.2 && progress <= 0.52) {
          colorValue = Math.floor((255 * (progress - 0.2)) / 0.25);
        } else if (progress < 0.2) {
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
      updateBackgroundImage(progress);
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
  sectionIntro();
  sectionInnovation();
  sectionMainSlide();
  sectionChallenge();
  sectionContact();
});
