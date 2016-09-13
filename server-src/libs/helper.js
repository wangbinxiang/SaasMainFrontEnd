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


/**
 * 生成随机字符串
 * @param  {Number} len 要生成的长度
 * @return {String} pwd 生成的随机字符串
 */
export function randomString (len) {
  len = len || 5
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
 * 上传文件设置
 * @type {Object}
 */
import path from 'path'
import multer from 'koa-multer'

export const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename (req, file, cb) {
    console.log(file);
    const { name, ext } = path.parse(file.originalname)
    cb(null, `${name}-${randomString(2)}-${ext}`)
  }
})
