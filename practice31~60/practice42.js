const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = 8;
const date = 16;

// 날짜입력하면 요일 출력되도록 로직 작성

const getDate = (a, b) => {
  // new Date method 사용
  const getDay = new Date(`2021-${a}-${b}`);
  console.log(day[getDay.getDay()]); //getDay()은 요일을 숫자로 반환한다.
};

getDate(month, date);
