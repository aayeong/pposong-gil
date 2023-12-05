//북마크 버튼 클릭 이벤트
function toggleBookmark() {
    const bottomBox = document.querySelector('.bottom');
    bottomBox.classList.toggle('active');
    bottomBox.classList.remove('initial');
}

// 북마크 버튼 클릭 시 화면 하단 bottom 박스에 bookmark.html 내용 fetch
document.querySelector('.bookmark-btn').addEventListener('click', function() {
    fetch('bookmark.html')
      .then(response => response.text())
      .then(data => {
        // 가져온 HTML을 파싱하여 DOM으로 변환
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, 'text/html');
        // 원하는 요소를 가져오기 위해 해당 선택자로 요소 추출
        const extractedElement = htmlDocument.querySelector('.bookmark-screen');
        // 현재 페이지에 추출한 요소를 삽입
        document.querySelector('.bottom').appendChild(extractedElement);
      })
      .catch(error => {
        console.error('Error.', error);
      });
  });
  


/*
import {getTimeStamp} from "js/cal_time.js";
window.TimeButton = getTimeStamp(4);
// 시간당 강수량 버튼 시간 계산
const timeNavBtns = document.querySelectorAll('.time-nav__btn');
for (let i = 0; i < timeNavBtns.length; i++) {
    timeNavBtns[i].innerText = window.TimeButton[i];
}
*/