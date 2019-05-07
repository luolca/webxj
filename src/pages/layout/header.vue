<template>
  <header class="main-header animated" :class="{mobileLogo:device.isMobile}">
    <a href="#" class="logo">
      <img class="Img" src="../../asset/logo.png">
      <span class="logo-lg">&nbsp;<b style="color: #ffff">安全可靠应用质量测评平台</b></span>
    </a>
    <nav class="navbar">
      <div class="navbar-custom-menu">
        <el-dropdown trigger="click" class="navbar-dropdown">
          <div class="el-dropdown-link">
            <img :src='userInfo.avatar' style="width: 25px;height: 25px;border-radius: 50%; vertical-align: middle;" alt="U">
            {{userInfo.name}}
          </div>
          <el-dropdown-menu style="padding: 0px">
            <div>
              <div class="header-pic">
                <img :src='userInfo.avatar' class="img-circle" alt="User Image" >
                <p>{{userInfo.name}}</p>
              </div>
              <div class="pull-left">
                <router-link :to="{ path: '/resetPwd' }">
                  <el-button type="default">修改密码</el-button>
                </router-link>
              </div>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="navbar-dropdown" trigger="click">
          <div class="el-dropdown-link" style="height: auto;line-height: inherit">
            <el-badge :value="count" :max="99" class="item">
              <i class="fa fa-bell"></i>
            </el-badge>
          </div>
          <el-dropdown-menu>
            <ul class="message-list">
              <li v-for="(item,index) in list">
                <router-link :to="{path:'/sys/message',query:{id:item.id}}">
                  <p>{{index + 1}}. {{item.title}}</p>
                </router-link>
              </li>
            </ul>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="navbar-dropdown">
          <div class="el-fa-icon">
            <div style="padding-top: 2px; padding-right: 10px">
              <i class="fa fa-arrows-alt"></i>
            </div>
          </div>
        </el-dropdown>
        <el-dropdown class="navbar-dropdown">
          <div class="el-fa-icon">
            <div style="padding-top: 2px; padding-right: 20px">
              <i class="fa fa-sign-out"  @click="logout"></i>
            </div>
          </div>
        </el-dropdown>
      </div>

    </nav>

  </header>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import types from "../../store/mutation-types"
  import * as api from "../../api"
  import  auth from '../../common/auth'
  import * as sysApi from '../../services/sys'

  export default {
    data(){
      return {
        showMessageBox: false,
        showProfileBox: false,
        list: [],
        count: 4,
        show:true,
      }
    },
    computed: mapGetters({
      sidebar: 'sidebar',
      userInfo: 'userInfo',
      device:'device',
    }),
    methods: {
      toggleMenu(collapsed,isMobile){
        if(isMobile){
          this.toggleSidebarShow();
        }else{
          this.toggleSidebar();
        }
      },
      logout(){
        this.$http.get(api.LOGOUT)
          .then(res => {
            auth.logout();
            this.$http.defaults.headers.common['authSid'] = '';
            this.$router.push({path: '/login'});
          }).catch(error => {
          auth.logout();
          this.$http.defaults.headers.common['authSid'] = '';
          this.$router.push({path: '/login'});
        })
      },
      ...mapMutations({
        toggleSidebar: types.TOGGLE_SIDEBAR,
        toggleSidebarShow: types.TOGGLE_SIDEBAR_SHOW,
        setUserInfo: types.SET_USER_INFO,
      }),
    },
    created(){
      let item = window.sessionStorage.getItem("user-info");
      if (!!item){
        this.setUserInfo(JSON.parse(item));
      }
      this.count = 0;
      this.list = [];
      sysApi.msgList().then(res => {
          if (res && res.length>0){
            this.count = res.length;
            this.list = res;
          }
        })
    },
    mounted() {
      // document.addEventListener('click', this.autoHide, false)
    },
    destroyed() {
      // document.removeEventListener('click', this.autoHide, false)
    }
  }
