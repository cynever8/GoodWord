var nowTime = "2018-09-11 13:50:52";

var thisTime = nowTime;
thisTime = thisTime.replace(/-g/, "/");// 将-改为/
console.log("thisTime", thisTime)
var time = new Date(thisTime);
time = time.getTime()
console.log('time',time);