import inquirer from "inquirer";
//    STEP 1:   make variable to generate random number
const randomNumber = Math.floor(10000 + Math.random() * 90000);
// for check balance
let myBalance = 0;
//      STEP 2:  enter name and select course
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter Your name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter your name!";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled",
        choices: ["GenAi", "Web 3.0", "Metaverse", "Digital Marketing"]
    }
]);
//     STEP 3:  details of courses and fees.
const tutionFee = {
    "GenAi": 5000,
    "Web 3.0": 8000,
    "Metaverse": 10000,
    "Digital Marketing": 3000
};
console.log(`Tution Fees: ${tutionFee[answer.courses]}`);
console.log(`Balance: ${myBalance}`);
//      STEP 4:  this step is for how you will like to pay.
let paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "How would you like to pay?",
        choices: ["Bank Transfer", "Easypaisa", "jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Plaese enter your amount!";
        }
    }
]);
console.log(`You select ${paymentMethod.payment}`);
//      STEP 5: make sure that payment success
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentMethod.amount); //parseFloat is converting string into floating number.
if (tutionFees === paymentAmount) {
    console.log(`You have successfully enrolled in ${answer.courses}`);
    // STEP 6: view student status.
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Next",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n----------   STATUS   ----------\n");
        console.log(`Your Name: ${answer.students}`);
        console.log(`Your ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Fee Paid: ${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log(`Exiting!!!!`);
    }
}
else {
    console.log("Invalid amount!");
}
;
