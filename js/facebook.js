function statusChangeCallback(response) {
  // console.log('statusChangeCallback');
  // console.log(response);
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    KT.accessToken = response.authResponse.accessToken;
    //socket
    // socket.emit("send-access-token", Co.accessToken);
    KT.checkConnect = response.status;
    testAPI();
    // console.log(response.id);
    // return response;
  } else {
    console.log('not connected');
  }
}
function checkLoginState(callback) {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
  callback();
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '1946278075689391',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/vi_VN/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function testAPI() {
  KT.checkCallbackLogin = true;
  FB.api(
    '/me', function (response) {
      // console.log(response.id, response.name);
      KT.checkId = response.id;
      KT.nameFB = response.name;
      // KT.game.state.start('load');
    });
  return KT.checkId, KT.nameFB;
}
