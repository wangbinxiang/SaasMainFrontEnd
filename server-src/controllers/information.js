// import fs from 'fs';
import RequestJsonApi from '../libs/RequestJsonApi';
// import request from 'request-json';
import AttachmentService from '../models/application/AttachmentService';

import AttachmentApiServiceLocation from '../models/apiServiceLocation/AttachmentApiServiceLocation';
import request from 'request-json';
/**
 * 审核资料填写
 * @author wangbinxiang
 * @date   2016-09-07T11:21:08+0800
 * @return {[type]}                 [description]
 */
export async function showApplyForm(ctx, next) {
    const title = '资料审核';
    const pageJs = webpackIsomorphicTools.assets().javascript.information;

    // const request = new RequestJsonApi('http://120.25.161.1:8001', '/users/signIn', { 
    //     cellPhone: '18629371871',
    //     password: '123456'
    // });

    // let { header, body} = await request.post();

    const client = request.createClient('http://120.25.161.1:8001');
    client.post('/users/signIn', {
        cellPhone: '18629371871',
        password: '123456'
    }, (err, header, body) => {
        console.log(header.statusCode);
        console.log(header.body);
        console.log(body);
    })



    await ctx.render('information/apply', {
        title, pageJs
    });
}

export async function apply(ctx, next) {
    
}

export async function upload(ctx, next) {
    console.log(ctx.req.files);

    console.log(AttachmentApiServiceLocation.get());

    const attachmentService = new AttachmentService();

    let attachment = await attachmentService.upload(ctx.req.files[0].path);

    console.log(attachment);
    // let formData = {
    //     name: 'file',
    //     path: ctx.req.files[0].path
    // }

    // const request = new RequestJsonApi('http://120.25.161.1:8010', '/attachments', formData);

    // const { header, body } = await request.sendFile()

    // var client = request.createClient('http://120.25.161.1:8010/');

    // client.sendFile('/attachments', ctx.req.files[0].path, { name: 'file' }, function(err, res, body) {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log(res.statusCode);
    //   console.log(body);
    // });


    // console.log(header.statusCode);
    // console.log(header.body);
    // console.log(body);


    ctx.body = { success: true };
}