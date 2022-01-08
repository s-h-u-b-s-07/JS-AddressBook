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
    let pattern8 = RegExp('^[0-9a-zA-Z+-.]+@[-+.0-9a-zA-Z]*.[a-zA-Z]{2,3}.([a-zA-z]{2,3})$');
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

// UC3: New Address Book array and add new Contacts to 

let NewAddressBook = new Array();
NewAddressBook.push(Book)

const Contact1 = new AddressBook("Ten","Duk","Shimla","Himachal","Himachalpradesh","422101","+91 7387557696","ten@gmail.com");
NewAddressBook.push(Contact1);

const Contact2 = new AddressBook("Aman","Raj","Newarea","Dehri","Bihar","821305","+91 7759953073","amanraj1906@gmail.com");
NewAddressBook.push(Contact2);

const Contact3 = new AddressBook("Jyotirmaya","Majhi","Ashoknagar","Ranchi","Jharkhand","834001","+91 7569843125","Jyotirmaya@gmail.com");
NewAddressBook.push(Contact3);

const Contact4 = new AddressBook("Vedant","Patil","Mumbai","Mumbai","Maharashtra","422104","+91 7387597686","ved@gmail.com");
NewAddressBook.push(Contact4); 

//console.log(contactArray.toString());

for (let i = 0; i < NewAddressBook.length; i++) {
    const element = NewAddressBook[i];
   console.log(element.toString()); 
}

//UC 4: Editing Contact

let result = NewAddressBook.filter((e) => e.firstname == "Ten");
    console.log("result : "+result);

    if (result && result.length > 0) {
        result[0].firstname = 'Rahul';
        result[0].address = 'Deolali';
    }

    console.log("New Array after Updation: " + NewAddressBook);


// UC5 Ability to find a person with name and delete it from the array


NewBook = NewAddressBook.findIndex((e) => e.firstname == "Vedant");
NewAddressBook.pop(NewBook);
console.log("New Array After Delete: " + NewAddressBook);

// UC6 Ability to find number of contacts in the address book

let numOfContacts = NewAddressBook.length;
console.log("Number of Contacts in the AddressBook: " + numOfContacts);

// UC7 Ability to ensure there is no Duplicate Entry of the same Person in the Address Book

  const Contact5 = new AddressBook("Vedant","Patil","Mumbai","Mumbai","Maharashtra","422104","+91 7387597686","ved@gmail.com");
  NewAddressBook.push(Contact5);

  if (!NewAddressBook.some(el => el.firstname == "Vedant"))
    contactArray.push(Contact5);
    else
    console.log("Contact already Exists! Its a Duplicate Entry");

// UC8 Ability to search Person in a particular City or State - Use Array Functions of filter

let checkCity = NewAddressBook.filter((e) => e.city == 'Mumbai');
console.log("Contact from the addressBook as per Given city: " + checkCity);

let checkState = NewAddressBook.filter((e) => e.state == 'Maharashtra');
console.log("Contact from the addressBook as per given state: " + checkState);


// UC9 Ability to get number of contact persons i.e. count by City or State - Search Result will show count by city and by state

let counter = 0;
for (let i = 0; i < NewAddressBook.length; i++) {
if (NewAddressBook[i].city == 'Mumbai')
    counter++;
}
console.log("Number of contacts for the given City in the AddressBook: " + counter);

let counter1 = 0;
for (let i = 0; i < NewAddressBook.length; i++) {
if (NewAddressBook[i].state == 'Maharashtra')
    counter1++;
}
console.log("Number of contacts for the given State in the AddressBook: " + counter1);