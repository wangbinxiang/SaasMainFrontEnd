export default class Information {
    construct({ id = 0, title = '', contactPeople = '', contactPeopleQQ = '', province = '', city = '', address = '', bankCardHolderName = '', bankCardNumber = '', bankCardCellphone = '', category = '', type = '', updateTime = '', createTime = '', statusTime = '', status = '' }) {

        this.id = id;
        this.title = title;
        this.contactPeople = contactPeople;
        this.contactPeopleQQ = contactPeopleQQ;
        this.province = province;
        this.city = city;
        this.address = address;
        this.bankCardHolderName = bankCardHolderName;
        this.bankCardNumber = bankCardNumber;
        this.bankCardCellphone = bankCardCellphone;
        this.category = category;
        this.type = type;
        this.updateTime = updateTime;
        this.createTime = createTime;
        this.statusTime = statusTime;
        this.status = status;
    }
}