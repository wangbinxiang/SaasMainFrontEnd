/**
 * 生成随机整数
 * @author wangbinxiang
 * @date   2016-09-07T01:33:04+0800
 * @param  {Number}                 low  [description]
 * @param  {Number}                 high [description]
 * @return {[type]}                      [description]
 */
export function randomInt(low = 100000, high = 999999) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}




// /**
//  * 上传文件设置
//  * @type {Object}
//  */
// import path from 'path'
// import multer from 'koa-multer'
// import mkdirp from 'mkdirp-then'
// import fsp from 'fs-promise'

// const storage = multer.diskStorage({
//   async destination (req, file, cb) {
//     const now = new Date()
//     const year = now.getFullYear()
//     const month = now.getMonth() + 1
//     const day = now.getDate()
//     const dir = path.resolve('upload', `${year}-${month}-${day}`, file.fieldname)
//     const exists = await fsp.exists(dir)
//     if (!exists) {
//       await mkdirp(dir)
//     }
//     cb(null, dir)
//   },
//   filename (req, file, cb) {
//     const { name, ext } = path.parse(file.originalname)
//     cb(null, `${name}-${randomString(2)}-${ext}`)
//   }
// })

// export const upload = multer({ storage: storage })