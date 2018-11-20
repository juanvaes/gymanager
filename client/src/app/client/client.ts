export class Client{
    constructor(
        public fname: string,
        public lname: string,
        public password: string,
        public email: string,
        public sex: string,
        public phone: string,
        public countryId: string,
        public cityId: string,
        public birthDate: string,
        public sicknessesId: string,
        public surgeriesId: string,
        public emergencyContactId: string,
        public lastVisited: string,
        public professionId: string,
        public isCompetitor: string,
        public competitorId: string,
        public paymentId: string,
        public postalCodeId: string,
        public isFrozeen: string,
        public hobbies: string,
    ) {}
}
