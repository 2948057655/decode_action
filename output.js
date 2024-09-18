//Wed Sep 18 2024 05:26:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    checkCk,
    User_Agent,
    getUserInfo,
    tryCatchPromise,
    couponNotify,
    getCookies,
    commonRequest
  } = require("./common.js"),
  request = require("request"),
  moment = require("moment"),
  couponExpiryDelay = 11,
  couponValue = "20",
  beforeTime = process.env.BEFORE_TIME || 500;
const betweenTime = process.env.BETWEEN_TIME || 200,
  delay = _0x1a2dc7 => {
    return new Promise(_0x2102f3 => {
      setTimeout(() => {
        _0x2102f3();
      }, _0x1a2dc7);
    });
  };
function calculateStartTime(_0x597908) {
  const _0x1a0f73 = moment(_0x597908).startOf("day"),
    _0x366692 = {
      hour: 10,
      minute: 0,
      second: 0,
      millisecond: 0
    };
  const _0x140f0f = _0x1a0f73.clone().set(_0x366692),
    _0x732ab4 = moment(_0x597908).isAfter(_0x140f0f);
  _0x732ab4 && _0x140f0f.add(1, "day");
  _0x140f0f.set(_0x366692);
  return _0x140f0f.valueOf();
}
async function getCouponInfo(_0x5935f9) {
  const _0x3a88cc = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };
  try {
    let _0x24f85c = await commonRequest(_0x5935f9, JSON.stringify(_0x3a88cc), "mtop.alsc.playgame.mini.game.dispatch", couponExpiryDelay);
    return _0x24f85c.data;
  } catch (_0x29c352) {
    console.log(_0x29c352);
    return null;
  }
}
async function exchangeCoupon(_0x5591e2, _0x108fde) {
  const _0x6ff1e7 = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    bizScene: "game_center",
    longitude: "116.405289",
    latitude: "39.904987"
  };
  try {
    const _0x5e93b1 = await commonRequest(_0x5591e2, JSON.stringify(_0x6ff1e7), "mtop.koubei.interactioncenter.platform.right.exchangelist", couponExpiryDelay);
    if (_0x5e93b1.data) {
      const _0x58de28 = [],
        _0x37005c = _0x5e93b1.data.data.rightInfoList;
      for (let _0xe8fd38 = 0; _0xe8fd38 < _0x37005c.length; _0xe8fd38++) {
        const _0x3ee245 = _0x37005c[_0xe8fd38],
          _0x10b168 = {
            rightName: _0x3ee245.rightName,
            rightId: _0x3ee245.rightId
          };
        _0x58de28.push(_0x10b168);
      }
      return _0x58de28;
    }
    return _0x5e93b1;
  } catch (_0x2a3300) {
    console.log(_0x2a3300);
    return null;
  }
}
function getTimestamp() {
  const _0x300b19 = {
    "User-Agent": User_Agent
  };
  const _0x3fa1bc = {
    url: "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
    method: "GET",
    headers: _0x300b19
  };
  return tryCatchPromise(async _0x454352 => {
    request(_0x3fa1bc, async (_0x45c277, _0xdb4c39, _0x50cff3) => {
      if (!_0x45c277 && _0xdb4c39.statusCode === 200) {
        try {
          const _0x3f5cf9 = JSON.parse(_0x50cff3);
          if (_0x3f5cf9.data) {
            _0x454352(_0x3f5cf9.data.t);
          } else {
            _0x454352(null);
          }
        } catch (_0x246aea) {
          _0x454352(null);
        }
      } else {
        _0x454352(null);
      }
    });
  });
}
async function performCouponExchange(_0x2a12f6, _0x2fb108, _0x2e34e6) {
  const _0x217725 = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    copyId: _0x2fb108,
    bizScene: "game_center",
    channel: "abcd",
    asac: "2A22C0239QW1FOL3UUQY7U"
  };
  try {
    const _0x3bf8ef = await commonRequest(_0x2a12f6, JSON.stringify(_0x217725), "mtop.koubei.interactioncenter.platform.right.exchange.v2", couponExpiryDelay);
    console.log(JSON.stringify(_0x3bf8ef));
    _0x3bf8ef.data.data && (console.log("Coupon grabbed successfully, received: " + _0x3bf8ef.data.data[0].rightName), await couponNotify(_0x2a12f6, "### Coupon successfully grabbed\nPhone number: " + _0x2e34e6 + "\nCoupon grabbed: " + _0x3bf8ef.data.data[0].rightName), process.exit(0));
  } catch (_0x2415b9) {
    process.exit(0);
    console.log(_0x2415b9);
  }
}
async function initiateCouponGrab() {
  const _0x4edc79 = getCookies("elmqqck");
  for (let _0x344b6e = 0; _0x344b6e < _0x4edc79.length; _0x344b6e++) {
    let _0x34f3f8 = _0x4edc79[_0x344b6e];
    _0x34f3f8 = await checkCk(_0x34f3f8, _0x344b6e);
    !_0x34f3f8 && process.exit(0);
    let _0x3d631a = await getUserInfo(_0x34f3f8);
    !_0x3d631a.username && (console.log("Account", _0x344b6e + 1, "expired! Please log in again! 😭"), process.exit(0));
    const _0x588c59 = _0x3d631a.user_id;
    let _0x1f9e24 = _0x3d631a.mobile;
    console.log("****** #" + (_0x344b6e + 1), _0x1f9e24, "*********");
    console.log("Account id:", _0x588c59);
    let _0xb9027c = await getCouponInfo(_0x34f3f8),
      _0x53b08c = -1;
    _0xb9027c.data ? _0x53b08c = JSON.parse(_0xb9027c.data).num : _0x53b08c = -1;
    if (_0x53b08c !== -1) {
      if (couponValue === "20" && _0x53b08c < 13999) {
        console.log("Not enough gold to exchange for a 20 yuan coupon, program ending");
        process.exit(0);
      } else {
        couponValue === "12" && _0x53b08c < 8999 && (console.log("Not enough gold to exchange for a 12 yuan coupon, program ending"), process.exit(0));
      }
    }
    const _0x24590e = await exchangeCoupon(_0x34f3f8, _0x1f9e24);
    if (_0x24590e.length === 0) {
      console.log("无券");
      process.exit(0);
    }
    const _0x1cdc17 = _0x24590e[_0x24590e.length - 1],
      _0x5f231e = _0x1cdc17.rightName,
      _0x299817 = _0x1cdc17.rightId;
    _0x5f231e === "5元现金抵扣券" && (console.log("5券不执行"), process.exit(0));
    console.log("Right Name:", _0x5f231e);
    console.log("Right ID:", _0x299817);
    let _0x223ac7 = await getTimestamp();
    !_0x223ac7 && (_0x223ac7 = new Date().getTime());
    let _0x13427f = calculateStartTime(Number(_0x223ac7)),
      _0x15e6a4 = _0x13427f - _0x223ac7 - beforeTime;
    console.log("Program will start grabbing coupon in", _0x15e6a4 / 1000, "seconds");
    setTimeout(async () => {
      handleCouponFailure();
      console.log("Start grabbing " + couponValue + " yuan coupon, " + "Id: " + _0x299817);
      while (true) {
        await performCouponExchange(_0x34f3f8, _0x299817, _0x1f9e24);
        await delay(betweenTime);
      }
    }, _0x15e6a4);
  }
}
function handleCouponFailure() {
  setTimeout(async () => {
    console.log("Coupon grabbing failed, the results may be inaccurate. Please use the check coupon script to obtain accurate results");
    process.exit(0);
  }, 20000);
}
initiateCouponGrab();