import BaseRequest from '../../libs/BaseRequest';
import { attachmentApiServiceLocation } from '../../libs/ApiServiceLocation';
import { GET, SEND_FILE } from '../../config/httpMethodConf';
import { ATTACHMENT_UPLOAD, ATTACHMENT_GET, ATTACHMENT_GET_IMAGE } from '../../config/apiFeatureConf';


export default class AttachmentRequestJsonApi extends BaseRequest {
    constructor(feature, originData) {
        const host = attachmentApiServiceLocation();
        super(host, feature, originData);
    }

    upload() {
        let url = '/attachments';

        this.url = url;

        this.method = SEND_FILE;

        this.data = {
            name: 'file',
            path: this.originData.path
        }
    }

    get() {

    }

    getImage() {

    }

    buildFeature() {
        switch(this.feature) {
            case ATTACHMENT_UPLOAD:
                this.upload();
                break;
            case ATTACHMENT_GET:
                this.get();
                break;
            case ATTACHMENT_GET_IMAGE:
                this.getImage();
                break;
            default:
                throw new Error('Invalid feature method');
        }
    }
}