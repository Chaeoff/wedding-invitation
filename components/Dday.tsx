export const Dday = () => {
  function timeConverter(time: number) {
    let timeLeft = { days: "", hours: "", minutes: "", seconds: "" };
    if (time > 0) {
      timeLeft = {
        days: Math.floor(time / (1000 * 60 * 60 * 24)).toString(),
        hours:
          Math.floor((time / (1000 * 60 * 60)) % 24) >= 10
            ? Math.floor((time / (1000 * 60 * 60)) % 24).toString()
            : "0" + Math.floor((time / (1000 * 60 * 60)) % 24).toString(),
        minutes:
          Math.floor((time / 1000 / 60) % 60) >= 10
            ? Math.floor((time / 1000 / 60) % 60).toString()
            : "0" + Math.floor((time / 1000 / 60) % 60),
        seconds:
          Math.floor((time / 1000) % 60) >= 10
            ? Math.floor((time / 1000) % 60).toString()
            : "0" + Math.floor((time / 1000) % 60),
      };
    }
    const remaining = `${timeLeft.days}일 ${timeLeft.hours}시간 ${timeLeft.minutes}분 ${timeLeft.seconds}초`;
    return remaining;
  }

  let today = new Date().getTime(), //현재 날짜 가져오기
    dday = new Date("May, 07, 2023, 00:00:00").getTime(), //디데이
    gap = dday - today,
    result = Math.floor(gap / (1000 * 60 * 60 * 24));
  console.log(gap);
  return gap > 0 ? (
    <div>{result < 1 ? "D-day!" : `결혼까지 ${result + 1}일`}</div>
  ) : null;
};
