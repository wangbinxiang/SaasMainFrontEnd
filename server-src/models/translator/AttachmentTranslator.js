import Translator from '../../libs/Translator';
import AttachmentJsonApiBodyReader from '../reader/AttachmentJsonApiBodyReader';

export default class AttachmentTranslator extends Translator {
    constructor() {
        super();
    }

    //翻译users信息
    toObject(body, aAttachmentClass) {

        const bodyReader = new AttachmentJsonApiBodyReader(body);

        let id  = bodyReader.value('id');
        let url = bodyReader.value('url');


        return this.newObject(aAttachmentClass, { id, url });
    }
}