</script>
<style scoped>
  .animated {
    animation-duration: .2s;
  }

  .main-header a {
    text-decoration: none;
    color: #48576a;
  }

  .main-header {
    position: fixed;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    z-index: 1999;
    animation-name: slideInDown;
    animation-fill-mode: both;
    color: #48576a;
  }

  .main-header .navbar .sidebar-toggle {
    float: left;
    background-color: transparent;
    background-image: none;
    padding: 15px 15px;
    font-family: fontAwesome;
    line-height: 20px;
  }

  .main-header .navbar .sidebar-toggle:before {
    content: "\f03b";
  }

  .main-header {
    background-color: #2f5398;
  }

  .main-header .logo {
    -webkit-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    display: block;
    float: left;
    height: 60px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 400px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0 15px;
    font-weight: 300;
    overflow: hidden;
    text-decoration: none;
  }

  .main-header .logo .logo-lg {
    display: block;
    height: 38px;
    float: left;
    line-height: 38px;
    margin-top: 10px;
    color: #ffff;
  }

  .main-header .navbar {
    -webkit-transition: margin-left 0.3s ease-in-out;
    -o-transition: margin-left 0.3s ease-in-out;
    transition: margin-left 0.3s ease-in-out;
    margin-bottom: 0;
    margin-left: 400px;
    border: none;
    min-height: 60px;
    border-radius: 0;
    background-color: #2f5398;
  }

  .layout-top-nav .main-header .navbar {
    margin-left: 0;
  }


  body.hold-transition .main-header .navbar,
  body.hold-transition .main-header .logo {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }

  .main-header .navbar .sidebar-toggle {
    display: block;
  }

  .main-header .navbar .sidebar-toggle:hover {
    background: #f9f9f9;
  }

  .main-header .logo {
    border-bottom: 0 solid transparent;
  }


  @media (max-width: 800px) {

    .main-header .logo {
      display: none;
    }

    .main-header .navbar {
      margin: 0;
    }

    .main-header .logo, .main-header .navbar {
      width: 100%;
      float: none;
    }

  }
  .main-header.closeLogo .navbar{
    margin-left: 44px;
  }

  .main-header.closeLogo .logo{
    width: 44px;
    padding: 0 8px;
  }
  .main-header.closeLogo .logo .logo-lg b{
    display: none;
  }
  .main-header.closeLogo .sidebar-toggle {
    background: #f9f9f9;
  }

  .main-header.closeLogo .navbar .sidebar-toggle:before {
    content: "\f03c";
  }

  .main-header.mobileLogo .navbar .sidebar-toggle:before {
    content: "\f03a";
  }

  .navbar-custom-menu{
    float: right;
  }

  .navbar-custom-menu .el-dropdown-link{
    color: #ffff;
    cursor: pointer;
    height: 60px;
    padding: 16px 5px;
    min-width: 40px;
    text-align: center;
  }
  .navbar-custom-menu .el-fa-icon {
    color: #ffff;
    cursor: pointer;
    height: 60px;
    padding: 16px 5px;
    min-width: 20px;
    text-align: center;
  }
  .navbar-custom-menu .el-fa-icon .fa{
    /*margin-left: 5px;*/
  }
  .navbar-custom-menu .el-dropdown-link img{
    background-color: #108ee9;
  }
  .message-list {
    list-style: none;
    padding: 0 10px;
  }
  .message-list li{
    list-style: none;
    height: 25px;
    line-height: 25px;
  }
  .message-list li a{
    text-decoration: none;
  }
  .message-list li:hover{
    background-color: #f9f9f9;
  }

  .el-dropdown-menu .header-pic{
    text-align: center;
    background-color: #108ee9;
    padding: 20px;
  }
  .Img {
    float: left;
    width: 50px;
    height: 50px;
  }
  .el-dropdown-menu .header-pic img{
    vertical-align: middle;
    height: 90px;
    width: 90px;
    border: 3px solid;
    border-color: transparent;
    border-color: hsla(0,0%,100%,.2);
    background-color: #108ee9;
  }
  .el-dropdown-menu .header-pic p{
    font-size: 1.5rem;
    color: #ffffff;
  }
  .el-dropdown-menu .pull-left{
    background-color: #f9f9f9;
    padding: 10px;
    display: inline-block;
    float: left;
  }
  .el-dropdown-menu .pull-right{
    background-color: #f9f9f9;
    padding: 10px;
    float: right;
    display: inline-block;
  }
</style>
