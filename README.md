## Build Setup
``` bash
cnpm install

# 修改文件内容/build/webpack.base.conf.js，将element-ui和vuex-router-sync版本替换成install后node_modules目录中当前版本，注意不能用软链
#      {
#        test: /\.js$/,
#        loader: 'babel-loader',
#        //exclude: /(node_modules|bower_components)/,
#        // 注意elementUI的源码使用ES6需要解析
#        include: [
#          resolve('src'),
#          resolve('test'),
#          resolve('/node_modules/.1.4.8@element-ui/src'),
#          resolve('/node_modules/.1.4.8@element-ui/packages'),
#          resolve('/node_modules/.4.3.0@vuex-router-sync')
#        ]
#      },


# serve with hot reload at localhost:9000
npm run dev
npm run build

npm run mock
```

1. **启动mock服务**
npm run mock
2. **启动dev server**
npm run dev


- #### 打包发布,修改根路径名
1. 修改 **[./Vue-Admin/config/index.js](https://github.com/lanux/Vue-Admin/blob/master/config/index.js)**   参数:build.assetsPublicPath
```javascript
//eg.  assetsPublicPath: '/Vue-Admin/'
assetsPublicPath: 'Your path name';
```
2. 修改 **[./Vue-Admin/src/api.js](https://github.com/lanux/Vue-Admin/blob/master/src/api.js)**
```javascript
// export const CONTEXT = './Vue-Admin';
export const CONTEXT = 'Your path name';
```


```
cnpm i json-server -D
cnpm i json-server -S
npm outdated：检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新
npm update moduleName：更新node模块
npm uninstall moudleName：卸载node模块

```
