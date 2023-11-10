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

let seats = [];
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
const createSeats = () => {};
