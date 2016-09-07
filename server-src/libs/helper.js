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