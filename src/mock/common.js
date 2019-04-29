const Mock = require('mockjs')

let listData = Mock.mock({
  'data|10': [
    {
      id: '@id',
      'type|0-1': 1,
      'code|101-110': 1,
      timeLine: '@datetime("yyyyMMddHH")',
      message: '@cparagraph(1, 3)',
      title: '@ctitle(8, 18)',
      createTime: '@datetime("T")',
      senderName: '@last',
      senderPic () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.senderName.substr(0, 1))
      },
    },
  ],
})

const menuList = [
  {"id":1,"parentId":null,"sort":0,"name":"仪表盘","href":"/index","icon":"fa fa-dashboard","children":[],
    "isShow":"1"},
  [
    {"id":108,"parentId":null,"sort":0,"name":" 资源管理","href":"/sys/resource","icon":"fa fa-database","children":[],"isShow":"1"},
    {"id":7,"parentId":null,"sort":1,"name":"菜单管理","href":"/sys/menuList","icon":"fa fa-navicon","children":[],"isShow":"1"},
    {"id":8,"parentId":null,"sort":2,"name":"角色管理","href":"/sys/roleList","icon":"fa fa-universal-access","children":[],"isShow":"1"},
    {"id":9,"parentId":null,"sort":3,"name":"用户管理","href":"/sys/userList","icon":"fa fa-user-plus","children":[],"isShow":"1"}
  ],]

  let database = menuList

module.exports = {
  'GET /messageList': function (req, res) {
    res.status(200).json(database)
  },
  'GET /sys/resource/list':function (req, res) {
    res.status(200).json(resourceList)
  },
  'GET /sys/menu/list':function (req, res) {
    res.status(200).json(menuList)
  },
  'GET /sys/role/list':function (req, res) {
    res.status(200).json(roleList)
  },
}
