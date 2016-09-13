import Attachment from '../model/Attachment.js';
import AttachmentAdapter from '../adapter/AttachmentAdapter';

export default class AttachmentsService {
    constructor() {
        this.attachmentAdapter = new AttachmentAdapter();
    }

    upload(path) {
        return this.attachmentAdapter.upload(path, Attachment);
    }

    get() {

    }


    getImage() {
        
    }
}