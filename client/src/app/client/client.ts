export class Client{
    constructor(
        public _id: number,
        public fname: string,
        public lname: string,
        public password: string,
        public email: string,
        public sex: string,
        public phone: number,
        public countryId: Number,
        public cityId: string,
        public birthDate: string,
        public sicknessesId: number,
        public surgeriesId: number,
        public emergencyContactId: number,
        public lastVisited: string,
        public professionId: number,
        public isCompetitor: boolean,
        public competitorId: number,
        public paymentId: number,
        public postalCodeId: number,
        public isFrozeen: boolean,
    ) {}
}
