# fileupload
file upload
实现文件上传的一个小demo
前端上传的数据主要有图片，普通文本框
  因为带有文件域，所以使用jquery.form.js插件来提交文件，页面布局相对简单，主要在做node
后端采用 node
  使用express框架，
   引入的模块有fs，用来操作文件的操作，主要是图片文字的复制
   body-parser,用来获取post的请求参数
   connect-multipart 重点！ 用来获取前端上传过来的文件
   cors  用来解决跨域问题
  
