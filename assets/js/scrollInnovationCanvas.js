export const scrollInnovationCanvas = () => {
  const canvas = document.querySelector(".innovation-building canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  };

  window.addEventListener("resize", resizeCanvas);

  // canvas 이미지 호출
  const selectSequenceURL = (index) => {
    if (index < 0 || index > 251) {
      return null;
    }
    const fileOrder = index.toString().padStart(3, "0");
    return `assets/images/sequence/NAVER_1784_PC_Half_00${fileOrder}.jpg`;
  };

  const frameCount = 251;
  const images = [];
  const imageSeq = { frame: 0 };

  // 이미지 프리로드
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = selectSequenceURL(i);
    images.push(img);
  }

  // 이미지 스케일링 및 중앙 정렬
  function scaleImage(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;
    let ratio = Math.max(hRatio, vRatio);
    let centerShiftX = (canvas.width - img.width * ratio) / 2;
    let centerShiftY = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
  }

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  // 애니메이션 설정
  const animation = gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1,
      trigger: ".sc-innovation",
      start: "47% top",
      end: "bottom bottom",
      onEnter: () => {
        $("#header").addClass("dark");
      },
      onLeaveBack: () => {
        $("#header").removeClass("dark");
      },
    },
    onUpdate: render,
  });

  images[0].onload = render;

  // ScrollTrigger 객체 반환
  return animation.scrollTrigger;
};
