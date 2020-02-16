export default [
  {
    path: "/",
    name: "home",
    text: "首页",
    menu: true,
    component: () => import("@/views/Home"),
    meta: {
      title: "首页"
    }
  },
  {
    path: "/about",
    name: "about",
    text: "关于",
    menu: true,
    component: () => import("@/views/About"),
    meta: {
      title: "关于"
    }
  },
  {
    path: "/404",
    name: "404",
    text: "not found",
    menu: false,
    component: () => import("@/views/404"),
    meta: {
      title: "404"
    }
  },
  {
    path: "*",
    redirect: "/404",
    menu: false
  },
  {
    path: "/user",
    name: "user",
    text: "用户",
    menu: true,
    component: () => import("@/views/user"),
    children: [
      {
        path: "/user",
        redirect: "/user/login",
        menu: false
      },
      {
        path: "/user/login",
        name: "login",
        text: "登录",
        menu: true,
        component: () => import("@/views/user/Login"),
        meta: {
          title: "登录"
        }
      },
      {
        path: "/user/register",
        name: "register",
        text: "注册",
        menu: true,
        component: () => import("@/views/user/Register"),
        meta: {
          title: "注册"
        }
      }
    ]
  },
  {
    path: "/d3",
    name: "d3",
    text: "暗黑3",
    menu: true,
    component: () => import("@/views/d3"),
    children: [
      {
        path: "/d3",
        redirect: "/d3/query",
        menu: false
      },
      {
        path: "/d3/query",
        name: "query",
        text: "暗黑3数据库",
        menu: true,
        component: () => import("@/views/d3/Query"),
        meta: {
          title: "暗黑3数据库"
        }
      }
    ]
  },
  {
    path: "/todo",
    name: "todo",
    text: "TODO",
    menu: true,
    needLogin: true,
    component: () => import("@/views/todo")
  },
  {
    path: "/contents",
    name: "contents",
    text: "文章",
    menu: true,
    needLogin: true,
    component: () => import("@/views/contents"),
    children: [
      {
        path: "/",
        redirect: "/contents/list",
        menu: false
      },
      {
        path: "/contents/list",
        name: "contentlist",
        text: "文章列表",
        menu: true,
        component: () => import("@/views/contents/List"),
        meta: {
          title: "文章列表"
        }
      },
      {
        path: "/contents/detail/:id",
        name: "contentdetail",
        text: "文章详情",
        menu: false,
        component: () => import("@/views/contents/Detail"),
        props: true,
        meta: {
          title: "文章列表"
        }
      }
    ]
  },
  {
    path: "/tools",
    name: "tools",
    text: "工具",
    menu: true,
    component: () => import("@/views/tools"),
    children: [
      {
        path: "/tools",
        redirect: "/tools/json",
        menu: false
      },
      {
        path: "/tools/json",
        name: "JsonEditor",
        text: "JsonEditor",
        menu: true,
        component: () => import("@/views/tools/JsonEditor"),
        meta: {
          title: "JsonEditor"
        }
      },
      {
        path: "/tools/ip",
        name: "ip",
        text: "ip",
        menu: true,
        component: () => import("@/views/tools/Ip"),
        meta: {
          title: "ip"
        }
      },
      {
        path: "/tools/tool3",
        name: "tool3",
        text: "工具3",
        menu: true,
        component: () => import("@/views/tools/TestTool3"),
        children: [
          {
            path: "/tools/tool4",
            name: "tool4",
            text: "工具4",
            menu: true,
            component: () => import("@/views/tools/TestTool4"),
            meta: {
              title: "工具4"
            }
          }
        ]
      }
    ]
  }
];
