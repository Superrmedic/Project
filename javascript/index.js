"use strict";

const header = document.getElementById("header"), // 헤더
  body = document.querySelector("body"); // 바디
const prdContainer = body.querySelector(".productContainer"); //싱픔이미지리스트
const prdImg1 = prdContainer.querySelectorAll(".prdImg1"), // 마우스 호버를 위한 이미지1
  prdImg2 = prdContainer.querySelectorAll(".prdImg2"); // 마우스 호버를 위한 이미지2

const toTop = body.querySelector(".toTop"); // 탑버튼
let slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0, //시작인덱스
  slideCount = slide.length, //끝인지 마지막인지 구분할 용도
  // slideWidth = 100 + "%", // 슬라이드 이미지 넓이
  prevBtn = document.querySelector(".prevBtn"), // 이전 버튼
  nextBtn = document.querySelector(".nextBtn"); // 다음 버튼

const searchBarWrap = document.querySelector(".searchBarWrap"); // 검색바
const searchBtn = searchBarWrap.querySelector(".searchBtn"); // 검색창
const searchCloseBtn = searchBarWrap.querySelector("searchCloseBtn"); //창닫기

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
    moveSlide(slide.length - 1);
  } else {
    moveSlide(0);
  }
});

// ----------------------------------- 검색창
