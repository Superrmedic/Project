'use strict';

const joinContainer = document.querySelector('.joinContainer'),
    inputJoin = joinContainer.getElementsByTagName('input'),
    checkBox = document.querySelector('.agree'),
    checkList = checkBox.getElementsByTagName('input'),
    petInfoBox = document.querySelector('.petInfoCover'),
    [dogSelct, catSelect] = petInfoBox.getElementsByTagName('select');


function checkAlert(check, input) {
    if (!check.test(input.value)) {
        input.style.borderBottom = "1px solid rgb(182, 182, 182)";
        // 맞을 때
    } else {
        input.style.borderBottom = "1px solid red";
        // 아닐 때
    }
}       // 유효성 검사 style 함수

let password = '';
for (let i = 0; i < inputJoin.length; i++) {
    inputJoin[i].addEventListener('input', (e) => {
        let eventObj = e.target,
            checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,   // 한글만
            checkNum = /[0-9]+$/,       // 숫자만
            checkkorEng = /[a-z|A-Z|ㄱ-ㅎ|가-힣]/,      // 한글 영어만
            pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

        if (eventObj.name === 'id') {
            checkAlert(checkKor, eventObj);
        } else if (eventObj.name === 'name') {
            checkAlert(checkNum, eventObj);
        } else if (eventObj.name === 'email') {
            checkAlert(checkKor, eventObj);
        } else if (eventObj.name === 'phone2' || eventObj.name === 'phone3') {
            checkAlert(checkkorEng, eventObj);
        } else if (eventObj.name === 'password') {
            if (!!pwdCheck.test(eventObj.value)) {
                if (eventObj.value.length >= 10) {
                    password = eventObj.value;
                    eventObj.style.borderBottom = "1px solid rgb(182, 182, 182)";
                }
            } else {
                eventObj.style.border = "1px solid red";
            }
        } else if (eventObj.name === 'passwordConfirm') {
            if (password == eventObj.value) {
                eventObj.style.borderBottom = "1px solid rgb(182, 182, 182)";
            } else {
                eventObj.style.borderBottom = "1px solid red";
            }
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

petInfoBox.addEventListener('click', (e) => {
    if (e.target.id === 'dog') {
        dogSelct.style.display = 'block';
        catSelect.style.display = 'none';
    } else if (e.target.id === 'cat') {
        catSelect.style.display = 'block';
        dogSelct.style.display = 'none';
    }
});     // 반려동물 선택

