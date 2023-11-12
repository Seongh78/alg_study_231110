/**
 * app.js
 */

/*

문제>
영화관 좌석예매 시스템

개요>
본 시스템은 영화관 좌석예매 시스템으로 사용자가 관람할 좌석을 GUI로 선택하거나 취소할수 있는 시스템이다.
좌석을 선택한 후 예약완료를 누르면 해당 자리는 선택이 불가능해야 한다.

필수 요구사항>
1. 좌석 선택(클릭) 시 선택된 항목은 기존 좌석과 다르게 표시되어야 한다.
2. 선택 된 좌석은 다시 클릭 시 선택 취소가 가능해야 한다.
3. 예약완료 시 선택된 좌석은 선택 불가능한 상태로 변경되어야 한다.

비고>
좌석정보 초기값( 0: 통로, 1: 예약가능 좌석, 2: 예약완료 좌석, 3: 선택불가 좌석)

*/

let seats = [
  [1,1,0,1,1,0,0,0,0,1,1,0,1,1],
  [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
  [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
  [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
  [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
  [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
  [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
  [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
];
let app = document.getElementById('app');
let seatsDiv = document.getElementById('seats');
let selectedSeatsDiv = document.getElementById('selected_seats');
let selectedSeats = [];

/**
 * onLoad
 */
const onLoad = () => {
  createSeats();
};

/**
 * 좌석생성
 */
const createSeats = () => {
  let container = document.createElement('div');
  let newSeat;

  seatsDiv.innerHTML = '';
  container.classList.add('line');

  // #1
  seats.map(function(xSeats, x) {
    // #2
    xSeats.map(function(ySeat, y){
      // 좌석 그리기
      newSeat = document.createElement('div');
      // 좌석 값 설정
      let style = '';
      if(ySeat === 1){
        style = 'enable';
      }else if(ySeat === 2){
        style = 'disable';
      }else if(ySeat === 3){
        style = 'soldout';
      }

      // 스타일값 여부에 따라 스타일 적용
      if(style){
        newSeat.classList.add('seat', style);
      }else {
        newSeat.classList.add('seat');
      }

      
      if(style === 'enable'){
        newSeat.addEventListener('click', handleClickSeat)
      }
      newSeat.data = {x, y, value: ySeat}
      // 줄에 좌석 추가
      container.appendChild(newSeat);
    });// #2
  }); // #1
  // 줄 추가
  seatsDiv.appendChild(container);
};


/**
 * 좌석 클릭함수
 * --
 */
const handleClickSeat = (event) => {
  let {x, y, value} = event.target.data
  // alert(seats[x][y]);
  if(value === 1){
    seats[x][y] = 2;
    event.target.classList.toggle('disable')
  }else if(value === 2){
    seats[x][y] = 1;
    event.target.classList.toggle('disable')
  }
  createSeats();
}