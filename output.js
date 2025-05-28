//Wed May 28 2025 06:03:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
const smashUtils = require("./jdJm.js").smashUtils;
const USER_AGENTS = ["jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;9;network/4g;Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;android;10.1.0;9;network/wifi;Mozilla/5.0 (Linux; Android 9; 16T Build/PKQ1.190616.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;13.6;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.6;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.5;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.7;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;13.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;9;network/wifi;Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;android;10.1.0;11;network/wifi;Mozilla/5.0 (Linux; Android 11; Redmi K30 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045511 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;11.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79", "jdapp;android;10.1.0;10;;network/wifi;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36", "jdapp;android;10.1.0;9;network/wifi;Mozilla/5.0 (Linux; Android 9; MHA-AL00 Build/HUAWEIMHA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;android;10.1.0;8.1.0;network/wifi;Mozilla/5.0 (Linux; Android 8.1.0; 16 X Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;android;10.1.0;8.0.0;network/wifi;Mozilla/5.0 (Linux; Android 8.0.0; HTC U-3w Build/OPR6.170623.013; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.0.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.2;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.2;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;8.1.0;network/wifi;Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Premium Edition Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;iPhone;10.1.0;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", "jdapp;android;10.1.0;11;network/wifi;Mozilla/5.0 (Linux; Android 11; Redmi K20 Pro Premium Edition Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "jdapp;android;10.1.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36", "jdapp;iPhone;10.1.0;14.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"];
function randomNumber(_0x1d4469 = 0, _0x3ed338 = 100) {
  return Math.min(Math.floor(_0x1d4469 + Math.random() * (_0x3ed338 - _0x1d4469)), _0x3ed338);
}
const {
  JSDOM
} = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
  url: "https://www.jd.com"
});
const window = dom.window;
const document = window.document;
window.HTMLCanvasElement.prototype.getContext = function () {
  return {
    fillRect: () => {},
    clearRect: () => {},
    getImageData: () => ({
      data: []
    }),
    putImageData: () => {}
  };
};
global.window = window;
global.document = document;
global.Element = window.Element;
$.CryptoJS = require("crypto-js");
let apiList = $.isNode() ? require("./jdYhqApiList.js").apiList : [];
let notify = "";
let jdNotify = true;
try {
  notify = $.isNode() ? require("./sendNotify") : "";
} catch (_0x29c1bf) {
  jdNotify = false;
  console.log("未发现sendNotify.js文件不会进行通知！");
}
let tryNum = 4;
let maxQq = 20;
let maxXc = 3;
let qqjgTime = 250;
let maxAccount = 8;
let ycTime = 300;
let cookiesArr = [],
  cookie = "";
