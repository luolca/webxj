<template>
  <div class="nav">
    <div class="icon-left">
      <i class="fa fa-icon fa-bars fa-1x fa-rotate-90" @click.stop.prevent="toggleMenu(!sidebar.collapsed,device.isMobile)"></i>
      <i class="fa fa-icon fa-angle-double-left fa-1x"></i>
    </div>
    <div class="icon-left">
      <i class="fa fa-icon fa-home fa-1x" @click="ret"><b>首页</b></i>
    </div>
    <!--el-tag
      :key="tag"
      v-for="tag in currentMenus"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag.name}}
    </el-tag-->
    <div class="icon-right">
      <i class="fa fa-icon fa-angle-double-right fa-1x"></i>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import types from "../store/mutation-types"
  export default {
    name: "navMenu",
    computed: {
      ...mapGetters({
        sidebar: 'sidebar',
        device:'device',
        currentMenus:'currentMenus',
      }),

    },
    methods: {
      toggleMenu(collapsed,isMobile){
        if(isMobile){
          this.toggleSidebarShow();
        }else{
          this.toggleSidebar();
        }
      },
      ...mapMutations({
        toggleSidebar: types.TOGGLE_SIDEBAR,
        toggleSidebarShow: types.TOGGLE_SIDEBAR_SHOW,
        setUserInfo: types.SET_USER_INFO,
      }),
      ret() {
        this.$router.push({path: '/index'});
      }
    },
  }
</script>

<style scoped>
  .icon-left {
    display:inline;
    font-size: medium;
  }
  .icon-right {
    position: absolute;
    right: 15%;
    display:inline;
    margin-right: 15px;
    font-size: medium;
  }
  .nav {
    position: fixed;
    z-index: 3;
    min-width: 100%;
    height: 32px;
    margin-left: 200px;
    margin-top: 62px;
    background-color: #ffff;
  }
  .fa-icon {
    margin-left: 20px;
  }
</style>
