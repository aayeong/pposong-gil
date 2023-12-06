/*북마크 기능 */
function toggleBookmark() { //북마크 버튼 클릭 시 아이콘 효과
    const bottomBox = document.querySelector('.bottom');
    const bookmarkIcon = document.querySelector('.fa-bookmark');
    bottomBox.classList.toggle('active');
    bottomBox.classList.remove('initial');
    bookmarkIcon.classList.toggle('active');
}
// 북마크 버튼 클릭 시 화면 하단 bottom 박스에 bookmark.html 내용 fetch
document.querySelector('.bookmark-btn').addEventListener('click', function() {
    fetch('bookmark.html')
      .then(response => response.text())
      .then(data => {
        //초기화(이전에 추가된 요소 제거)
        const elementToDelete = document.querySelector('.bookmark-screen'); // 여기서 '#myElement'는 삭제하려는 요소의 ID나 다른 CSS 선택자일 수 있습니다.
        if (elementToDelete) {
        elementToDelete.remove();
        }
        // 가져온 HTML을 파싱하여 DOM으로 변환
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, 'text/html');
        // 원하는 요소를 가져오기 위해 해당 선택자로 요소 추출
        const extractedElement = htmlDocument.querySelector('.bookmark-screen');
        // 추출한 요소 삽입
        document.querySelector('.bottom').appendChild(extractedElement);
      })
      .catch(error => {
        console.error('Error.', error);
      });
  });

/* 현재 위치에 마크업 및 포커스 기능*/
let marker = null;
function showLocation() {
  // 위치 버튼 클릭 시 아이콘 효과
  const locationIcon = document.querySelector('.fa-location-crosshairs');
  locationIcon.classList.toggle('active');
  const locationIconClicked = locationIcon.classList.contains('active');

  // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다       
        // 마커를 표시합니다
        displayMarker(locPosition);
      });
    
  } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치를 설정합니다
    var locPosition = new kakao.maps.LatLng(37.566826, 126.9786567)
    displayMarker(locPosition);
  }
  //지도 위 마커 표시 함수
  function displayMarker(locPosition) { 
    // 재클릭시 마크업 제거 및 지도 중심 좌표 서울 중심좌표로 변경
    if(marker) { 
      var seoulCenter = new kakao.maps.LatLng(37.566826, 126.9786567);
      map.setCenter(seoulCenter);
      marker.setMap(null);
      marker = null;
      return;
    }
    // 현위치에 마커 생성
    marker = new kakao.maps.Marker({  
      map: map, 
      position: locPosition
    });
    // 지도 중심좌표를 현위치로 변경
    map.setCenter(locPosition);
  }

}

/*
import {getTimeStamp} from "js/cal_time.js";
window.TimeButton = getTimeStamp(4);
// 시간당 강수량 버튼 시간 계산
const timeNavBtns = document.querySelectorAll('.time-nav__btn');
for (let i = 0; i < timeNavBtns.length; i++) {
    timeNavBtns[i].innerText = window.TimeButton[i];
}
*/