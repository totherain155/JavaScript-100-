const theDate = new Date();
const timeSinceThen = theDate.getTime();

//1970년부터 흐른 ms를 연단위로 환산해야 한다.
//1년에 몇 ms인지 알아내야 한다.

console.log(Math.floor(timeSinceThen / (60 * 60 * 24 * 365 * 1000)) + 1970);
