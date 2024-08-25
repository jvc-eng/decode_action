//Sun Aug 25 2024 08:13:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var url = $request.url;
const vip = "/api/welfare/list",
  vip1 = "/api/push/list";
if (url.indexOf(vip) != -1) {
  var body = $response.body;
  var jsonBody = JSON.parse(body);
  jsonBody.data && jsonBody.data.length > 1 && (jsonBody.data[1].receive = 1, jsonBody.data[1].vipDay = 14);
  var match = body.match(/shareUserId=(\d+)/);
  if (match && match[1]) {
    var shareUserId = match[1];
    $prefs.setValueForKey(shareUserId, "shareUserId");
  }
  body = JSON.stringify(jsonBody);
  $done(body);
}
if (url.indexOf(vip1) != -1) {
  var storedShareUserId = $prefs.valueForKey("shareUserId");
  const url = "https://dlabel.ctaiot.com/api/user/add_welfare_link.json",
    method = "POST",
    _0x2ce702 = {
      "Sec-Fetch-Dest": "empty",
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkdWRpYW4tYXBwLXNlY3VyaXR5Iiwic3ViIjoiMTg5NzQ5OTY1NTIiLCJhdWQiOiJ1c2VyIiwiZXhwIjoyMDM5NzA0NDY2LCJpYXQiOjE3MjQzNDQ0NjZ9.h9hChzkG53mmmpR8u2G1cdNNdQiom6qpnYnarf44jzs",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Sec-Fetch-Site": "same-site",
      Origin: "https://dlabelweb.ctaiot.com",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003239) NetType/4G Language/zh_CN",
      "Sec-Fetch-Mode": "cors",
      Referer: "https://dlabelweb.ctaiot.com/",
      Host: "dlabel.ctaiot.com",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Accept: "*/*"
    };
  const body = "shareUserId=" + storedShareUserId,
    _0xd1887 = {
      url: url,
      method: method,
      headers: _0x2ce702,
      body: body
    };
  $task.fetch(_0xd1887).then(_0x40ae0e => {
    console.log(_0x40ae0e.statusCode + "\n\n" + _0x40ae0e.body);
    $done();
  }, _0x4be4b3 => {
    console.log(_0x4be4b3.error);
    $done();
  });
}