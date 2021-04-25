/*
 * @Descripttion: 
 * @version: 
 * @Author: wonder.d.wang
 * @Date: 2021-04-25 10:38:36
 * @LastEditors: wonder.d.wang
 * @LastEditTime: 2021-04-25 11:13:16
 */
const express = require('express')
const http = express()
const port = 1001

http.get('/', (req, res) => {
  res.send('Hello world')
})
http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})