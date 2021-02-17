/*
 * @Date: 2021-01-22 15:52:24
 * @LastEditors: 王一丁
 * @LastEditTime: 2021-02-15 18:40:25
 * @annotation: 文件名
 */
/**
 * @description:
 * @param {*} idCard : 412801199703260311
 * @return {*}
 */
// 获取出生年月日
function getBirth(idCard) {
  var birthday = "";
  if (idCard != null && idCard != "") {
    if (idCard.length == 15) {
      birthday = "19" + idCard.slice(6, 12);
    } else if (idCard.length == 18) {
      birthday = idCard.slice(6, 14);
    }
    birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
    //通过正则表达式来指定输出格式为:1990-01-01
  }
  return birthday;
}
/**
 * @description:
 * @param {*} idCard : 412801199703260311
 * @return {*}
 */
// 获取性别
function getSex(idCard) {
  var sexStr = "";
  if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
    sexStr = "1"; //男
  } else {
    sexStr = "2"; //女
  }
  return sexStr;
}
/**
 * @description:
 * @param {*} idCard : 19970326
 * @return {*}
 */
function getAgeByPid(strBirthday) {
  let birthYear = strBirthday.substr(0, 4);
  let birthMonth = strBirthday.substr(4, 2);
  let birthDay = strBirthday.substr(6, 2);

  let d = new Date();
  let nowYear = d.getFullYear();
  let nowMonth = d.getMonth() + 1;
  let nowDay = d.getDate();
  let returnAge;
  if (nowYear == birthYear) {
    returnAge = 0; //同年 则为0岁
  } else {
    let ageDiff = nowYear - birthYear; //年之差
    if (ageDiff > 0) {
      if (nowMonth == birthMonth) {
        let dayDiff = nowDay - birthDay; //日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      } else {
        let monthDiff = nowMonth - birthMonth; //月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      }
    } else {
      returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
    }
  }
  return returnAge; //返回周岁年龄
}
function GetAge(identityCard) {
  var len = (identityCard + "").length;
  if (len == 0) {
    return 0;
  } else {
    if (len != 15 && len != 18) {
      //身份证号码只能为15位或18位其它不合法
      return 0;
    }
  }
  var strBirthday = "";
  if (len == 18) {
    //处理18位的身份证号码从号码中得到生日和性别代码
    strBirthday =
      identityCard.substr(6, 4) +
      "/" +
      identityCard.substr(10, 2) +
      "/" +
      identityCard.substr(12, 2);
  }
  if (len == 15) {
    strBirthday =
      "19" +
      identityCard.substr(6, 2) +
      "/" +
      identityCard.substr(8, 2) +
      "/" +
      identityCard.substr(10, 2);
  }
  //时间字符串里，必须是“/”
  var birthDate = new Date(strBirthday);
  var nowDateTime = new Date();
  var age = nowDateTime.getFullYear() - birthDate.getFullYear();
  //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
  if (
    nowDateTime.getMonth() < birthDate.getMonth() ||
    (nowDateTime.getMonth() == birthDate.getMonth() &&
      nowDateTime.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
