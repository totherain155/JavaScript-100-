const 버스시간 = ["12:30", "13:20", "14:13"];
const 기준시간 = "12:40";

// "12:40"

const solution = (버스시간, 기준시간) => {
  let answer = [];
  기준시간 = 기준시간.split(":").map((n) => Number(n));
  // 기준시간은 분으로만 표기된다.
  기준시간 = 기준시간[0] * 60 + 기준시간[1];
  for (let i of 버스시간) {
    console.log(i);
    let time = i.split(":").map((n) => Number(n));
    time = time[0] * 60 + time[1];
    console.log(time);
    if (time < 기준시간) {
      answer.push("지나갔습니다.");
    } else {
      let 시간 = parseInt((time - 기준시간) / 60, 10);
      let 분 = parseInt((time - 기준시간) % 60, 10);
      answer.push(
        String(시간).padStart(2, 0) + "시간 " + String(분).padStart(2, 0) + "분"
      );
    }
  }
  return answer;
};

console.log(solution(버스시간, 기준시간));
