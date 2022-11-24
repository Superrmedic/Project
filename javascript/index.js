"use strict";

const headerTop = document.getElementById("headerTop"), // 헤더
  body = document.querySelector("body"); // 바디
const prdContainer = body.querySelector(".productContainer"); //싱픔이미지리스트
const prdImg1 = prdContainer.querySelectorAll(".prdImg1"), // 마우스 호버를 위한 이미지1
  prdImg2 = prdContainer.querySelectorAll(".prdImg2"); // 마우스 호버를 위한 이미지2
let slideWrapper = document.querySelector(".slideWrapper"),
  slides = document.querySelector(".slides"),
  slidesLi = document.querySelectorAll(".slides li"),
  slideCount = slidesLi.length / 2, //끝인지 마지막인지 구분할 용도
  currentIdx = 0, //시작인덱스
  prevBtn = document.querySelector(".prevBtn"), // 이전 버튼
  nextBtn = document.querySelector(".nextBtn"); // 다음 버튼

const toTop = body.querySelector(".toTop"); // 탑버튼

const categoryContainer = document.querySelector(".categoryContainer");
const subTitle = document.querySelectorAll(".subTitle");
const categoryHover = document.querySelectorAll(".categoryHover");

const category = document.querySelectorAll(".category");
const searchBarWrap = document.querySelector(".searchBarWrap"); // 숨긴 검색바
const searchBtn = headerTop.querySelector(".searchBtn_a"); // 검색버튼
const searchCloseBtn = headerTop.querySelector(".searchCloseBtn"); //창닫기

const hbgBtn = headerTop.querySelector('.headerLogo .hamburgerBtn');

// ==============================================================================
window.addEventListener("scroll", btnView);

// 탑버튼이 스크롤 일정구간 밑에서 보이게
function btnView() {
  if (window.pageYOffset > this.innerHeight / 1.5) {
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
  }
}

const moveTop = (e) => {
  e.preventDefault();
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

toTop.addEventListener("click", moveTop);

// ----------------------------------- 이미지 위에 마우스 올렸을 때 다른 이미지로 변환
for (let i = 0; i < prdImg1.length; i++) {
  prdImg1[i].addEventListener("mouseover", function (e) {
    let tg = e.target;
    tg.style.zIndex = "0";
  });

  prdImg2[i].addEventListener("mouseout", function (e) {
    prdImg1[i].style.zIndex = "1";
  });
}

// ----------------------------------- 검색창
headerTop.addEventListener("click", function (e) {
  if (e.target == searchBtn) {
    searchBarWrap.style.opacity = "1";
    searchBarWrap.classList.remove("hidden");
    console.log(e.target);
  } else if (e.target == searchCloseBtn) {
    searchBarWrap.classList.add("hidden");
    searchBarWrap.style.opacity = "0";
  }
});

// ====================================  드롭다운 메뉴
function showMenu(v) {
  categoryHover[v].style.visibility = "visible";
  categoryHover[v].style.opacity = "0";
  categoryHover[v].style.backgroundColor = "rgb(255, 255, 255)";
  subTitle[v].style.opacity = "0.5";

  if (matchMedia("screen and (min-width: 901px)").matches) {
    categoryHover[1].style.background = "none";
  }

  if (matchMedia("screen and (max-width: 900px)").matches) {
    subTitle[v].style.backgroundColor = "white";
  }
}

for (let i = 0; i < subTitle.length; i++) {
  subTitle[i].addEventListener("mouseenter", function (e) {
    for (let x = 0; x < subTitle.length; x++) {
      showMenu(x);
    }

    if (e.target == subTitle[i]) {
      categoryHover[i].style.opacity = "1";
      subTitle[i].style.opacity = "1";
    }
  });
  category[i].addEventListener("mouseleave", function (e) {
    for (let x = 0; x < categoryHover.length; x++) {
      (categoryHover[x].style.visibility = "hidden"),
        (categoryHover[x].style.opacity = "0"),
        (categoryHover[x].style.transition = ".5s");

      if (matchMedia("screen and (min-width: 900px)").matches) {
        category[i].style.background = "none";
        subTitle[i].style.background = "none";
      }
    }
  });
}
// ----------------------------------- 자동 슬라이드

function moveSlide(num) {
  slides.style.left = -num * 100 + "%";
  currentIdx = num;
}

function leftMove() {
  if (currentIdx < slideCount - 1) {
    moveSlide(currentIdx + 1);
  } else {
    moveSlide(0);
  }
}

nextBtn.addEventListener("click", leftMove);

prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
    console.log(currentIdx);
  } else if (currentIdx <= 0) {
    moveSlide(slideCount - 1);
  } else {
    moveSlide(0);
  }
});

setInterval(leftMove, 5000);


// ------------------------------ 햄버거버튼
let idx = 0;
hbgBtn.addEventListener('click', function () {
  idx++;
  for (let i = 0; i < category.length; i++) {
    if (idx % 2 == 1) {
      category[i].style.visibility = 'visible';
    } else {
      category[i].style.visibility = 'hidden';
    }

    category[i].addEventListener('mouseenter', function (e) {
      if (matchMedia("screen and (max-width: 900px)").matches) { }
      category[i].style.background = 'none';
    });


  }
});
