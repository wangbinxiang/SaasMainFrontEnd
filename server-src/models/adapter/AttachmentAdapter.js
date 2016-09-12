import Adapter from '../../libs/Adapter';
import AttachmentTranslator from '../translator/AttachmentTranslator';
import AttachmentRequestJsonApi from '../request/AttachmentRequestJsonApi';
import { ATTACHMENT_UPLOAD, ATTACHMENT_GET, ATTACHMENT_GET_IMAGE } from '../../config/apiFeatureConf';


export default class AttachmentAdapter extends Adapter {
    constructor() {
        super();
        this.translator = new AttachmentTranslator();
    }

    buildRequest(apiFeature, data) {
        this.requestObject = new AttachmentRequestJsonApi(apiFeature, data);
    }

    upload(path, aAttachmentClass) {
        this.buildRequest(ATTACHMENT_UPLOAD, { path: path});

        this.activeClass = aAttachmentClass;

        return this.request();
    }
}