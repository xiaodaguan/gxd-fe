const baseUrl = location.hostname.indexOf("guanxiaodade") > 0 ? "http://guanxiaoda.cn:8081" : "http://localhost:8081";

function fetchDemo() {
    return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(resp => resp.json())
        .then(myJson => JSON.stringify(myJson.disclaimer));
}

function getPosts(id, pageNo, pageSize) {
    return fetch(baseUrl + "/api/v1/blog/u/" + id + "/posts?pageNo=" + pageNo + "&pageSize=" + pageSize)
        .then(resp => resp.json())
        ;
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

function getCityId(city, province) {
    return fetch(baseUrl + "/api/v1/loc/getCityIdByEn?cityNameEn=" + city + "&provinceEN=" + province)
        .then(resp => resp.json())
        .then(res => res.data);
}

function getWeather(cityId) {

    return fetch(baseUrl + "/api/v1/weather/get/" + cityId.substr(2))
        .then(response => response.json())
        .then(res => res.data)
        ;
}

function validateToken(token) {
    var url = baseUrl + "/sys/user/validate/" + token;
    return fetch(url)
        .then(r => {
            return r.json();
        });
}

function login(name, pwd) {
    return fetch(baseUrl + "/sys/user/auth", {
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

function queryD3Equip(kw) {
    return fetch(baseUrl + "/api/v1/d3/query/equip/" + kw)
        .then(r => r.json())
        .then(j => j.data);
}

function getBingWallpaper() {
    return fetch(baseUrl + "/api/v1/wp/get").then(r => r.json()).then(res => res.data);
}

console.log(baseUrl);

export {
    fetchDemo,
    getPosts,
    getPost,
    getIpInfo,
    getCityId,
    getWeather,
    validateToken,
    login,
    queryD3Equip,
    getBingWallpaper
};