console.log("  |   |")
console.log("  |   |")
console.log("  |   |")
console.log("----------")
console.log("  |   |")
console.log("  |   |")
console.log("  |   |")
console.log("----------")
console.log("  |   |")
console.log("  |   |")
console.log("  |   |")

// activity

const age= 118
if (age>=18){
    console.log("I can serve you");
}
else {
    console.log("You aren't old enough to drink, I can't serve you")
}

// Challenge 1 (if/else)

let password = "hhaa";

if (password.length < 8) {
    console.log("Your password is too short");
}
else {
    console.log(`${password}`);
}


//Challenge 2 

let num = "20"
if (num % 3 === 0 && num % 5 === 0) {
    console. log(" divisible by 3 or 5")
    } else {
      console.log(" not divisible by 3 or 5");
    }

// Switch version 

switch (num) {

    case num % 3 === 0 && num % 5 === 0:
        console.log(" divisible by 3 or 5")
        break;
        
    default:
        console.log(" not divisible by 3 or 5");

}
  
// activity

let favWeb = [
    "google",
    "youtube",
    "reddit"
];

favWeb.push("netflix", "disney+");

console.log(favWeb);

favWeb.pop();

console.log(favWeb)

// ac

let day = "Sunday";
let alarm = "";

const alarmClock = () => {
    const alarmTrigger = {
        weekendAlarm: "No Alarm Needed",
        weekdayAlarm: "Get up at 7 AM",
    }
    
    if (day === "Saturday" || day === "Sunday") {
        console.log(alarmTrigger.weekendAlarm);
    }
    
    else {
        console.log(alarmTrigger.weekdayAlarm);
    }
}

alarmClock();

// ac

let shoppingList = [
    ["apples", "oranges"],
    ["sugar", "butter"],
    ["green juice", "water"]
    ];
    
console.log (shoppingList[1][2])













