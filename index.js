// Code your solutions in this file

const messages = [];

function writeCards(names, occasion) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
        debugger;
    }
    return messages;
}

function countDown(number) {
    let startNum = number;
    while (startNum >= 0) {
        console.log(startNum--);
        debugger;
    }
}