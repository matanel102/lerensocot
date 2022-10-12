function User(userName) {

    this.theNameOfTheUser = userName,

    this.followers = [], 

    this.ifollow = [],

    this.followAfter = function(member) {
        this.ifollow.push(member);
        member.followers.push(this);
    }

    this.sendMessage = function(mishmish) {
        this.followers.forEach((someone)=> {
            someone.getMessage(someone.theNameOfTheUser+ ' ההודעה עבור המשתמש ' +this.theNameOfTheUser+ ': '+ mishmish);
        })
    }

    this.getMessage = function(mishmish2) {
            console.log(mishmish2);
    }


}


let userNumber1 = new User('meshi');
let userNumber2 = new User('ofek');
let userNumber3 = new User('mi');
let userNumber4 = new User('Cheolon');


userNumber1.followAfter(userNumber2);
userNumber1.followAfter(userNumber4);
userNumber2.followAfter(userNumber1);
userNumber3.followAfter(userNumber1);
userNumber3.followAfter(userNumber4);
userNumber4.followAfter(userNumber1);
userNumber4.followAfter(userNumber2);


userNumber1.sendMessage('Hello');
userNumber2.sendMessage('Hey');
userNumber3.sendMessage('Good Shabes');
userNumber4.sendMessage('Batata');


console.log(' ');


console.log(userNumber1);
console.log(userNumber2);
console.log(userNumber3);
console.log(userNumber4);