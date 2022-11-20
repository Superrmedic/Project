"use strict";

const header = document.getElementById("header"), // 헤더
  body = document.querySelector("body"); // 바디
const prdContainer = body.querySelector(".productContainer"); //싱픔이미지리스트
const prdImg1 = prdContainer.querySelectorAll(".prdImg1"), // 마우스 호버를 위한 이미지1
  prdImg2 = prdContainer.querySelectorAll(".prdImg2"); // 마우스 호버를 위한 이미지2

let slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0, //시작인덱스
  slideCount = slide.length, //끝인지 마지막인지 구분할 용도
  slideWidth = 300,
  prevBtn = document.querySelector(".prevBtn"), // 이전 버튼
  nextBtn = document.querySelector(".nextBtn"); // 다음 버튼

const toTop = body.querySelector(".toTop"); // 탑버튼

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

// // 이미지 위에 마우스 올렸을 때 다른 이미지로 변환
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

slides.style.width = slideWidth * slideCount + "px";

function moveSlide(num) {
  slides.style.left = -num * 100 + "%";
  currentIdx = num;
}
nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 3) {
    moveSlide(currentIdx + 1);
    console.log(currentIdx);
  } else {
    moveSlide(0);
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
    console.log(currentIdx);
  } else {
    moveSlide(0);
  }
});

// ============================== 자동 슬라이드

// let slide_idx = 0,                    // 현재 슬라이드 인덱스.
//     slide_endIdx = li.length - 1,     // 슬라이드 인덱스 종료값.
//     beforeEventTime = -new Date();
// // 이전 이벤트 시작 시간. 최최 로드 즉시 클릭을 했을때 경과시간(1000)
// // 미만으로 클릭되지 않는 문제점 해결을 위해 음수 시간 지정.

// function executable() {               // 버튼 연속 실행 제어 함수.
//     let currentEventTime = new Date();                                // 현재 이벤트 시작 시간.

//     if (currentEventTime - beforeEventTime > 1000) {
// // 일정시간이 지나야만 다음 이벤트가 실행될 수 있도록 구현.
//         beforeEventTime = currentEventTime;

//         return true;
//         // return 시키지 않으면 undefined 반환
//     }

//     // return false; (자바에서는 무조건 return값 들어가야돼서 이렇게 작성해야함)
// }

// /* ================================================================================== */

// // 이벤트 타겟 (클릭한 대상)
// main_container.addEventListener('click', function (e) {
//     if (executable()) {
//         const btn = e.target.closest('a');
// // closest(selectors): 주어진 CSS 선택자와 일치하는 요소를 찾을 때까지, 자기 자신을 포함해 위쪽(부모 방향, 문서 루트까지)으로 문서 트리를 순회

// // a태그의 이전버튼을 클릭했다면
//         if (btn === backBtn) {
// 	// 현재 슬라이드 인덱스 감소
//             slide_idx--;

// // fowardBtn에 display none 효과가 있는 'nonVisible' 클래스 삭제 (오른쪽버튼 보이기)
//             fowardBtn.classList.remove('nonVisible');

// // 현재 슬라이드 인덱스가 0이하
//             if (slide_idx <= 0) {

// // backBtn에 display none 효과가 있는'nonVisible'클래스 추가 (왼쪽버튼숨김)
//                 backBtn.classList.add('nonVisible');
//             }
//         } else if (btn=== fowardBtn) {
//             slide_idx++;

//             backBtn.classList.remove('nonVisible');
//             if (slide_idx >= slide_endIdx) {
//                 fowardBtn.classList.add('nonVisible');
//             }
//         } else {
//             return;
// // 버튼이 아닌 요소가 클릭되어도 인덱스(slide_idx)는 변하지 않으므로
// // return 을 굳이 하지 않아도 하기의 로직 실행으로 인한 변화는 없음. 따라서
// // 실행에는 전혀 문제가 없으나 불필요한 로직 실행을 막기 위해 return.
//         }

//         slide_list.style.left = `${slide_idx * -100}%`;
//     }
// });
