class userTranslator {
    constructor() {
        
    }

    newUser (id, username, password, aUserClass) {
        return new aUserClass(id, username, password);
    }

    //翻译mock用户信息
    
    toUserFromJsonApiBody (body, aUserClass) {
        const id = body.data.id;
        const username = body.data.attributes.username;
        const password = body.data.attributes.password;

        return this.newUser(id, username, password, aUserClass);
    }

}

export default userTranslator;