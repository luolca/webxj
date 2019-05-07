<template>
  <imp-panel class="main">
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-row style="width: 100%; float: right">
        <el-col :span="12">
          <b style="padding-top: 2px">知识库条件搜索：</b>
          <div class="el-input" style="width: 200px;">
              <i class="el-input__icon el-icon-search"></i>
              <input type="text" placeholder="输入查询条件" v-model="searchKey" @keyup.enter="search($event)"
                     class="el-input__inner">
            </div>
        </el-col>
      </el-row>
    </h3>
    <el-scrollbar class="table">
      <el-collapse style="height: 100%" v-for="(item, index) in list" :key="index" >
        <el-collapse-item>
          <template slot="title">
            <b style="color: #2f5398">{{item.title}}</b>
            <el-dropdown style="margin-left: 30px">
                <span class="el-dropdown-link">
                  <i class="el-icon-more el-icon--right"></i>
                </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="open('add', item, index)"><i class="el-icon-plus"></i>&nbsp;&nbsp;新增</el-dropdown-item>
                <el-dropdown-item @click.native="open('delete', item, index)"><i class="el-icon-delete"></i>&nbsp;&nbsp;删除</el-dropdown-item>
                <el-dropdown-item @click.native="open('edit', item, index)"><i class="el-icon-edit"></i>&nbsp;&nbsp;编辑</el-dropdown-item>
                <!--el-dropdown-item @click.native="open('publish', item, index)"><i class="el-icon-upload2"></i>&nbsp;&nbsp;发布</el-dropdown-item-->
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          <div>{{item.message}}</div>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
    <el-pagination
      small
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <el-dialog title="配置资源" v-model="dialogVisible" custom-class="dialog">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="用户名：">
          <el-input v-model="form.name" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="登录用户名：">
          <el-input v-model="form.nickName"></el-input>
        </el-form-item>
        <el-form-item label="手机：">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="工号：">
          <el-input v-model="form.no"></el-input>
        </el-form-item>
        <el-form-item label="固定电话：">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="状态：">
          <el-radio-group v-model="form.status">
            <el-radio :label="0">未激活</el-radio>
            <el-radio :label="1">已激活</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户类型：">
          <el-radio-group v-model="form.userType">
            <el-radio label="0">注册用户</el-radio>
            <el-radio label="1">后台配置用户</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input type="textarea" v-model="form.remarks"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
         <el-button type="primary">审 核</el-button>
        <el-button type="primary" @click="addNext">继续新增</el-button>
      </span>
    </el-dialog>
   <!--button @click="open()">加密</button-->
  </imp-panel>
</template>

<script>
  import * as sysApi from '../services/sys'
  import * as def from '../services/default'
  import * as api from "../api"
  import CryptoJS from "crypto-js";
  export default {
    name: "knowledge",
    data(){
      return {
        dialogVisible: false,
        form: {
          id: null,
          no: '',
          name: '',
          nickName: '',
          phone: '',
          email: '',
          mobile: '',
          status: 1,
          userType: '1',
          remarks: '',
          a: null
        },
        roleTree: [],
        listLoading: false,
        searchKey: '',
        list: [
          {id: '1', name:'lca', phone: '123432212112', message:'的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开' +
              '的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开', title: '11'},
          {id: '2', name:'lca', phone: '123432212112', message:'的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开', title: '22'},
          {id: '3', name:'lca', phone: '123432212112', message:'的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开', title: '33'},
          {id: '4', name:'lca', phone: '123432212112', message:'的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开', title: '44'},
          {id: '5', name:'lca', phone: '123432212112', message:'的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开', title: '44'},
          {id: '6', name:'lca', phone: '123432212112', message:'的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开', title: '44'},
          {id: '7', name:'lca', phone: '123432212112', message:'的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开', title: '44'},
          {id: '8', name:'lca', phone: '123432212112', message:'的死灵法师缴费基数卡斯柯不怕ask量较大恐龙女i圣诞节安芙兰if阿萨斯多你放你离开', title: '44'},
        ],
        tableData: {
          pagination: {
            total: 0,
            pageNo: 1,
            pageSize: 10,
            parentId: 0
          },
          rows: [],
        }
      }
    },
    methods: {
      search(target){
        this.loadData();
      },
      loadData(){
        this.rows = this.list;
        console.dir(this.rows);
        /*sysApi.userList({
          key: this.searchKey,
          pageSize: this.tableData.pagination.pageSize,
          pageNo: this.tableData.pagination.pageNo
        })
          .then(res => {
            this.tableData.rows = res.records;
            this.tableData.pagination.total = res.total;
          });*/
      },
      open(command, item, index) {
        console.dir(item);
        console.dir(command);
        console.dir(index);
        if (command === 'add' || command === 'edit') {
          this.dialogVisible = !this.dialogVisible;
        }
      },
      addNext() {
        this.form = new Form();
      }
    },
    created(){
      this.loadData();
    },
  }
  export function Form() {
    this.id = null;
    this.no = ''; // 组织机构名称
    this.name = ''; //  组织状态默认为1
    this.nickName =  ''; // 联系人
    this.phone =''; // 电话
    this.email = ''; // 组织地址
    this.mobile = ''; // 备注
    this.status =  1;
  }
</script>

<style>
  .el-pagination {
    float: right;
    margin-top: 15px;
  }
  .main {
    height: calc(93vh - 100px);
  }
  .table {
    height: calc(80vh - 200px);
    margin-top: 5px;
    margin-left: 30px;
    overflow-x: hidden;
  }
  .table .el-scrollbar__wrap {
    overflow-x: hidden;
    width: calc(90vw - 150px);
    height: 100%;
  }
  .row {
    width: 100%;
    padding: 5px;
    padding-top: 0;
  }
  .row .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .text {
    padding-top: 10px;
    width: 70%;
    height: 20%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dialog {
    width:900px;
    top: 5% !important;
  }
  .dialog  .el-dialog__header {
    padding-top: 0;
    background: #2f5398;
  }
  .dialog .el-dialog__title {
    color: #ffff;
  }
  .dialog .el-dialog__headerbtn .el-dialog__close {
    color: #ffff;
    font-size: 10px;
  }
  .dialog .el-dialog__body {
    padding: 30px 40px;
  }
  .dialog .el-form .el-form-item__label {
    text-align: right;
    padding-left: 0;
  }
  .main .dialog .el-form  .el-input {
    height: 36px;
    width: 280px;
  }
</style>
