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

function getCityId(city, province) {
    return fetch("http://guanxiaoda.cn:8081/api/v1/loc/getCityIdByEn?cityNameEn=" + city + "&provinceEN=" + province)
        .then(resp => resp.json())
        .then(res => res.data);
}

function getWeather(cityId) {

    return fetch("http://guanxiaoda.cn:8081/api/v1/weather/get/" + cityId.substr(2))
        .then(response => response.json())
        .then(res => res.data)
        ;
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

function queryD3Equip(kw) {
    return fetch("http://guanxiaoda:8081/api/v1/d3/query/equip/" + kw)
        .then(r => r.json())
        .then(j => j.data);
}

function getBingWallpaper() {
    return fetch("http://guanxiaoda.cn:8081/api/v1/wp/get").then(r => r.json()).then(res=>res.data);
}

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