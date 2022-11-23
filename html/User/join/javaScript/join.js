'use strict';

const joinContainer = document.querySelector('.joinContainer'),
    inputJoin = joinContainer.getElementsByTagName('input'),
    checkBox = document.querySelector('.agree'),
    checkList = checkBox.getElementsByTagName('input');

function checkAlert(check, input) {
    if (!check.test(input.value)) {
        input.style.border = "1px solid rgb(182, 182, 182)"
    } else {
        input.style.border = "1px solid red"
    }
}       // 유효성 검사 style 함수

for (let i = 0; i < inputJoin.length; i++) {
    inputJoin[i].addEventListener('input', (e) => {
        let eventObj = e.target,
            checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,   // 한글만
            checkNum = /[0-9]+$/,       // 숫자만
            checkkorEng = /[a-z|A-Z|ㄱ-ㅎ|가-힣]/;      // 한글 영어만

        if (eventObj.name === 'id') {
            checkAlert(checkKor, eventObj);
        } else if (eventObj.name === 'name') {
            checkAlert(checkNum, eventObj);
        } else if (eventObj.name === 'email') {
            checkAlert(checkKor, eventObj);
        }
    });
}   // 정규식 유효성 검사

checkBox.addEventListener('click', (e) => {
    for (let i = 1; i <= checkList.length - 1; i++) {
        if (e.target.tagName === 'INPUT') {
            if (e.target === checkList[0] && checkList[0].checked) {
                checkList[i].checked = true;
            } else if (e.target === checkList[0]) {
                checkList[i].checked = false;
            } else {
                checkList[0].checked = false;
            }
        }
    }
});     // 개인정보 약관 동의

// cardSelect[0].addEventListener('click', (e) => {
//     if (e.target.value != 0) {
//         cardSelect[1].style.backgroundColor = "white";
//         cardSelect[1].style.color = "#353535";
//         cardSelect[1].disabled = false;
//     } else {
//         cardSelect[1].style.backgroundColor = "#f5f5f5";
//         cardSelect[1].style.color = "#bdbdbd";
//         cardSelect[1].disabled = true;
//     }
// });     // 반려동물 정보 탭