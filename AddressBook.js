// UC1 : Address Book Contact with first and last names, address, city, state, zip, phone number and email

class AddressBook {
    
    constructor (firstname,lastname,address,city,state,zipcode,phoneNumber,emailId) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.phoneNumber = phoneNumber;
    this.emailId = emailId;
}

    //  UC2 : Regex Pattern

get firstname() { return this._firstname; }
set firstname(firstname) {
    let pattern1 = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (pattern1.test(firstname))
        this._firstname = firstname;
    else console.log('FirstName is Incorrect!');

}

get lastname() { return this._lastname; }
set lastname(lastname) {
    let pattern2 = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (pattern2.test(lastname))
        this._lastname = lastname;
    else console.log('LastName is Incorrect!');
}

get address() { return this._address; }
set address(address) {
    let pattern3 = RegExp('^[A-Z]{1}[a-z]{4,}$');
    if (pattern3.test(address))
        this._address = address;
    else console.log('Address is Incorrect!');
}

get city() { return this._city; }
set city(city) {
    let pattern4 = RegExp('^[A-Z]{1}[a-z]{4,}$');
    if (pattern4.test(city))
        this._city = city;
    else console.log('City is Incorrect!');
}

get state() { return this._state; }
set state(state) {
    let pattern5 = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (pattern5.test(state))
        this._state = state;
    else console.log('State is Incorrect!');
}

get zipcode() { return this._zipcode; }
set zipcode(zipcode) {
    let pattern6 = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
    if (pattern6.test(zipcode))
        this._zipcode = zipcode;
    else console.log('Zipcode is Incorrect!');
}

get phoneNumber() { return this._phoneNumber; }
set phoneNumber(phoneNumber) {
    let pattern7 = RegExp('^[+][0-9]{1,}\\s?[1-9]{1}[0-9]{9}$');
    if (pattern7.test(phoneNumber))
        this._phoneNumber = phoneNumber;
    else console.log('PhoneNumber is Incorrect!');
}

get emailId() { return this._emailId; }
set emailId(emailId) {
    let pattern8 = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
    if (pattern8.test(emailId))
        this._emailId = emailId;
    else console.log('EmailId is Incorrect!');
}

toString() {
    return "firstname= " + this.firstname + ", lastname = " + this.lastname + ", address = " + this.address +
        ", city = " + this.city + ", state = " + this.state + ", zipcode = " + this.zipcode +
        ", phoneNumber = " + this.phoneNumber + ", emailId = " + this.emailId;
}

}

let Book = new AddressBook("Shubham","Gawali","Panchavati","Nashik","Maharashtra","422003","+91 7218645332","shubhamgawali7745@gmail.com");
console.log(Book.toString());

 