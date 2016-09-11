export default class Translator {
    constructor() {
    }

    newObject(aUserClass, params) {
        return new aUserClass(params);
    }
}