let canTaskFlag = [];
let TgCkArray = [];
let lqSucArray = [];
let AllEendCode = "|A9|A6|A14|D2|";
let PEendCode = "|A1|A12|A13|A19|A26|";
let JDTimes = new Date().getTime();
let apiArray = [];
let nowIndex = 0;
let JDTimeJg = 0;
let yhqAPiHasSuccess = {};
let nextHour = 0;
let xtTkSign = "";
let ckerror = [];
let removeYhq = [];
let nowRunYhq = "";
let paramsSignLiteMy = "";
try {
  paramsSignLiteMy = new window.ParamsSignLite({
    appId: "35fa0",
    preRequest: !1
  });
} catch (_0x34bcac) {}
if (process.env.YHQ_REMOVE && process.env.YHQ_REMOVE.split(",").length >= 1) {
  if (process.env.YHQ_REMOVE.toLowerCase() == "all") {
    console.log("读取环境变量排除的优惠券为：不抢作者所有的券！");
    apiList = [];
  } else {
    console.log("读取环境变量排除的优惠券为：" + process.env.YHQ_REMOVE);
    removeYhq = process.env.YHQ_REMOVE.split(",");
  }
}
if (process.env.YHQ_NOWRUN) {
  console.log("读取环境变量立即执行优惠券为：" + process.env.YHQ_NOWRUN);
  nowRunYhq = process.env.YHQ_NOWRUN;
}
try {
  const apiListMy = $.isNode() ? require("./jdYhqApiListMy.js").apiList : [];
  if (apiListMy.length > 0) {
    for (var alm in apiListMy) {
      if (apiListMy[alm].qName && apiListMy[alm].qApi && apiListMy[alm].qTime) {
        apiList.push(apiListMy[alm]);
        console.log("加载自定义API:" + apiListMy[alm].qName);
      }
    }
  }
} catch (_0x4dc71f) {
  console.log("未配置自定义API！");
}
if (process.env.YHQ_API && process.env.YHQ_API.indexOf(",") > -1 && process.env.YHQ_API.split(",").length >= 5) {
  console.log("读取环境变量成功：" + process.env.YHQ_API);
  let YHQ_API_ARR = process.env.YHQ_API.split(",");
  tryNum = parseInt(YHQ_API_ARR[0]);
  if (parseInt(YHQ_API_ARR[1]) > maxQq) {
    maxQq = parseInt(YHQ_API_ARR[1]);
  }
  maxXc = parseInt(YHQ_API_ARR[2]);
  qqjgTime = parseInt(YHQ_API_ARR[3]);
  maxAccount = parseInt(YHQ_API_ARR[4]);
  if (YHQ_API_ARR.length >= 6) {
    ycTime = parseInt(YHQ_API_ARR[5]);
  }
}
function myNotice(_0x1957e5) {
  if (jdNotify) {
    notify.sendNotify($.name, _0x1957e5, {}, "\n\n本通知 By：https://github.com/hsdtk/jdYhq");
  }
}
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach(_0x41926d => {
    cookiesArr.push(jdCookieNode[_0x41926d]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
  if (process.env.JDFACTORY_FORBID_ACCOUNT) {
    process.env.JDFACTORY_FORBID_ACCOUNT.split("&").map((_0x6e5c63, _0x1c94d3) => Number(_0x6e5c63) === 0 ? cookiesArr = [] : cookiesArr.splice(Number(_0x6e5c63) - 1 - _0x1c94d3, 1));
  }
} else {
  cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(_0x476aff => _0x476aff.cookie)].filter(_0x58ca6e => !!_0x58ca6e);
}
!(async () => {
  if (process.env.YHQ_QL_SIGN) {
    xtTkSign = process.env.YHQ_QL_SIGN;
  } else {
    console.log("请增加环境变量YHQ_QL_SIGN！");
    myNotice("请增加环境变量YHQ_QL_SIGN！");
    return;
  }
  if (!getQmExpireDate(xtTkSign, 2)) {
    console.log("激活码已过期！");
    myNotice("激活码已过期！");
    return;
  }
  if (!cookiesArr[0]) {
    console.log("【提示】请先增加JD账号一cookie");
    return;
  }
  if (new Date().getDate() == 1 && new Date().getHours() == 0) {
    $.setjson({}, "yhqAPiHasSuccess");
    console.log("清空缓存！");
  }
  nextHour = nextHourF();
  console.log("下次抢券时间：" + nextHour + ":00:00");
  $.user_agent = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];
  for (var _0x29e653 in apiList) {
    if (nowRunYhq && nowRunYhq.length > 0 && nowRunYhq == apiList[_0x29e653].qName) {
      console.log("立即抢券（跑完记得删除或禁用该环境变量）：" + apiList[_0x29e653].qName);
      $.CryptoJS = $.isNode() ? require("crypto-js") : {};
      await requestAlgo();
      apiArray.push(apiList[_0x29e653]);
      doAPIList(apiArray.length - 1);
      continue;
    }
    if (checkYhq(apiList[_0x29e653], nextHour) && !isRemoveYhqF(apiList[_0x29e653]) && apiArray.length < maxQq) {
      apiArray.push(apiList[_0x29e653]);
      console.log("名称：" + apiList[_0x29e653].qName);
    }
  }
  if (apiArray.length <= 0) {
    console.log("没有优惠券需要领取！");
    return;
  }
  if ($.getdata("JDTimeJg") && $.getdata("JDTimeJg") != 0) {
    JDTimeJg = $.getdata("JDTimeJg");
  }
  if ($.getjson("yhqAPiHasSuccess")) {
    yhqAPiHasSuccess = $.getjson("yhqAPiHasSuccess");
  }
  await getJDTime();
  if (JDTimeJg != 0) {
    $.setdata(JDTimeJg, "JDTimeJg");
  }
  let _0x4e5b31 = jgNextHourF() + JDTimeJg - ycTime;
  if (_0x4e5b31 > 600000) {
    console.log(parseInt(_0x4e5b31 / 60 / 1000) + "分后才开始！");
    return;
  }
  if (_0x4e5b31 > 0) {
    console.log(parseInt(_0x4e5b31 / 60 / 1000) + "分后开始任务，请不要结束任务！");
    await $.wait(_0x4e5b31);
  }
  for (let _0xa2745d in apiArray) {
    if (!yhqAPiHasSuccess[apiArray[_0xa2745d].qName]) {
      yhqAPiHasSuccess[apiArray[_0xa2745d].qName] = {};
    }
    doAPIList(_0xa2745d);
  }
  await $.wait(30000);
  for (let _0x437933 in apiArray) {
    let _0x1abbd9 = "";
    if (lqSucArray[_0x437933].length > 0) {
      if (apiArray[_0x437933].qName) {
        _0x1abbd9 += "\n券【" + apiArray[_0x437933].qName + "】";
      }
      _0x1abbd9 += "成功领取的用户有：";
      for (var _0x95e9ee in lqSucArray[_0x437933]) {
        cookie = cookiesArr[lqSucArray[_0x437933][_0x95e9ee]];
        let _0x49ec71 = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        _0x1abbd9 += "\n" + (lqSucArray[_0x437933][_0x95e9ee] + 1) + "、" + _0x49ec71;
      }
      console.log("\n************************\n");
      console.log(_0x1abbd9);
    }
    if (_0x1abbd9) {
      myNotice(_0x1abbd9);
      _0x1abbd9 = "";
    }
  }
  $.setjson(yhqAPiHasSuccess, "yhqAPiHasSuccess");
})().catch(_0x124ff6 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x124ff6 + "!", "");
}).finally(() => {
  $.done();
});
async function doAPIList(_0x3e528e) {
  canTaskFlag[_0x3e528e] = true;
  TgCkArray[_0x3e528e] = [];
  lqSucArray[_0x3e528e] = [];
  for (let _0x2065e7 = 1; _0x2065e7 <= tryNum; _0x2065e7++) {
    if (canTaskFlag[_0x3e528e] && TgCkArray[_0x3e528e].length < cookiesArr.length && TgCkArray[_0x3e528e].length < maxAccount) {
      console.log("\n\n***开始领券【" + apiArray[_0x3e528e].qName + "】第" + _0x2065e7 + "次请求***");
      for (let _0x315d4e = 0; _0x315d4e < cookiesArr.length && _0x315d4e < maxAccount; _0x315d4e++) {
        let _0x4697e8 = apiArray[_0x3e528e].ckIndex ? apiArray[_0x3e528e].ckIndex : 0;
        if (_0x4697e8 > 0) {
          if (_0x315d4e + 1 < _0x4697e8) {
            continue;
          } else {
            if (_0x315d4e + 1 > _0x4697e8) {
              break;
            } else {
              console.log("开始执行账号" + _0x4697e8 + "专属ck:");
            }
          }
        }
        if (canTaskFlag[_0x3e528e]) {
          if (cookiesArr[_0x315d4e]) {
            let _0x1fa840 = decodeURIComponent(cookiesArr[_0x315d4e].match(/pt_pin=([^; ]+)(?=;?)/) && cookiesArr[_0x315d4e].match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            if (TgCkArray[_0x3e528e].includes(_0x315d4e)) {
              console.log("\n\n跳过账号" + (_0x315d4e + 1) + ":" + _0x1fa840 + "！");
              continue;
            }
            try {
              if (yhqAPiHasSuccess[apiArray[_0x3e528e].qName][_0x1fa840] && nextHour != 0) {
                let _0x96245d = getNowDate();
                if (DateDiff(_0x96245d, yhqAPiHasSuccess[apiArray[_0x3e528e].qName][_0x1fa840]) < apiArray[_0x3e528e].lqSpace) {
                  console.log("\n\n其他时间领取成功跳过账号" + (_0x315d4e + 1) + ":" + _0x1fa840 + "！");
                  TgCkArray[_0x3e528e].push(_0x315d4e);
                  continue;
                }
              }
            } catch (_0x41de98) {}
            nowIndex++;
            if (nowIndex >= maxXc) {
              if (nowIndex % maxXc == 0) {
                await $.wait(qqjgTime - 20);
              } else {
                await $.wait(10);
              }
            }
            doApiTask(_0x3e528e, _0x315d4e);
          }
        } else {
          console.log("该券已无或者无账号需要请求！");
          break;
        }
      }
    } else {
      break;
    }
  }
}
async function doApiTask(_0x2d46bd, _0x43a3f8) {
  console.log("\n\n" + nowIndex + "、" + timeFormat() + (":开始领取" + apiArray[_0x2d46bd].qName + "_账号" + (_0x43a3f8 + 1)));
  return new Promise(async _0xc7d787 => {
    if (canTaskFlag[_0x2d46bd]) {
      if (apiArray[_0x2d46bd].qName.indexOf("G") > -1 || apiArray[_0x2d46bd].qApi.indexOf("https://s.m.jd.com") > -1 || apiArray[_0x2d46bd].qApi.indexOf("h5_awake_wxapp") > -1) {
        const _0x38c269 = await getApiUrlGet(_0x2d46bd, _0x43a3f8);
        $.get(_0x38c269, (_0x49de16, _0x3b163c, _0x43c87c) => {
          try {
            if (_0x49de16) {
              console.log("API请求失败，请检查网络重试");
            } else {
              cookie = cookiesArr[_0x43a3f8];
              let _0x1c37e3 = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
              console.log("\n\n*" + apiArray[_0x2d46bd].qName + "_【账号" + (_0x43a3f8 + 1) + "】" + _0x1c37e3 + "*");
              console.log(timeFormat() + ":" + _0x43c87c);
              if (_0x43c87c.indexOf("成功") > -1) {
                lqSucArray[_0x2d46bd].push(_0x43a3f8);
                yhqAPiHasSuccess[apiArray[_0x2d46bd].qName][_0x1c37e3] = getNowDate();
              } else {
                if (_0x43c87c.indexOf("再来") > -1 || _0x43c87c.indexOf("抢光") > -1) {
                  canTaskFlag[_0x2d46bd] = false;
                }
              }
            }
          } catch (_0x5dbc8a) {
            TgCkArray[_0x2d46bd].push(_0x43a3f8);
            $.logErr(_0x5dbc8a, _0x3b163c);
          } finally {
            _0xc7d787(_0x43c87c);
          }
        });
      } else {
        const _0x47160b = await getApiUrl(_0x2d46bd, _0x43a3f8);
        $.post(_0x47160b, (_0x5aaad5, _0x185e54, _0x99c222) => {
          try {
            if (_0x5aaad5) {
              console.log("API请求失败，请检查网络重试");
            } else {
              cookie = cookiesArr[_0x43a3f8];
              let _0xffcee3 = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
              console.log("\n\n*" + apiArray[_0x2d46bd].qName + "_【账号" + (_0x43a3f8 + 1) + "】" + _0xffcee3 + "*");
              _0x99c222 = JSON.parse(_0x99c222);
              let _0x575526 = "";
              let _0xf9a8bc = "";
              try {
                _0xf9a8bc = "|" + _0x99c222.subCode + "|";
                _0x575526 = _0x99c222.subCodeMsg || _0x99c222.resultData.msg;
              } catch (_0x5a8d2e) {}
              if (_0x99c222.subCode && (_0x99c222.subCode == "A1" || _0x99c222.subCode == "0") || _0x575526 && _0x575526.indexOf("成功") > -1) {
                lqSucArray[_0x2d46bd].push(_0x43a3f8);
                yhqAPiHasSuccess[apiArray[_0x2d46bd].qName][_0xffcee3] = getNowDate();
              }
              if (AllEendCode.indexOf(_0xf9a8bc) > -1) {
                if (_0x99c222.subCode == "D2" && _0x575526.substr(_0x575526.indexOf("请") + 1, 2) == nextHour) {
                  console.log(timeFormat() + ":时间未到继续：" + _0x575526);
                } else {
                  if (nextHour == 0) {
                    console.log(timeFormat() + ":继续：" + _0x575526);
                  } else {
                    canTaskFlag[_0x2d46bd] = false;
                    console.log(timeFormat() + ":" + _0x575526);
                  }
                }
              } else {
                if (PEendCode.indexOf(_0xf9a8bc) > -1) {
                  TgCkArray[_0x2d46bd].push(_0x43a3f8);
                  console.log(timeFormat() + ":" + _0x575526 + ",subCode2_" + _0xf9a8bc);
                } else {
                  if (_0x99c222.code && _0x99c222.code == "3") {
                    TgCkArray[_0x2d46bd].push(_0x43a3f8);
                    console.log(timeFormat() + ":ck过期！");
                    if (!checkHasCz(ckerror, _0x43a3f8)) {
                      ckerror.push(_0x43a3f8);
                      myNotice("【账号" + (_0x43a3f8 + 1) + "】" + _0xffcee3 + "——ck过期!");
                    }
                  } else {
                    console.log(timeFormat() + ":" + JSON.stringify(_0x99c222));
                  }
                }
              }
            }
          } catch (_0x46780b) {
            TgCkArray[_0x2d46bd].push(_0x43a3f8);
            $.logErr(_0x46780b, _0x185e54);
          } finally {
            _0xc7d787(_0x99c222);
          }
        });
      }
    } else {
      console.log("该券已无或已结束！");
    }
  });
}
function getJDTime() {
  return new Promise(_0x5578c6 => {
    $.post({
      url: "https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5"
    }, async (_0x456f92, _0x32fc22, _0x2dad9f) => {
      try {
        if (_0x456f92) {
          console.log("获取JD时间失败");
        } else {
          _0x2dad9f = JSON.parse(_0x2dad9f);
          if (_0x2dad9f.code && _0x2dad9f.code == "0") {
            JDTimes = parseInt(_0x2dad9f.currentTime2);
            if (JDTimeJg == 0 || JDTimeJg != 0 && new Date().getTime() - JDTimes < JDTimeJg) {
              JDTimeJg = new Date().getTime() - JDTimes;
            }
          }
        }
      } catch (_0x43535d) {
        $.logErr(_0x43535d, _0x32fc22);
      } finally {
        _0x5578c6(_0x2dad9f);
      }
    });
  });
}
function checkYhq(_0x31a25c, _0x4ee3a8) {
  if (!_0x31a25c.endDate) {
    return true;
  }
  if (_0x31a25c.endDate && _0x31a25c.qTime && new Date(_0x31a25c.endDate + " 23:59:59").getTime() > new Date().getTime()) {
    let _0x187278 = _0x31a25c.qTime.split(",");
    if (_0x187278.length > 0 && _0x187278.includes(_0x4ee3a8 + "")) {
      return true;
    }
  }
  return false;
}
function isRemoveYhqF(_0x57cee5) {
  let _0x32e174 = false;
  if (removeYhq && removeYhq.length > 0) {
    for (var _0x23f967 in removeYhq) {
      if (_0x57cee5.qName == removeYhq[_0x23f967]) {
        console.log("排除优惠券：" + _0x57cee5.qName);
        _0x32e174 = true;
        break;
      }
    }
  }
  return _0x32e174;
}
async function getApiUrl(_0x26c596, _0x4c5aa3) {
  const _0x1258be = await getDecryptUrlTy(getApiLog(apiArray[_0x26c596].qApi));
  return {
    url: _0x1258be,
    headers: {
      "user-agent": $.user_agent,
      "content-Type": "application/x-www-form-urlencoded",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "max-age=0",
      "content-length": 0,
      cookie: cookiesArr[_0x4c5aa3]
    }
  };
}
async function getApiUrlGet(_0x1a9783, _0x3c45b8) {
  if (apiArray[_0x1a9783].qApi.indexOf("https://s.m.jd.com") > -1 || apiArray[_0x1a9783].qApi.indexOf("h5_awake_wxapp") > -1) {
    const _0x106d41 = await getDecryptUrlTy(getApiLog(apiArray[_0x1a9783].qApi));
    return {
      url: _0x106d41,
      headers: {
        "User-Agent": $.user_agent,
        Cookie: cookiesArr[0],
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        Referer: "https://coupon.m.jd.com/"
      }
    };
  } else {
    if (apiArray[_0x1a9783].qApi.indexOf("appid=plus_business") > -1) {
      return {
        url: apiArray[_0x1a9783].qApi,
        headers: {
          "User-Agent": $.user_agent,
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          Cookie: cookiesArr[_0x3c45b8]
        }
      };
    } else {
      return {
        url: apiArray[_0x1a9783].qApi,
        headers: {
          "User-Agent": $.user_agent,
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          Cookie: cookiesArr[_0x3c45b8]
        }
      };
    }
  }
}
function jgNextHourF() {
  let _0x578a73 = timeFormat().substr(0, 13) + ":00:00";
  let _0x5b80e5 = Date.parse(new Date(_0x578a73)) + 3600000;
  return _0x5b80e5 - new Date().getTime();
}
function nextHourF() {
  let _0x127cd9 = new Date();
  return _0x127cd9.getHours() + 1 >= 24 ? 0 : _0x127cd9.getHours() + 1;
}
function DateDiff(_0x53d68e, _0x3274b0) {
  var _0x4507ef, _0x264011, _0x3eb988, _0x41a6c9;
  _0x4507ef = _0x53d68e.split("-");
  _0x264011 = new Date(_0x4507ef[1] + "-" + _0x4507ef[2] + "-" + _0x4507ef[0]);
  _0x4507ef = _0x3274b0.split("-");
  _0x3eb988 = new Date(_0x4507ef[1] + "-" + _0x4507ef[2] + "-" + _0x4507ef[0]);
  _0x41a6c9 = parseInt(Math.abs(_0x264011 - _0x3eb988) / 1000 / 60 / 60 / 24);
  return _0x41a6c9;
}
function getNowDate() {
  let _0x40b10c = new Date();
  return _0x40b10c.getFullYear() + "-" + (_0x40b10c.getMonth() + 1 >= 10 ? _0x40b10c.getMonth() + 1 : "0" + (_0x40b10c.getMonth() + 1)) + "-" + (_0x40b10c.getDate() >= 10 ? _0x40b10c.getDate() : "0" + _0x40b10c.getDate());
}
function timeFormat(_0x10afe4) {
  let _0x59dc98;
  if (_0x10afe4) {
    _0x59dc98 = new Date(_0x10afe4);
  } else {
    _0x59dc98 = new Date();
  }
  return _0x59dc98.getFullYear() + "-" + (_0x59dc98.getMonth() + 1 >= 10 ? _0x59dc98.getMonth() + 1 : "0" + (_0x59dc98.getMonth() + 1)) + "-" + (_0x59dc98.getDate() >= 10 ? _0x59dc98.getDate() : "0" + _0x59dc98.getDate()) + " " + (_0x59dc98.getHours() >= 10 ? _0x59dc98.getHours() : "0" + _0x59dc98.getHours()) + ":" + (_0x59dc98.getMinutes() >= 10 ? _0x59dc98.getMinutes() : "0" + _0x59dc98.getMinutes()) + ":" + (_0x59dc98.getSeconds() >= 10 ? _0x59dc98.getSeconds() : "0" + _0x59dc98.getSeconds()) + ":" + _0x59dc98.getMilliseconds();
}
function getApiLog(_0x2f7278) {
  let _0x59240f = smashUtils.getRandom(8);
  let _0x356d4b = (smashUtils.get_risk_result({
    id: "coupon",
    data: {
      random: _0x59240f
    }
  }, xtTkSign) || {}).log;
  let _0x1b0ddd = encodeURIComponent(",\"log\":\"" + _0x356d4b + "\",\"random\":\"" + _0x59240f + "\"");
  if (_0x2f7278 && _0x2f7278.indexOf("%7D") > -1) {
    _0x1b0ddd = _0x2f7278.substring(0, _0x2f7278.indexOf("%7D")) + _0x1b0ddd + _0x2f7278.substring(_0x2f7278.indexOf("%7D"), _0x2f7278.length);
  }
  return _0x1b0ddd;
}
function checkHasCz(_0xd834fa, _0x318f94) {
  let _0x201747 = false;
  if (_0xd834fa) {
    for (var _0x43ad0d in _0xd834fa) {
      if (_0xd834fa[_0x43ad0d] == _0x318f94) {
        _0x201747 = true;
        break;
      }
    }
  }
  return _0x201747;
}
function getUrlQueryParams(_0x1e6a7a, _0x27e23f) {
  let _0x11bdf0 = new RegExp("(^|&)" + _0x27e23f + "=([^&]*)(&|$)", "i");
  let _0x42dc31 = _0x1e6a7a.split("?")[1].substr(0).match(_0x11bdf0);
  if (_0x42dc31 != null) {
    return decodeURIComponent(_0x42dc31[2]);
  }
  return "";
}
function sha256Hash(_0x29817d) {
  const _0x6c8a79 = $.CryptoJS.SHA256($.CryptoJS.enc.Utf8.parse(_0x29817d));
  const _0x30eb36 = _0x6c8a79.toString($.CryptoJS.enc.Hex);
  return _0x30eb36;
}
function getDecryptUrlTy(_0x169f6d) {
  return new Promise((_0x885175, _0x59c047) => {
    let _0x52bc24 = sha256Hash(getUrlQueryParams(_0x169f6d, "body"));
    let _0x3989c5 = {
      appid: "babelh5",
      body: _0x52bc24,
      client: "wh5",
      clientVersion: "1.0.0",
      functionId: "newBabelAwardCollection"
    };
    paramsSignLiteMy.sign(_0x3989c5).then(_0x82ea36 => {
      _0x885175(_0x169f6d + "&h5st=" + _0x82ea36.h5st);
    }).catch(_0x25e4cb => {
      console.error("签名失败:", _0x25e4cb);
      _0x885175(_0x169f6d);
    });
  });
}
function getDecryptUrl(_0x35d589) {
  _0x35d589 = _0x35d589 + "&t=" + Date.now();
  stk = getUrlQueryParams(_0x35d589, "_stk");
  if (stk) {
    const _0x157f2d = format("yyyyMMddhhmmssSSS", Date.now());
    const _0x19d1b9 = $.genKey($.token, $.fp.toString(), _0x157f2d.toString(), $.appId.toString(), $.CryptoJS).toString($.CryptoJS.enc.Hex);
    let _0x1cd4f6 = "";
    stk.split(",").map((_0x2d437d, _0x11e07f) => {
      _0x1cd4f6 += _0x2d437d + ":" + getUrlQueryParams(_0x35d589, _0x2d437d) + (_0x11e07f === stk.split(",").length - 1 ? "" : "&");
    });
    const _0xe0d85f = $.CryptoJS.HmacSHA256(_0x1cd4f6, _0x19d1b9.toString()).toString($.CryptoJS.enc.Hex);
    return _0x35d589 + "&h5st=" + encodeURIComponent(["".concat(_0x157f2d.toString()), "".concat($.fp.toString()), "".concat($.appId.toString()), "".concat($.token), "".concat(_0xe0d85f), "3.0;".concat(_0x157f2d)].join(";")) + "&__t=" + Date.now();
  }
}
async function requestAlgo() {
  $.appId = "8ba9b";
  $.fp = (getRandomIDPro({
    size: 13
  }) + Date.now()).slice(0, 16);
  const _0x28c818 = {
    url: "https://cactus.jd.com/request_algo?g_ty=ajax",
    headers: {
      Authority: "cactus.jd.com",
      Pragma: "no-cache",
      "Cache-Control": "no-cache",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "https://st.jingxi.com",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": $.user_agent,
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: "https://st.jingxi.com/",
      "Accept-Language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7"
    },
    body: JSON.stringify({
      version: "1.0",
      fp: $.fp,
      appId: $.appId,
      timestamp: Date.now(),
      platform: "web",
      expandParams: ""
    })
  };
  return new Promise(async _0x53d378 => {
    $.post(_0x28c818, (_0x65bc8c, _0x5222c8, _0x22237c) => {
      try {
        const {
          ret,
          msg,
          data: {
            result
          } = {}
        } = JSON.parse(_0x22237c);
        $.token = result.tk;
        $.genKey = new Function("return " + result.algo)();
      } catch (_0x40e734) {
        $.logErr(_0x40e734, _0x5222c8);
      } finally {
        _0x53d378();
      }
    });
  });
}
function getRandomIDPro() {
  var _0x2cd0b2,
    _0x1e84bb,
    _0x42ae33 = void 0 === (_0x51f069 = (_0x1e84bb = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).size) ? 10 : _0x51f069,
    _0x51f069 = void 0 === (_0x51f069 = _0x1e84bb.dictType) ? "number" : _0x51f069,
    _0x37db9b = "";
  if ((_0x1e84bb = _0x1e84bb.customDict) && "string" == typeof _0x1e84bb) {
    _0x2cd0b2 = _0x1e84bb;
  } else {
    switch (_0x51f069) {
      case "alphabet":
        _0x2cd0b2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "max":
        _0x2cd0b2 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        break;
      case "number":
      default:
        _0x2cd0b2 = "0123456789";
    }
  }
  for (; _0x42ae33--;) {
    _0x37db9b += _0x2cd0b2[Math.random() * _0x2cd0b2.length | 0];
  }
  return _0x37db9b;
}
function format(_0x275dc2, _0x590d31) {
  if (!_0x275dc2) {
    _0x275dc2 = "yyyy-MM-dd";
  }
  var _0x3d6347;
  if (!_0x590d31) {
    _0x3d6347 = Date.now();
  } else {
    _0x3d6347 = new Date(_0x590d31);
  }
  var _0x50b2da = new Date(_0x3d6347),
    _0x3fb826 = _0x275dc2,
    _0x4af8c7 = {
      "M+": _0x50b2da.getMonth() + 1,
      "d+": _0x50b2da.getDate(),
      "D+": _0x50b2da.getDate(),
      "h+": _0x50b2da.getHours(),
      "H+": _0x50b2da.getHours(),
      "m+": _0x50b2da.getMinutes(),
      "s+": _0x50b2da.getSeconds(),
      "w+": _0x50b2da.getDay(),
      "q+": Math.floor((_0x50b2da.getMonth() + 3) / 3),
      "S+": _0x50b2da.getMilliseconds()
    };
  /(y+)/i.test(_0x3fb826) && (_0x3fb826 = _0x3fb826.replace(RegExp.$1, "".concat(_0x50b2da.getFullYear()).substr(4 - RegExp.$1.length)));
  Object.keys(_0x4af8c7).forEach(_0x2c9705 => {
    if (new RegExp("(".concat(_0x2c9705, ")")).test(_0x3fb826)) {
      var _0x3a682d = "S+" === _0x2c9705 ? "000" : "00";
      _0x3fb826 = _0x3fb826.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4af8c7[_0x2c9705] : "".concat(_0x3a682d).concat(_0x4af8c7[_0x2c9705]).substr("".concat(_0x4af8c7[_0x2c9705]).length));
    }
  });
  return _0x3fb826;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}