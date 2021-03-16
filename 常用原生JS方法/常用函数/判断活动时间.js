// 输入时间判断活动状态
function handleDate(startTime, endTime) {
  let newDate = new Date().getTime(); // 当前时间戳
  let startDate = new Date(startTime).getTime(); // 开始时间戳
  let endDate = new Date(endTime).getTime(); // 结束时间戳

  if (newDate <= startDate) {
    console.log("活动未开始");
    return false;
  } else if (startDate <= newDate && newDate <= endDate) {
    console.log("活动中");
    return true;
  } else if (endDate <= newDate) {
    console.log("活动已结束");
    return false;
  }
}
handleDate("2020/12/29 13:45:00", "2020/12/29 13:46:30");
