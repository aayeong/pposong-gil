import {getTimeStamp} from "js/cal_time.js";
window.TimeButton = getTimeStamp(4);
// 시간당 강수량 버튼 시간 계산
const timeNavBtns = document.querySelectorAll('.time-nav__btn');
for (let i = 0; i < timeNavBtns.length; i++) {
    timeNavBtns[i].innerText = window.TimeButton[i];
}
