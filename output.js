//Wed Jun 04 2025 15:32:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
delete __filename;
delete __dirname;
ActiveXObject = undefined;
window = global;
content = "content_code";
navigator = {
  "platform": "Linux aarch64"
};
navigator = {
  "userAgent": "CtClient;11.0.0;Android;13;22081212C;NTIyMTcw!#!MTUzNzY"
};
location = {
  "href": "https://",
  "origin": "",
  "protocol": "",
  "host": "",
  "hostname": "",
  "port": "",
  "pathname": "",
  "search": "",
  "hash": ""
};
i = {
  length: 0
};
base = {
  length: 0
};
div = {
  getElementsByTagName: function (res) {
    console.log("div\u4E2D\u7684getElementsByTagName\uFF1A", res);
    if (res === "i") {
      return i;
    }
    return "<div></div>";
  }
};
script = {};
meta = [{
  charset: "UTF-8"
}, {
  content: content,
  getAttribute: function (res) {
    console.log("meta\u4E2D\u7684getAttribute\uFF1A", res);
    if (res === "r") {
      return "m";
    }
  },
  parentNode: {
    removeChild: function (res) {
      console.log("meta\u4E2D\u7684removeChild\uFF1A", res);
      return content;
    }
  }
}];
form = "<form></form>";
window.addEventListener = function (res) {
  console.log("window\u4E2D\u7684addEventListener:", res);
};
document = {
  createElement: function (res) {
    console.log("document\u4E2D\u7684createElement\uFF1A", res);
    if (res === "div") {
      return div;
    } else if (res === "form") {
      return form;
    } else {
      return res;
    }
  },
  addEventListener: function (res) {
    console.log("document\u4E2D\u7684addEventListener:", res);
  },
  appendChild: function (res) {
    console.log("document\u4E2D\u7684appendChild\uFF1A", res);
    return res;
  },
  removeChild: function (res) {
    console.log("document\u4E2D\u7684removeChild\uFF1A", res);
  },
  getElementsByTagName: function (res) {
    console.log("document\u4E2D\u7684getElementsByTagName\uFF1A", res);
    if (res === "script") {
      return script;
    }
    if (res === "meta") {
      return meta;
    }
    if (res === "base") {
      return base;
    }
  },
  getElementById: function (res) {
    console.log("document\u4E2D\u7684getElementById\uFF1A", res);
    if (res === "root-hammerhead-shadow-ui") {
      return null;
    }
  }
};
setInterval = function () {};
setTimeout = function () {};
window.top = window;
"ts_code";
function main() {
  cookie = document.cookie.split(";")[0];
  return cookie;
}