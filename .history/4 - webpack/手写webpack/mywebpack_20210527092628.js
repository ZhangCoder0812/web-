const fs = require('js')

// 读取文件的
function createAsset(filename){
  const content = fs.readFileSync(filename,'utf-8')
  console.log(content)
}