document.addEventListener("keydown", function (e) {
  console.log(e.keyCode);

  const heroLeft = getComputedStyle(heroElement).left;
  console.log("용사의 왼쪽 값 ==>", heroLeft);

  // split는 문자 변수에서 쓸 수 있는데 'px' 기준으로 나누고 배열을 만든다.
  // heroLeft.split("px")[0] <- 문자열이라 숫자로 바꿔줘야 함 Number() 사용
  const heroLeftWithoutPx = Number(heroLeft.split("px")[0]);
  console.log(
    "heroLeftWithoutPx =>",
    typeof heroLeftWithoutPx,
    heroLeftWithoutPx
  );

  //용사의 left가 0보다 작아지거나 or 765 보다 커질때
  if (
    (heroLeftWithoutPx - 10 < 0 && e.keyCode === 37) ||
    (heroLeftWithoutPx + 10 > BG_WIDTH - HERO_WIDTH && e.keyCode === 39)
  ) {
    //return = 함수를 종료
    return;
  }

  if (e.keyCode === 37) {
    // 왼쪽키
    //heroElement.style.left = "0px";

    heroElement.style.left = heroLeftWithoutPx - 10 + "px";
    heroElement.className - "left";

    //console.log("용사의 왼쪽 값 -1 ==>", heroLeftWithoutPx - 1);
  } else if (e.keyCode === 39) {
    // 오른쪽키
    //heroElement.style.left = "800px";

    heroElement.style.left = heroLeftWithoutPx + 10 + "px";
    heroElement.className - "right";

    //console.log("용사의 왼쪽 값 +1 ==>", heroLeftWithoutPx + 1);
  }
});

document.addEventListener("keyup", function () {
  heroElement.className = "stop";
});
