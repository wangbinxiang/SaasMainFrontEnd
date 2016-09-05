import UserJsonApiBodyReader from '../reader/UserJsonApiBodyReader';

export default class UserTranslator {
    constructor() {
    }

    newUser (aUserClass, { id, cellPhone, nickName, userName, userCategory, userType, status, createTime }) {
        return new aUserClass(id, cellPhone, nickName, userName, userCategory, userType, status, createTime);
    }

    //翻译mock用户信息
    
    toUserFromJsonApiBody (body, aUserClass) {

        const bodyReader = new UserJsonApiBodyReader(body);

        let id           = bodyReader.value('id');
        let cellPhone    = bodyReader.value('cellPhone');
        let nickName     = bodyReader.value('nickName');
        let userName     = bodyReader.value('userName');
        let userCategory = bodyReader.value('userCategory');
        let userType     = bodyReader.value('userType');
        let status       = bodyReader.value('status');
        let createTime   = bodyReader.value('createTime');


        return this.newUser(aUserClass, { id, cellPhone, nickName, userName, userCategory, userType, status, createTime });
    }

}

