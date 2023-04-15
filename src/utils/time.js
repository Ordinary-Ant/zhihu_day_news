function getToday() {
  const today = new Date()
    .toLocaleString()
    .split(" ")[0]
    .match(/^(.*?)\/(.*?)\/(.*?)$/);
  return today.slice(1);
}

function getChineseMonth(m) {
  const month = [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二",
  ];
  return month[m - 1] + "月";
}

function formatDate(date) {
  const month_and_day = date.slice(4),
    time = month_and_day.slice(0, 2) + "月 " + month_and_day.slice(2) + "日";
  return time;
}

export { getToday, getChineseMonth, formatDate };
