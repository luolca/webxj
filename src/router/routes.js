import dashboard from "../pages/dashboard.vue";
import NotFoundView from "../components/404.vue";
import knowledge from "../pages/knowledge";
import role from "../pages/sys/role.vue";
import resource from "../pages/sys/resource.vue";
import login from "../pages/login.vue";
import app from "../App.vue";
import sysUser from "../pages/sys/user.vue";
import userAdd from "../pages/sys/userAdd.vue";
import resetPwd from "../pages/resetPwd.vue";
// Routes
const routes = [
  {path: '/login', component: login},
  {
    path: '/test', component: app, children: [
    {path: '*', component: NotFoundView}
  ]
  },
  {
    path: '', component: app, children: [
    {path: '/resetPwd', component: resetPwd},
    {path: '/index', component: dashboard},
    {path: '/knowledge', component: knowledge, name: '知识库管理'},
    {path: '/sys/roleList', component: role, name: '什么鬼的管理'},
    {path: '/sys/userList', component: sysUser},
    {path: '/sys/userAdd', component: userAdd},
    {path: '/sys/resource', component: resource}
  ]
  },
  {path: '*', component: NotFoundView}
]


export default routes

