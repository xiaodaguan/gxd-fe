function fetchDemo() {
  return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(resp => resp.json())
    .then(myJson => JSON.stringify(myJson.disclaimer));
}

function getPosts() {
  return fetch("https://api.github.com/repos/xiaodaguan/xiaodaguan.github.io/contents/_posts").then(resp => resp.json());
}

function getPost(id) {
  var url = "https://raw.githubusercontent.com/xiaodaguan/xiaodaguan.github.io/master/_posts/" + id;
  return fetch(url).then(resp => {
    return resp.text();
  });
}

function getIpInfo() {
  return fetch("http://ip-api.com/json/").then(r => r.json());
}

function validateToken(token) {
  var url = "http://guanxiaoda.cn:8081/sys/user/validate/" + token;
  console.log(url);
  return fetch(url)
    .then(r => {
      return r.json();
    })
    .then(j => j.success);
}

function login(name, pwd) {
  return fetch("http://guanxiaoda.cn:8081/sys/user/auth", {
    body: JSON.stringify({
      uname: name,
      upwd: pwd
    }),
    cache: "no-cache",
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  }).then(r => r.json());
}
export { fetchDemo, getPosts, getPost, getIpInfo, validateToken, login };
