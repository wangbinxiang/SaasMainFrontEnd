class userTranslator {
    constructor() {
        
    }

    newUser (id, username, password, userClass) {
        return new userClass(id, username, password);
    }

    //翻译mock用户信息
    
    toUserFromJsonApiBody (body, aUserClass) {
        const id = body.id;
        const username = body.username;
        const password = body.password;

        return this.newUser(id, username, password, aUserClass);
    }

}