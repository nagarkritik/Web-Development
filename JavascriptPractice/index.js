/* OOPS in Javascript ES5
// Creating objects using custructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)

    this.getBirthYear = function(){
        return this.dob.getFullYear()
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`}
}

const p1 = new Person('Kritik', 'Nagar', '02-07-1997')
const p2 = new Person('Nitin', 'Dhakad', '07-02-1997')

console.log(p1.getBirthYear())
console.log(p1.getFullName())
*/


/* OOPS - ES6 - Classes

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear(){
        return this.dob.getFullYear()
    }

    getfullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const p1 = new Person('Kritik', 'Nagar', '02-07-1997')
const p2 = new Person('Nitin', 'Dhakad', '11-21-1993')

console.log(p1.getfullName())
console.log(p2.getfullName())
console.log(p1.getBirthYear())
console.log(p2.getBirthYear())
*/


/*class Users{

    static registeredUsers = 0;

    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
        Users.registeredUsers += 1
    }
}

const u1 = new Users('nagarkritik', 'nagarkritik@gmail.com','621367466')
const u2 = new Users('nagarkritik', 'nagarkritik@gmail.com','621367466')
const u3 = new Users('nagarkritik', 'nagarkritik@gmail.com','621367466')

console.log(Users.registeredUsers)


class Member extends Users{
    constructor(username, email, password, memPackage){
        super(username, email, password)
        this.memPackage = memPackage
        this.membershipActiveTillDate = new Date()
        this.membershipActiveTillDate.setMonth(this.membershipActiveTillDate.getMonth()+1)
    }

    getPackage(){
        console.log(this.username+' is subscribed to '+this.memPackage+' package')
    }

    renewMembership(){
        if (this.memPackage == 'Standard'){
            this.membershipActiveTillDate.setMonth(this.membershipActiveTillDate.getMonth()+1)
        }
        else if(this.memPackage == 'Yearly'){
            this.membershipActiveTillDate.setFullYear(this.membershipActiveTillDate.getFullYear()+1)
        }    
    }
}

let m1 = new Member('kritik', 'kritik@gmail.com', '123', 'Yearly')


m1.renewMembership()
console.log(m1.membershipActiveTillDate)

let currDate = new Date // gives current date and time
console.log(currDate)

let pastDate = new Date(1997, 1, 7, 10, 30, 15);
let futureDate = new Date(2023, 1, 7)

console.log(pastDate)
console.log(futureDate)

let date = new Date(2019, 0, 11, 15, 45, 55, 55)
let date1 = new Date(2019, 0, 11, 15, 45, 55, 55)

// get the month of the date (0-11)
console.log(date.getMonth())

// get the full year (YYYY)
console.log(date.getFullYear())

// get the date of the month (1-31)
console.log(date.getDate())

// get the day of the week (0-6) 0-Sunday 6-Saturday
console.log(date.getDay())

//get the hour of the date (0-23)
console.log(date.getHours())

// get the number of milliseconds since 1st Jan 1970
// is used to compare 2 dates if they are same or not
console.log(date.getTime())

/*
if(date == date1){
    console.log('Same')
}
else{
    console.log('Different')
}

if(date.getTime() == date1.getTime()){
    console.log('Same')
} else{
    console.log('Different')
}*/


function Student(firstName, lastName, rolllno, sex, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.rolllno = rolllno
    this.sex = sex
    this.dob = new Date(dob)

    this.getBirthYear = function(){
        return Math.floor(this.dob.getFullYear()/1000/60/60/365)
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`}
}

Student.prototype.findEligibility = function findEligibility(minAge){
    
    let today = new Date()
    let age = today - this.dob
    let a = Math.floor(age/1000/60/60/24/365)

    if(a>=minAge){
        console.log(this.getFullName()+' is eligible.')
    }
    else{
        console.log(this.getFullName()+' is not eligible')}
}

const s1 = new Student('Kritik', 'Nagar', 1, 'Male', '1994-02-20')
const s2 = new Student('Nitin', 'Dhakad', 2, 'Female', '1990-04-12')


if(s1.dob.getTime() < s2.dob.getTime()){
    console.log(s1.getFullName())
}else if (s1.dob.getTime() > s2.dob.getTime()){
    console.log(s2.getFullName())
}else{
    console.log("Age is same")
}


s1.findEligibility(30)
s2.findEligibility(30)



