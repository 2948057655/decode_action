//Wed Jun 04 2025 15:04:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function _calMyqlChar(_0x288532) {
  if (!_0x288532) {
    return 0;
  }
  let _0x1c4d65 = _0x288532.split("");
  let _0x256e6c = 0;
  for (var _0x2aa553 in _0x1c4d65) {
    _0x256e6c += _0x1c4d65[_0x2aa553].charCodeAt();
  }
  return _0x256e6c;
}
function _getMyqlcRealStr(_0x34fa8c) {
  if (!_0x34fa8c) {
    return null;
  }
  const _0x18e33e = "s8db41whij9xzn0pa3q5u7glmyof2ret6vck";
  let _0x431ef5 = "";
  let _0x154aca = _0x34fa8c.split("");
  for (var _0x2ab800 in _0x154aca) {
    let _0x4f6dc9 = _0x18e33e.indexOf(_0x154aca[_0x2ab800]);
    if (_0x4f6dc9 < 0 || _0x4f6dc9 > _0x18e33e.length) {
      return null;
    }
    if (_0x4f6dc9 < 10) {
      _0x431ef5 = _0x431ef5 + _0x4f6dc9 + "";
    } else {
      _0x4f6dc9 = _0x4f6dc9 + 97 - 10;
      _0x431ef5 = _0x431ef5 + String.fromCharCode(_0x4f6dc9);
    }
  }
  return _0x431ef5;
}
function getQmExpireDate(_0xabfcb9, _0x11e74c) {
  try {
    const _0x4db4c1 = [88239, 54342, 52312, 7212, 2356, 23256, 34353, 41515, 24124, 32323];
    let _0x593451 = _getMyqlcRealStr(_0xabfcb9);
    let _0x11f8f1 = parseInt(_0x593451.substring(11, 12));
    if (_calMyqlChar(_0x593451.substring(0, 12)) % 10 != parseInt(_0x593451.substring(12, 13))) {
      return false;
    }
    let _0x4e3c61 = parseInt(_0x593451.substring(0, 1));
    if (_0x11e74c && _0x11e74c != _0x4e3c61) {
      return false;
    }
    let _0x549570 = parseInt(_0x593451.substring(1, 4) + _0x593451.substring(8, 11)) - _0x4db4c1[_0x4e3c61 - 1] - _0x11f8f1 + "";
    let _0x2b1d36 = "20" + _0x549570.substring(0, 2) + "/" + _0x549570.substring(2, 4) + "/" + _0x549570.substring(4, 6) + " " + "23:59:59";
    if (new Date(_0x2b1d36).getTime() < new Date().getTime()) {
      return false;
    } else {
      return true;
    }
  } catch (_0x2dd9ed) {
    return false;
  }
}
_0xodZ = "jsjiami.com.v6";