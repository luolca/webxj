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
      <el-col class="row">
        <b style="color: blue;border: 2px;border-bottom: #2f5398;margin-left: 10px">11111</b>
        <a style="margin-left: 5px">
          <i class="fa fa-eye" style="margin-left: 2px" aria-hidden="true" @click="dialogVisible = true"></i>
          <i class="fa fa-pencil-square-o" style="margin-left: 2px" aria-hidden="true"></i>
          <i class="fa fa-trash" style="margin-left: 2px" aria-hidden="true"></i>
        </a>
        <span class="text">的时间JFK洒家分厘卡机看来飞机离开居房立刻就的说法看来就是的法律框架是考虑对方立刻大师傅尽量克服的撒娇看来抵扣税款大家快来发动机路口附近的撒旦发生sjlsanmfsdna,dassdaddsa阿三打撒dsasa啊实打实大大dsdadsadasddaadsmdadadkjldasjldsajkldashjdaskdaskdsakjlsdajlkdsakjldsajklljadskadsn,dfnsdnf,adsn,dsfn,msdan</span>
      </el-col>
      <el-col class="row">
        <b style="color: blue;border: 2px;border-bottom: #2f5398;margin-left: 10px">11111</b>
        <span class="text">的时间JFK洒家分厘卡机看来飞机离开双方的安居房立刻就的说法看来就是的法律框架是考虑对方立刻大师傅尽量克服的撒娇看来抵扣税款大家快来发动机路口附近的撒旦发生sjlsanmfsdna,dassdaddsa阿三打撒dsasa啊实打实大大dsdadsadasddaadsmdadadkjldasjldsajkldashjdaskdaskdsakjlsdajlkdsakjldsajklljadskadsn,dfnsdnf,adsn,dsfn,msdan</span>
      </el-col>
      <el-col class="row">
        <h4 style="color: blue;border: 2px;border-bottom: #2f5398;margin-left: 10px">11111</h4>
        <span class="text">的时间JFK洒家分厘卡机看来飞机离开双方的安居房立刻就的说法看来就是的法律框架是考虑对方立刻大师傅尽量克服的撒娇看来抵扣税款大家快来发动机路口附近的撒旦发生sjlsanmfsdna,dassdaddsa阿三打撒dsasa啊实打实大大dsdadsadasddaadsmdadadkjldasjldsajkldashjdaskdaskdsakjlsdajlkdsakjldsajklljadskadsn,dfnsdnf,adsn,dsfn,msdan</span>
      </el-col>
      <el-col class="row">
        <h4 style="color: blue;border: 2px;border-bottom: #2f5398;margin-left: 10px">11111</h4>
        <span class="text">的时间JFK洒家分厘卡机看来飞机离开双方的安居房立刻就的说法看来就是的法律框架是考虑对方立刻大师傅尽量克服的撒娇看来抵扣税款大家快来发动机路口附近的撒旦发生sjlsanmfsdna,dassdaddsa阿三打撒dsasa啊实打实大大dsdadsadasddaadsmdadadkjldasjldsajkldashjdaskdaskdsakjlsdajlkdsakjldsajklljadskadsn,dfnsdnf,adsn,dsfn,msdan</span>
      </el-col>
      <el-col class="row">
        <h4 style="color: blue;border: 2px;border-bottom: #2f5398;margin-left: 10px">11111<i class="fa fa-eye" style="margin-left: 2px" aria-hidden="true"></i> </h4>
        <span class="text">的时间JFK洒家分厘卡机看来飞机离开双方的安居房立刻就的说法看来就是的法律框架是考虑对方立刻大师傅尽量克服的撒娇看来抵扣税款大家快来发动机路口附近的撒旦发生sjlsanmfsdna,dassdaddsa阿三打撒dsasa啊实打实大大dsdadsadasddaadsmdadadkjldasjldsajkldashjdaskdaskdsakjlsdajlkdsakjldsajklljadskadsn,dfnsdnf,adsn,dsfn,msdan</span>
      </el-col>
      <el-col class="row">
        <h4 style="color: blue;border: 2px;border-bottom: #2f5398;margin-left: 10px">11111<i class="fa fa-eye" style="margin-left: 2px" aria-hidden="true"></i> </h4>
        <span class="text">的时间JFK洒家分厘卡机看来飞机离开双方的安居房立刻就的说法看来就是的法律框架是考虑对方立刻大师傅尽量克服的撒娇看来抵扣税款大家快来发动机路口附近的撒旦发生sjlsanmfsdna,dassdaddsa阿三打撒dsasa啊实打实大大dsdadsadasddaadsmdadadkjldasjldsajkldashjdaskdaskdsakjlsdajlkdsakjldsajklljadskadsn,dfnsdnf,adsn,dsfn,msdan</span>
      </el-col>
      <el-col class="row">
        <h4 style="color: blue;border: 2px;border-bottom: #2f5398;margin-left: 10px">11111<i class="fa fa-eye" style="margin-left: 2px" aria-hidden="true"></i> </h4>
        <span class="text">的时间JFK洒家分厘卡机看来飞机离开双方的安居房立刻就的说法看来就是的法律框架是考虑对方立刻大师傅尽量克服的撒娇看来抵扣税款大家快来发动机路口附近的撒旦发生sjlsanmfsdna,dassdaddsa阿三打撒dsasa啊实打实大大dsdadsadasddaadsmdadadkjldasjldsajkldashjdaskdaskdsakjlsdajlkdsakjldsajklljadskadsn,dfnsdnf,adsn,dsfn,msdan</span>
      </el-col>
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
          </span>
    </el-dialog>

  </imp-panel>
</template>

<script>
  import * as sysApi from '../services/sys'
  import * as api from "../api"
  export default {
    name: "knowledge",
    data(){
      return {
        currentRow: {},
        dialogVisible: false,
        defaultProps: {
          children: 'children',
          label: 'name',
          id: "id",
        },
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
        tableData: {
          pagination: {
            total: 0,
            pageNo: 1,
            pageSize: 10,
            parentId: 0
          },
          rows: []
        }
      }
    },
    methods: {
      search(target){
        this.loadData();
      },
      loadData(){
        sysApi.userList({
          key: this.searchKey,
          pageSize: this.tableData.pagination.pageSize,
          pageNo: this.tableData.pagination.pageNo
        })
          .then(res => {
            this.tableData.rows = res.records;
            this.tableData.pagination.total = res.total;
          });
      },
      change() {
        let accounts = {
          0:{A : 1, B: '1', C : '1', D : '1'},
          1:{A : 1, B: '1', C : '1', D : '1'}
        };
        let list = new Array();
        list.push(accounts["0"]);
        console.dir(list);
        this.form.a = list;
          this.$http.post(api.SYS_USER_UPDATE, this.form)
            .then(res => {
            })
      }
    },
    created(){
      this.loadData();
       this.change();
    }
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
    height: 100%;
    margin-top: 5px;
    margin-left: 30px
  }
  .row {
    width: 100%;
    padding: 5px;
    padding-top: 0;
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
