
/**
 * 审核资料填写
 * @author wangbinxiang
 * @date   2016-09-07T11:21:08+0800
 * @return {[type]}                 [description]
 */
export async function showAuditForm(ctx, next) {
    const title = '资料审核';

    await ctx.render('information/auditForm', {
        title
    });
}