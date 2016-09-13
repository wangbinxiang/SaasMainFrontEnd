// import fs from 'fs';
import RequestJsonApi from '../libs/RequestJsonApi';
import request from 'request-json';
import AttachmentService from '../models/application/AttachmentService';
import fs from 'fs';
import _ from 'lodash';
import { attachmentPicTypeList } from '../config/attachmentConf';
/**
 * 审核资料填写
 * @author wangbinxiang
 * @date   2016-09-07T11:21:08+0800
 * @return {[type]}                 [description]
 */
export async function showApplyForm(ctx, next) {
    const title = '资料审核';
    const pageJs = webpackIsomorphicTools.assets().javascript.information;

    // const client = request.createClient('http://120.25.161.1:8010');
    // client.get('/images/200/300/100', (err, header, body) => {
    //     if (err) {
    //         reject(err);
    //     } else {
    //         body = JSON.parse(body);
    //         console.log(body);
    //     }
    // });

    // const attachmentService = new AttachmentService();
    // let attachmentList = await attachmentService.getImage([100,101], 1200, 1300);
    // console.log(attachmentList);

    await ctx.render('information/apply', {
        title, pageJs
    });
}

export async function apply(ctx, next) {
    
}

export async function upload(ctx, next) {
    console.log(ctx.req.files);
    const limitSize = 4194304;
    if (ctx.req.files) {
        const attachmentService = new AttachmentService();
        let attachmentList = [];
        let attachment = null;
        for(var file of ctx.req.files) {
            console.log(file);
            if (file.size <= limitSize && _.indexOf(attachmentPicTypeList, file.mimetype) !== -1) {
                attachment = await attachmentService.upload(file.path);
                attachmentList.push(attachment);
            };
            fs.unlink(file.path, (err) => {
                if (err) {
                    throw err;
                }
                console.log('successfully deleted ' + file.path);
            });

        }
        console.log(attachmentList);

        ctx.body = { success: true , attachmentList: attachmentList};
    } else {
        ctx.body = { success: false, error: '没有文件' };
    }
}