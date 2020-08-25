# spa-webpack-template-self
单页应用脚手架（demo）


## 长效资源缓存

相对于客户端而言的，为了提高用户的使用体验，保证页面的加载速度，都会对前端的资源设置HTTP缓存。

HTTP缓存有下边两种：

- 强缓存 cache-control: max-age(xxxxxxx)
- 协商缓存，目前项目中貌似使用的协商缓存，对一次HTTP请求，没必要，建议对前端静态资源都改成强缓存。

设置缓存之后就会产生一个问题，那就是业务逻辑修改之后，如何让前端的资源缓存失效，让缓存失效：

- 地址增加版本号，或者增加query需要半手动维护。
- 地址增加hash，可以根据JavaScript内容做信息摘要，或者其他。

对于前端SPA项目来说，由于前端资源都会用到webpack打包，自然对于打包出来的资源也都会进行hash化的处理。但是为了提高项目的性能也有需要注意的优化的点。

首先明确webpack中的几个概念：

- module
- chunk
- manifest
- runtime
 
    webpack运行时函数，运行webpackJsonp这个数组中的chunk代码块。
    控制着异步资源的加载顺序，以及如果使用min-css-extract-plugin分离代码之后的css加载逻辑（动态出入link标签）。
    chunk的加载由react-loadable控制。
    
    因此如果存在增删页面的情况，是会导致runtime更新的，一旦更新就会导致缓存失效。因此需要从入口也分离出来。
    
- hash、contentHash、chunkHash

什么是长效资源缓存？

- 对于前端应用来说，资源需要设置缓存，可以极大提高项目的使用体验。
- 对于开发角度而言，每次发版修改，需要保证尽量小的代码缓存失效。

因此对于前端单页应用来说，就需要做到以下几点：

- 资源拆分，按照业务路由进行拆分
- node_module资源 细粒度拆分，区分同步异步，以及可以按照页面进行处理。
- 对于css资源从 js中拆离出来。
- runtime从入口js中拆离出来。（防止页面增删影响入口的缓存）
- module命名处理，webpack4低版本的时候是按照顺序排列的，现在改成按照module路径处理。建议线上按照hash话处理。
保证组件删除或者新增不影响其他资源的缓存。
- chunk 命名话处理。chunk也是按照阿拉
- css资源按照contenthash
- chunk hash化命名 使用 chunkhash 进行计算。
- sourceMap 的生成规则，如果开发阶段，以速度为主，线上一定要独立成，为了减小文件大小。

webpack 两种资源拆分方案：
- import(/* webpackChunkName: 'cxxxx'*/, '..')
- require.ensure()

react-loadable
- 如果当前页面的引用有变化，也会导致入口也的js缓存失效，因为 react-loadable 配合 react-router 
使用之后，会保证每次路由进入都会加载这个资源的依赖（如果依赖跟页面chunk不在一个chunk中）以及当前页面的资源。

alpha侧需要支持的内容：
- ocean 管理后台可配置，哪些chunk可以进入入口文件。

发版部分的处理：
- 由于现在发版都是采用docker部署，因此对于docker Image需要做特殊的处理。
- 每次发版docker Image 的build 都需要拿上一次版本（last）为基础再加上这次发版的内容打最新的docker

发布新的版本如何保证用户及时更新新的内容：
可以的操作可能有：

- 所有的接口都过一个中间件，去验证当前客户端版本与线上前端资源版本（hash）是否一致。
- 前端资源版本可以通过后端的一个接口进行更新（可以写一个node脚本去做这个事情，如果有没有更新成功，直接终端发版。），然后加一个filter 去做这个事情。
- 上一点补充，可以在后台网管层做这个事情，如果涉及到多个项目，建议引入node做这个事情。
- 一旦发现失效，可以返回固定的code码，然后前段重定向到登录页面。
