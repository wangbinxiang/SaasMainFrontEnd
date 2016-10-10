// import fs from 'fs';
import RequestJsonApi from '../libs/RequestJsonApi';
import request from 'request-json';
import AttachmentService from '../models/application/AttachmentService';
import fs from 'fs';
import _ from 'lodash';
import { attachmentPicTypeList } from '../config/attachmentConf';
import InformationService from '../models/application/InformationService';
/**
 * 审核资料填写
 * @author wangbinxiang
 * @date   2016-09-07T11:21:08+0800
 * @return {[type]}                 [description]
 */
export async function showApplyForm(ctx, next) {
    const title = '资料审核';
    const pageJs = webpackIsomorphicTools.assets().javascript.information;

    // const informationService = new AttachmentService();
    // const information = await informationService.get([100]);

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
    //个人信息
    let idCardFront        = ctx.request.body.idCardFront;
    let idCardBack         = ctx.request.body.idCardBack;
    let contactName        = ctx.request.body.contactName;
    let contactPhone       = ctx.request.body.contactPhone;
    let contactQQ          = ctx.request.body.contactQQ;
    let province           = ctx.request.body.province;
    let city               = ctx.request.body.city;
    let address            = ctx.request.body.address;
    let category           = ctx.request.body.category;
    
    //商社名称
    let title              = ctx.request.body.title;
    
    let bankCardHolderName = ctx.request.body.bankCardHolderName;
    let bankCardNumber     = ctx.request.body.bankCardNumber;
    let bankCardCellphone  = ctx.request.body.bankCardCellphone;
    
    //组团社，批发商，地接社信息
    let authorizePic       = ctx.request.body.authorizePic;
    let registrationPic    = ctx.request.body.registrationPic;
    let businessLicensePic = ctx.request.body.businessLicensePic;
    
    
    //个人导游
    let touristGuideCard   = ctx.request.body.touristGuideCard;


    const informationService = new InformationService();
    const information = await informationService.apply(1, ctx.request.body);

    console.log(information);

    ctx.body = { success: true };
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

export async function showPartnerForm(ctx, next) {
    const title = '合伙人申请';
    const pageJs = webpackIsomorphicTools.assets().javascript.information;

    

    await ctx.render('information/partner', {
        title, pageJs
    });
}